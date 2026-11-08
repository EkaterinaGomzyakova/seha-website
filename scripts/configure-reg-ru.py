"""Set branded 404 documents without replacing the hosting's other settings."""

import hashlib
import io
import os
import re
import ssl
from ftplib import FTP_TLS, error_perm


def with_error_document(content: bytes, target: str) -> bytes:
    directive = b"ErrorDocument 404 " + target.encode("ascii")
    pattern = rb"(?im)^[ \t]*ErrorDocument[ \t]+404[ \t]+[^\r\n]*"
    if re.search(pattern, content):
        return re.sub(pattern, lambda _: directive, content)
    newline = b"\r\n" if b"\r\n" in content else b"\n"
    separator = b"" if not content or content.endswith(b"\n") else newline
    return content + separator + directive + newline


def read_optional(ftp: FTP_TLS, path: str) -> bytes | None:
    result = io.BytesIO()
    try:
        ftp.retrbinary("RETR " + path, result.write)
    except error_perm as error:
        if not str(error).startswith("550"):
            raise
        # A permission failure must not be mistaken for an absent file.
        parent, _, name = path.rpartition("/")
        if any(entry.rsplit("/", 1)[-1] == name for entry in ftp.nlst(parent or ".")):
            raise
        return None
    return result.getvalue()


def main() -> None:
    directory = os.environ["FTP_DIRECTORY"]
    if directory == "/" or ".." in directory or not directory.endswith("/"):
        raise ValueError("Use the restricted website directory")
    with FTP_TLS(context=ssl.create_default_context(), timeout=120) as ftp:
        ftp.connect(os.environ["FTP_SERVER"], 21)
        ftp.login(os.environ["FTP_USERNAME"], os.environ["FTP_PASSWORD"])
        ftp.prot_p()
        ftp.cwd(directory)
        for path, target in (
            (".htaccess", "/404.html"),
            ("ru/.htaccess", "/ru/404/"),
            ("en/.htaccess", "/en/404/"),
        ):
            original = read_optional(ftp, path)
            updated = with_error_document(original or b"", target)
            if updated == original:
                continue
            if original is not None:
                digest = hashlib.sha256(original).hexdigest()[:12]
                backup = path + ".seha-backup-" + digest
                if read_optional(ftp, backup) is None:
                    ftp.storbinary("STOR " + backup, io.BytesIO(original))
            temporary = path + ".seha-pending"
            ftp.storbinary("STOR " + temporary, io.BytesIO(updated))
            ftp.rename(temporary, path)
            if read_optional(ftp, path) != updated:
                raise RuntimeError("Could not verify the uploaded 404 configuration")
            print("Configured 404 document:", path)


if __name__ == "__main__":
    main()
