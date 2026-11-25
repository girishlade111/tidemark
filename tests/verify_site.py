import json
import os
import subprocess
import sys
import time
from pathlib import Path
from playwright.sync_api import sync_playwright

BASE = "http://localhost:4173"
OUT_SHOTS = Path("docs/testing/screenshots")
OUT_SHOTS.mkdir(parents=True, exist_ok=True)

ALL_ROUTES = [
    "/", "/services", "/results", "/about", "/pricing", "/blog", "/careers", "/contact",
    "/privacy", "/terms", "/style-guide", "/licenses", "/changelog", "/instructions", "/404",
    "/services/seo-and-content", "/services/paid-search", "/services/paid-social",
    "/services/content-and-creative", "/services/lifecycle-and-cro",
    "/case-studies/northwind-coffee", "/case-studies/lumi-skin", "/case-studies/halden-health",
    "/case-studies/oakline", "/case-studies/maison-rose", "/case-studies/fieldbox", "/case-studies/northrun",
    "/team/daniel-okafor", "/team/clara-benet", "/team/tom-hale", "/team/mei-tanaka",
    "/team/priya-shah", "/team/elena-ruiz", "/team/aisha-malik",
    "/blog/northwind-organic-search", "/blog/fewer-google-ads-campaigns", "/blog/creative-testing-system",
    "/blog/topic-map-buying-intent", "/blog/five-email-flows", "/blog/one-page-cfo-report", "/blog/tiktok-for-b2b",
    "/careers/paid-social-lead", "/careers/senior-ppc-manager", "/careers/seo-strategist",
    "/careers/content-editor", "/careers/growth-analyst", "/careers/client-partner",
]

SHOT_ROUTES = [
    ("/", "home"),
    ("/services", "services"),
    ("/results", "results"),
    ("/about", "about"),
    ("/pricing", "pricing"),
    ("/blog", "blog"),
    ("/careers", "careers"),
    ("/contact", "contact"),
    ("/privacy", "privacy"),
    ("/terms", "terms"),
    ("/404", "404"),
    ("/style-guide", "style-guide"),
    ("/services/seo-and-content", "service-detail"),
    ("/case-studies/northwind-coffee", "case-study-detail"),
    ("/team/daniel-okafor", "team-detail"),
    ("/blog/northwind-organic-search", "blog-detail"),
    ("/careers/paid-social-lead", "job-detail"),
]

def run_tests():
    results = []
    console_errors = []
    broken_images = []
    overflow_issues = []

    def record(name, passed, detail=""):
        results.append({"name": name, "passed": passed, "detail": detail})
        status = "PASS" if passed else "FAIL"
        print(f"[{status}] {name} {(' - ' + detail) if detail else ''}", flush=True)

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={"width": 1440, "height": 900})
        page = context.new_page()

        page.on("console", lambda msg: console_errors.append(msg.text) if msg.type == "error" else None)
        page.on("pageerror", lambda err: console_errors.append(str(err)))

        # 1. Verify all 47 routes + unknown 404
        for route in ALL_ROUTES:
            page.goto(BASE + route, wait_until="load", timeout=20000)
            page.evaluate("document.fonts.ready")
            page.wait_for_timeout(150)
            title = page.title()
            h1_text = page.locator("h1").first.inner_text() if page.locator("h1").count() > 0 else ""
            # Scroll to load lazy images
            page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
            page.wait_for_timeout(120)
            page.evaluate("window.scrollTo(0, 0)")
            imgs = page.evaluate("""() => [...document.querySelectorAll('img')].map(i => ({
                src: i.getAttribute('src'),
                ok: i.complete && i.naturalWidth > 0
            }))""")
            bad = [i for i in imgs if not i["ok"]]
            if bad:
                broken_images.append({"route": route, "bad": bad})
            overflow = page.evaluate("document.documentElement.scrollWidth > window.innerWidth")
            if overflow:
                overflow_issues.append(f"1440:{route}")
            record(f"Route {route}", bool(title and h1_text and not bad), f"title='{title}', imgs={len(imgs)}, broken={len(bad)}")

        # Reload & History Back/Forward
        page.goto(BASE + "/", wait_until="load")
        page.locator(".tm-header-nav a[href='/services']").click()
        page.wait_for_url("**/services")
        page.reload(wait_until="load")
        ok_reload = "/services" in page.url and page.locator("h1").count() > 0
        page.go_back(wait_until="load")
        ok_back = page.url.rstrip("/") == BASE
        page.go_forward(wait_until="load")
        ok_fwd = "/services" in page.url
        record("Navigation reload & back/forward", ok_reload and ok_back and ok_fwd)

        # Unknown route renders branded 404
        page.goto(BASE + "/unknown-drift-page-xyz", wait_until="load")
        ok_404 = "drifted" in page.locator("h1").inner_text().lower()
        record("Unknown route renders 404", ok_404)

        # Font verification
        page.goto(BASE + "/", wait_until="load")
        page.evaluate("document.fonts.ready")
        font_ok = page.evaluate("""() => {
            const loaded = [...document.fonts].filter(f => f.status === 'loaded').map(f => f.family);
            return loaded.some(f => f.toLowerCase().includes('geist'));
        }""")
        record("Geist font loaded", font_ok)

        # Dashboard timeframe interaction
        page.locator(".tm-dash-range-btn", has_text="90D").click()
        dash_ok = "£486,420" in page.locator(".tm-dash-kpi-val").first.inner_text()
        record("Dashboard timeframe toggle (90D)", dash_ok)

        # Results carousel interaction
        page.locator("button[aria-label='Next case study']").click()
        carousel_ok = "02" in page.locator(".tm-carousel-num").first.inner_text() and "Lumi Skin" in page.locator(".tm-carousel-client").inner_text()
        record("Results carousel next slide", carousel_ok)

        # Testimonial avatar switch
        page.locator(".tm-avatar-btn").first.click()
        test_ok = "Priya Nair" in page.locator(".tm-testimonial-author").inner_text()
        record("Testimonial avatar selection", test_ok)

        # Pricing toggle interaction
        page.locator(".tm-billing-btn", has_text="Quarterly").click()
        pricing_ok = "£2,610" in page.locator(".tm-plan-price").first.inner_text()
        record("Pricing quarterly -10% toggle", pricing_ok)

        # FAQ Accordion
        second_faq = page.locator(".tm-faq-trigger").nth(1)
        second_faq.click()
        faq_ok = second_faq.get_attribute("aria-expanded") == "true"
        record("FAQ accordion toggle", faq_ok)

        # Final CTA form validation & submission
        page.locator(".tm-cta-form-card button[type='submit']").click()
        cta_err = page.locator(".tm-cta-status.is-error").is_visible()
        page.locator(".tm-cta-chip-input").first.fill("northwind.co")
        page.locator(".tm-cta-form-card button[type='submit']").click()
        page.wait_for_timeout(550)
        cta_ok = page.locator(".tm-cta-status.is-success").is_visible()
        record("FinalCloudCTA validation & submit", cta_err and cta_ok)

        # Footer newsletter & Back to top
        page.locator(".tm-footer-newsletter-btn").click()
        nl_err = page.locator(".tm-footer-form-msg.is-error").is_visible()
        page.locator("#footer-newsletter-email").fill("alex@northwind.co")
        page.locator(".tm-footer-newsletter-btn").click()
        page.wait_for_timeout(450)
        nl_ok = page.locator(".tm-footer-form-msg.is-success").is_visible()
        record("Footer newsletter validation & submit", nl_err and nl_ok)

        page.locator(".tm-footer-top-btn").click()
        page.wait_for_timeout(500)
        top_ok = page.evaluate("window.scrollY < 100")
        record("Footer Back to top button", top_ok)

        # Results filters
        page.goto(BASE + "/results", wait_until="load")
        page.locator(".tm-filter-pill", has_text="B2B SaaS").click()
        res_filter_ok = page.locator(".tm-cs-card").count() == 1
        record("Results industry filter (B2B SaaS)", res_filter_ok)

        # Blog filters
        page.goto(BASE + "/blog", wait_until="load")
        page.locator(".tm-filter-pill", has_text="Paid social").click()
        blog_filter_ok = page.locator(".tm-blog-card").count() == 2
        record("Blog category filter (Paid social)", blog_filter_ok)

        # Careers filters
        page.goto(BASE + "/careers", wait_until="load")
        page.locator(".tm-filter-pill", has_text="Data").click()
        car_filter_ok = page.locator(".tm-job-row").count() == 1
        record("Careers team filter (Data)", car_filter_ok)

        # Contact form validation & submit
        page.goto(BASE + "/contact", wait_until="load")
        page.locator("form button[type='submit']").first.click()
        c_err = page.locator(".tm-form-status.is-error").is_visible()
        page.locator("#c-name").fill("Jane Cooper")
        page.locator("#c-email").fill("jane@northwind.co")
        page.locator("#c-website").fill("northwind.co")
        page.locator("#c-msg").fill("Need help scaling Google Ads")
        page.locator("form button[type='submit']").first.click()
        page.wait_for_timeout(550)
        c_ok = page.locator(".tm-form-status.is-success").is_visible()
        record("Contact form validation & submit", c_err and c_ok)

        # Capture local screenshots at 1440x900
        for route, name in SHOT_ROUTES:
            page.goto(BASE + route, wait_until="load")
            page.evaluate("document.fonts.ready")
            page.wait_for_timeout(200)
            total_h = page.evaluate("document.body.scrollHeight")
            for pos in range(0, total_h, 900):
                page.evaluate(f"window.scrollTo(0, {pos})")
                page.wait_for_timeout(80)
            page.evaluate("window.scrollTo(0, 0)")
            page.wait_for_timeout(250)
            page.screenshot(path=str(OUT_SHOTS / f"{name}-desktop-1440.png"), full_page=True)
            if name == "home":
                page.screenshot(path=str(OUT_SHOTS / "home-hero-1440.png"), full_page=False)

        # Tablet 1024x768 & Mobile 390x844 responsiveness + mobile menu
        for vw, vh, label in [(1024, 768, "tablet-1024"), (390, 844, "mobile-390")]:
            page.set_viewport_size({"width": vw, "height": vh})
            for route, name in [("/", "home"), ("/services", "services"), ("/results", "results"), ("/about", "about"), ("/pricing", "pricing"), ("/blog", "blog")]:
                page.goto(BASE + route, wait_until="load")
                page.wait_for_timeout(150)
                ov = page.evaluate("document.documentElement.scrollWidth > window.innerWidth")
                if ov:
                    overflow_issues.append(f"{label}:{route}")
                if name == "home":
                    page.screenshot(path=str(OUT_SHOTS / f"home-{label}.png"), full_page=True)
            if label == "mobile-390":
                page.goto(BASE + "/", wait_until="load")
                page.locator(".tm-header-burger").click()
                menu_open = page.locator(".tm-mobile-drawer").is_visible()
                page.keyboard.press("Escape")
                menu_closed = page.locator(".tm-mobile-drawer").count() == 0
                record("Mobile menu open & Escape close", menu_open and menu_closed)

        record("Zero horizontal overflow (all tested viewports)", len(overflow_issues) == 0, f"issues={overflow_issues}")
        record("Zero console/page errors", len(console_errors) == 0, f"errors={console_errors[:3]}")
        record("All images loaded cleanly", len(broken_images) == 0, f"broken={broken_images[:3]}")

        browser.close()

    passed_count = sum(1 for r in results if r["passed"])
    summary = {
        "total": len(results),
        "passed": passed_count,
        "failed": len(results) - passed_count,
        "consoleErrors": console_errors,
        "brokenImages": broken_images,
        "overflowIssues": overflow_issues,
        "results": results,
    }
    Path("docs/testing").mkdir(parents=True, exist_ok=True)
    Path("docs/testing/test-results.json").write_text(json.dumps(summary, indent=2), encoding="utf-8")
    print(f"\nSUMMARY: {passed_count}/{len(results)} passed, {len(results)-passed_count} failed", flush=True)
    if passed_count != len(results):
        sys.exit(1)

if __name__ == "__main__":
    run_tests()
