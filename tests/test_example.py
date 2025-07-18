from playwright.sync_api import sync_playwright


def test_example():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.set_content('<html><body><h1>Example Domain</h1></body></html>')
        assert page.text_content('h1') == 'Example Domain'
        browser.close()

