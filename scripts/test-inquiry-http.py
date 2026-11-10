"""Exercise the deployed PHP entry point using a fake mail transport, never SMTP."""

import json
import os
from pathlib import Path
import shutil
import socket
import subprocess
import tempfile
import time
from urllib.error import HTTPError
from urllib.request import Request, urlopen

ROOT = Path(__file__).resolve().parent.parent
with tempfile.TemporaryDirectory(prefix="seha-mail-http-") as folder:
    root = Path(folder)
    private = root / "private"
    vendor = private / "vendor/phpmailer"
    vendor.mkdir(parents=True)
    shutil.copy(ROOT / "server/php/inquiry.php", root / "inquiry.php")
    shutil.copy(ROOT / "server/php/inquiry-core.php", private / "inquiry-core.php")
    for name in ["Exception.php", "SMTP.php"]:
        (vendor / name).write_text("<?php\n")
    (vendor / "PHPMailer.php").write_text("""<?php
namespace PHPMailer\\PHPMailer;
#[\\AllowDynamicProperties]
class PHPMailer {
    public function __construct($exceptions) {}
    public function isSMTP() {}
    public function isHTML($value) {}
    public function setFrom($address, $name) { $this->from = $address; }
    public function addAddress($address) { $this->to = $address; }
    public function addReplyTo($address, $name) { $this->reply = $address; }
    public function send() {
        if (file_exists(__DIR__ . '/fail')) throw new \\RuntimeException('Simulated failure');
        file_put_contents(__DIR__ . '/message.json', json_encode([
            'to' => $this->to, 'reply' => $this->reply ?? '',
            'subject' => $this->Subject, 'body' => $this->Body]));
        return true;
    }
}
""", encoding="utf-8")
    with socket.socket() as sock:
        sock.bind(("127.0.0.1", 0))
        port = sock.getsockname()[1]
    php = os.environ.get("PHP_BINARY", "php")
    process = subprocess.Popen([php, "-S", f"127.0.0.1:{port}", "-t", str(root)],
                               stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    try:
        for attempt in range(50):
            try:
                with socket.create_connection(("127.0.0.1", port), timeout=0.2):
                    break
            except OSError:
                if process.poll() is not None:
                    raise RuntimeError("PHP test server did not start")
                time.sleep(0.1)
        def request(data, origin="https://seha-group.ru"):
            req = Request(f"http://127.0.0.1:{port}/inquiry.php",
                          data=json.dumps(data).encode(),
                          headers={"Origin": origin, "Content-Type": "application/json"})
            try:
                response = urlopen(req, timeout=5)
            except HTTPError as error:
                response = error
            return response.code, json.loads(response.read())

        data = dict(type="general", locale="ru", company="Example", contact="Buyer",
                    email="buyer@example.com", phone="+79991234567", consent=True)
        assert request(data)[0] == 503, "Unconfigured SMTP must not acknowledge delivery"
        assert request(data, "https://evil.example")[0] == 403
        (private / "config.php").write_text("""<?php return ['enabled'=>true,
            'host'=>'unused.example', 'port'=>465, 'username'=>'sender@example.com',
            'password'=>'test-only', 'from'=>'sender@example.com'];""")
        assert request({**data, "consent": False})[0] == 400
        assert request(data) == (200, {"success": True})
        message = json.loads((vendor / "message.json").read_text())
        assert message["to"] == "seha.info@inbox.ru" and message["reply"] == data["email"]
        product = {**data, "type": "product", "product": "Coco chips", "productId": "coconut-chips",
                   "quantity": "5", "quantityUnit": "kg", "packaging": "5 kg", "to": "evil@example.com"}
        assert request(product) == (200, {"success": True})
        message = json.loads((vendor / "message.json").read_text())
        assert message["to"] == "seha.info@inbox.ru"
        assert "Coco chips" in message["subject"] and "5 kg" in message["body"]
        (vendor / "fail").touch()
        assert request(product) == (502, {"success": False}), "SMTP failure must not show success"
        print("PHP HTTP validation, fixed recipient, Reply-To and delivery failure checks passed; no SMTP used")
    finally:
        process.terminate()
        process.wait(timeout=5)
