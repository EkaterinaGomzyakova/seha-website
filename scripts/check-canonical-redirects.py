"""Verify live canonical redirects without submitting forms or sending mail."""

import time
from urllib.error import HTTPError, URLError
from urllib.request import HTTPRedirectHandler, Request, build_opener


class NoRedirect(HTTPRedirectHandler):
    def redirect_request(self, req, fp, code, msg, headers, newurl):
        return None


def response_headers(url: str) -> tuple[int, str | None]:
    for attempt in range(3):
        try:
            with build_opener(NoRedirect).open(Request(url, method="HEAD"), timeout=30) as response:
                return response.status, response.headers.get("Location")
        except HTTPError as error:
            status, location = error.code, error.headers.get("Location")
            error.close()
            if status < 500 or attempt == 2:
                return status, location
        except (URLError, TimeoutError, OSError):
            if attempt == 2:
                raise
        time.sleep(2)
    raise RuntimeError("No HTTP response")


def main() -> None:
    for path in (
        "/ru/",
        "/en/",
        "/ru/products/substrates/grow-bag/?redirect_check=canonical&value=a%20b",
    ):
        canonical = "https://seha-group.ru" + path
        for origin in (
            "http://seha-group.ru",
            "http://www.seha-group.ru",
            "https://www.seha-group.ru",
        ):
            url = origin + path
            status, location = response_headers(url)
            if status != 308 or location != canonical:
                raise RuntimeError(
                    f"Wrong canonical redirect: {url}: {status}, {location!r}; "
                    f"expected 308, {canonical!r}"
                )
            print("Verified permanent redirect:", url)
        status, location = response_headers(canonical)
        if status != 200 or location:
            raise RuntimeError(f"Canonical page must load without redirect: {canonical}: {status}")
        print("Verified canonical page:", canonical)


if __name__ == "__main__":
    main()
