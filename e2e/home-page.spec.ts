import { test, expect } from "@playwright/test";

test.describe("Hero section", () => {
  test("content is centered, not flush-left", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto("/");

    const content = page.locator(".hero-content");
    await expect(content).toBeVisible();

    const contentBox = await content.boundingBox();
    const viewportWidth = 1280;
    if (!contentBox) throw new Error("hero-content has no bounding box");

    const leftGap = contentBox.x;
    const rightGap = viewportWidth - (contentBox.x + contentBox.width);
    // Centered content leaves roughly equal whitespace on both sides -- this is
    // exactly the regression an earlier animation-wrapper bug caused (content
    // sat flush against the left edge instead).
    expect(Math.abs(leftGap - rightGap)).toBeLessThan(40);
  });

  test("has an ambient animated background that freezes under prefers-reduced-motion", async ({ page, browser }) => {
    await page.goto("/");
    await expect(page.locator(".hero-blob")).toHaveCount(4);

    const reduceMotionContext = await browser.newContext({ reducedMotion: "reduce" });
    const reduceMotionPage = await reduceMotionContext.newPage();
    await reduceMotionPage.goto("/");
    const animationName = await reduceMotionPage
      .locator(".hero-blob")
      .first()
      .evaluate((el) => getComputedStyle(el).animationName);
    expect(animationName).toBe("none");
    await reduceMotionContext.close();
  });

  test("CTA buttons are pill-shaped and there are no image-only illustrations", async ({ page }) => {
    await page.goto("/");
    const heroSection = page.locator(".hero-section");

    await expect(heroSection.locator("img")).toHaveCount(0);

    // react-bootstrap's Button (even with an href) renders with an accessible
    // role of "button", not "link".
    const aboutMeButton = page.getByRole("button", { name: "About Me" });
    await expect(aboutMeButton).toBeVisible();
    const borderRadius = await aboutMeButton.evaluate((el) => getComputedStyle(el).borderRadius);
    // A "pill" shape has a border-radius at least half the button's height.
    const height = await aboutMeButton.evaluate((el) => el.getBoundingClientRect().height);
    expect(parseFloat(borderRadius)).toBeGreaterThanOrEqual(height / 2 - 1);
  });

  test("no horizontal overflow at mobile widths", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 800 });
    await page.goto("/");
    await page.waitForTimeout(300);
    const overflow = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
    }));
    expect(overflow.scrollWidth).toBeLessThanOrEqual(overflow.clientWidth);
  });
});

test.describe("landing Work Experience preview", () => {
  test("shows a role highlight, not just dates/title/company", async ({ page }) => {
    await page.goto("/");
    const highlights = page.locator(".experience-preview-highlight");
    await expect(highlights).toHaveCount(2);
    for (const highlight of await highlights.all()) {
      const text = (await highlight.textContent())?.trim() ?? "";
      expect(text.length).toBeGreaterThan(10);
      expect(text.startsWith("-")).toBe(false);
    }
  });
});
