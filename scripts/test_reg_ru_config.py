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


class CanonicalRedirectTests(unittest.TestCase):
    def test_precedes_existing_redirects_without_removing_other_settings(self):
        original = (
            b"RewriteEngine On\r\n"
            b"RewriteCond %{HTTPS} off\r\n"
            b"RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [R,L]\r\n"
            b"ErrorDocument 404 /404.html\r\n"
            b"<Files config.php>\r\nRequire all denied\r\n</Files>\r\n"
        )
        result = config.with_canonical_redirects(original)
        self.assertTrue(result.startswith(b"# BEGIN SEHA canonical redirects\r\n"))
        self.assertTrue(result.endswith(original))
        self.assertEqual(result.count(b"[R=308,L,NE]"), 2)
        self.assertNotIn(b"QSD", result)
        self.assertEqual(result, config.with_canonical_redirects(result))

    def test_updates_managed_block_and_preserves_settings_on_both_sides(self):
        original = (
            b"# Keep before\n# BEGIN SEHA canonical redirects\nold rules\n"
            b"# END SEHA canonical redirects\n# Keep after\n"
        )
        result = config.with_canonical_redirects(original)
        self.assertNotIn(b"old rules", result)
        self.assertTrue(result.endswith(b"# Keep before\n# Keep after\n"))
        self.assertEqual(result, config.with_canonical_redirects(result))

    def test_rejects_incomplete_block_instead_of_overwriting_settings(self):
        for content in [
            b"# BEGIN SEHA canonical redirects\nRequire all denied\n",
            b"# END SEHA canonical redirects\n",
        ]:
            with self.assertRaises(ValueError):
                config.with_canonical_redirects(content)


if __name__ == "__main__":
    unittest.main()
