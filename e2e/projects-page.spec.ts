import { test, expect } from "@playwright/test";

// Structural checks only (no exact project copy/counts) since project content
// is expected to keep changing -- these should stay valid regardless.
test.describe("Project card links", () => {
  test("on /projects, Live site is emphasized and appears before GitHub", async ({ page }) => {
    await page.goto("/projects");

    const firstLinksRow = page.locator(".project-card-links").first();
    const links = firstLinksRow.locator("a");
    await expect(links.first()).toHaveText(/Live site/);

    const primaryLink = firstLinksRow.locator(".project-card-link-primary");
    await expect(primaryLink).toHaveCount(1);
    await expect(primaryLink).toHaveText(/Live site/);

    const backgroundColor = await primaryLink.evaluate((el) => getComputedStyle(el).backgroundColor);
    // Solid accent fill, not transparent -- confirms it actually reads as a button.
    expect(backgroundColor).not.toBe("rgba(0, 0, 0, 0)");
  });

  test("on the landing page's featured-work preview, Live site is emphasized", async ({ page }) => {
    await page.goto("/");
    const primaryLink = page.locator(".projects-preview-grid .project-card-link-primary").first();
    await expect(primaryLink).toHaveText(/Live site/);
  });
});

test.describe("/projects layout", () => {
  test("featured projects render as a single centered column", async ({ page }) => {
    await page.goto("/projects");

    const featuredList = page.locator(".project-featured-list");
    const featuredCards = featuredList.locator(".project-card");
    await expect(featuredCards).toHaveCount(3);

    // Every card starts at (roughly) the same x position -- one column, not
    // alternating left/right "bento" placement.
    const boxes = await featuredCards.evaluateAll((els) =>
      els.map((el) => el.getBoundingClientRect().x)
    );
    for (const x of boxes) {
      expect(Math.abs(x - boxes[0])).toBeLessThan(2);
    }
  });

  test("remaining projects render in a horizontal-scroll row", async ({ page }) => {
    await page.goto("/projects");

    const moreScroll = page.locator(".project-more-scroll");
    await expect(moreScroll).toBeVisible();

    const cardCount = await moreScroll.locator(".project-card").count();
    expect(cardCount).toBeGreaterThan(0);

    // The mechanism is a plain overflow-x row -- with only 3 items it may or
    // may not actually overflow at a given viewport (fine, expected), so this
    // checks the CSS is right rather than asserting forced overflow. The
    // mobile test below confirms it's genuinely scrollable where it matters.
    const overflowX = await moreScroll.evaluate((el) => getComputedStyle(el).overflowX);
    expect(overflowX).toBe("auto");
  });

  test("mobile viewport: the all-projects row is actually scrollable", async ({ browser }) => {
    const context = await browser.newContext({ viewport: { width: 375, height: 812 } });
    const page = await context.newPage();

    await page.goto("/projects");
    await page.waitForLoadState("networkidle");

    const moreScroll = page.locator(".project-more-scroll");
    const isScrollable = await moreScroll.evaluate((el) => el.scrollWidth > el.clientWidth + 1);
    expect(isScrollable).toBe(true);

    const hasPageOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth + 1
    );
    expect(hasPageOverflow).toBe(false);

    await context.close();
  });

  test("mobile viewport: the next card visibly peeks in, so the row reads as scrollable", async ({ browser }) => {
    const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
    const page = await context.newPage();

    await page.goto("/projects");
    await page.waitForLoadState("networkidle");

    const containerWidth = await page.locator(".project-more-scroll").evaluate((el) => el.clientWidth);
    const itemWidth = await page.locator(".project-more-item").first().evaluate((el) => el.getBoundingClientRect().width);
    // The card must leave a real, noticeable peek of the next one -- not just
    // a few px sliver that's easy to miss (the original bug: vw-based sizing
    // computed against the full viewport instead of this row's own,
    // already-narrower width).
    expect(containerWidth - itemWidth).toBeGreaterThan(60);

    await context.close();
  });
});
