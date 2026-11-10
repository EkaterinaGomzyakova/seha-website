"""Deploy the PHP mail handler, preserving live SMTP credentials."""

import io
import os
import runpy
import ssl
from ftplib import FTP_TLS, error_perm
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
read_optional = runpy.run_path(str(ROOT / "scripts/configure-reg-ru.py"))["read_optional"]


def main():
    directory = os.environ["FTP_DIRECTORY"]
    if directory == "/" or ".." in directory or not directory.endswith("/"):
        raise ValueError("Use the restricted website directory")
    with FTP_TLS(context=ssl.create_default_context(), timeout=120) as ftp:
        ftp.connect(os.environ["FTP_SERVER"], 21)
        ftp.login(os.environ["FTP_USERNAME"], os.environ["FTP_PASSWORD"])
        ftp.prot_p()
        ftp.cwd(directory)
        website_directory = ftp.pwd()
        for folder in ("api", "api/private", "api/private/vendor", "api/private/vendor/phpmailer"):
            try:
                ftp.mkd(folder)
            except error_perm:
                ftp.cwd(folder)
                ftp.cwd(website_directory)

        files = [
            (ROOT / "public/api/.htaccess", "api/.htaccess"),
            (ROOT / "public/api/private/.htaccess", "api/private/.htaccess"),
            (ROOT / "server/php/inquiry-core.php", "api/private/inquiry-core.php"),
            (ROOT / "server/php/config.example.php", "api/private/config.example.php"),
        ]
        files += [(p, "api/private/vendor/phpmailer/" + p.name)
                  for p in (ROOT / "server/php/vendor/phpmailer").iterdir() if p.is_file()]
        # Install executable entry point last, after its protected dependencies.
        files.append((ROOT / "server/php/inquiry.php", "api/inquiry.php"))
        for source, target in files:
            content = source.read_bytes()
            if read_optional(ftp, target) == content:
                continue
            temporary = target + ".pending"
            # Never expose a temporary PHP source file without PHP processing.
            if target.endswith(".php"):
                temporary = target + ".pending.php"
            ftp.storbinary("STOR " + temporary, io.BytesIO(content))
            ftp.rename(temporary, target)
            if read_optional(ftp, target) != content:
                raise RuntimeError("Could not verify mail handler upload")
            print("Updated:", target)
        if read_optional(ftp, "api/private/config.php") is None:
            content = (ROOT / "server/php/config.example.php").read_bytes()
            ftp.storbinary("STOR api/private/config.php", io.BytesIO(content))
            print("Created disabled SMTP configuration; add credentials on hosting")


if __name__ == "__main__":
    main()
