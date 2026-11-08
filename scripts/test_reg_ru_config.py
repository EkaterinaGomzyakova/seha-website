import importlib.util
from pathlib import Path
import unittest

spec = importlib.util.spec_from_file_location(
    "reg_config", Path(__file__).with_name("configure-reg-ru.py")
)
config = importlib.util.module_from_spec(spec)
spec.loader.exec_module(config)


class ErrorDocumentTests(unittest.TestCase):
    def test_preserves_existing_hosting_settings(self):
        original = b"AddDefaultCharset UTF-8\r\nErrorDocument 403 /403.html\r\n"
        result = config.with_error_document(original, "/404.html")
        self.assertEqual(result, original + b"ErrorDocument 404 /404.html\r\n")

    def test_replaces_only_the_404_directive(self):
        original = b"RewriteEngine On\nErrorDocument 404 /old.html\n# Keep this\n"
        result = config.with_error_document(original, "/en/404/")
        self.assertEqual(result, original.replace(b"/old.html", b"/en/404/"))
        self.assertEqual(result, config.with_error_document(result, "/en/404/"))

    def test_creates_a_missing_configuration(self):
        self.assertEqual(
            config.with_error_document(b"", "/ru/404/"),
            b"ErrorDocument 404 /ru/404/\n",
        )


if __name__ == "__main__":
    unittest.main()
