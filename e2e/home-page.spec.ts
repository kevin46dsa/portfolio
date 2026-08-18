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

  test("has an animated line-art background, hidden on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto("/");
    await expect(page.locator(".hero-line")).toBeVisible();
    await expect(page.locator(".hero-glyph")).toHaveCount(3);

    await page.setViewportSize({ width: 375, height: 800 });
    await page.reload();
    await expect(page.locator(".hero-line")).toBeHidden();
    await expect(page.locator(".hero-glyph:visible")).toHaveCount(1);
  });

  test("respects prefers-reduced-motion with no console errors", async ({ browser }) => {
    const reduceMotionContext = await browser.newContext({ reducedMotion: "reduce" });
    const reduceMotionPage = await reduceMotionContext.newPage();
    const crashes: string[] = [];
    reduceMotionPage.on("pageerror", (err) => crashes.push(err.message));

    await reduceMotionPage.goto("/");
    await expect(reduceMotionPage.locator(".hero-section")).toBeVisible();
    expect(crashes).toEqual([]);
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
  test("shows every point for each role, not just dates/title/company", async ({ page }) => {
    await page.goto("/");
    const lists = page.locator(".experience-preview-points");
    await expect(lists).toHaveCount(2);

    for (const list of await lists.all()) {
      const points = list.locator("li");
      const count = await points.count();
      expect(count).toBeGreaterThan(1);
      for (const point of await points.all()) {
        const text = (await point.textContent())?.trim() ?? "";
        expect(text.length).toBeGreaterThan(10);
        expect(text.startsWith("-")).toBe(false);
      }
    }
  });
});

test.describe("landing Hobbies preview", () => {
  test("shows all 4 tiles with the right titles", async ({ page }) => {
    await page.goto("/");
    const tiles = page.locator(".hobbies-preview-tile");
    await expect(tiles).toHaveCount(4);

    for (const title of ["Photography", "Music", "Blog", "Travel Journal"]) {
      await expect(page.getByText(title, { exact: false }).first()).toBeVisible();
    }
  });

  test("Photography, Music, and Blog tiles link to their real pages", async ({ page }) => {
    await page.goto("/");

    await page.locator(".hobbies-preview-tile", { hasText: "Photography" }).click();
    await expect(page).toHaveURL(/\/photography$/);

    await page.goto("/");
    await page.locator(".hobbies-preview-tile", { hasText: "Music" }).click();
    await expect(page).toHaveURL(/\/music$/);

    await page.goto("/");
    await page.locator(".hobbies-preview-tile", { hasText: "Blog" }).click();
    await expect(page).toHaveURL(/\/blog$/);
  });

  test("Travel tile shows a Coming Soon badge and is not a link", async ({ page }) => {
    await page.goto("/");

    const travelTile = page.locator(".hobbies-preview-tile", { hasText: "Travel Journal" });
    await expect(travelTile).toBeVisible();
    await expect(travelTile).toHaveText(/Coming Soon/);
    expect(await travelTile.evaluate((el) => el.tagName)).not.toBe("A");

    await travelTile.click();
    await expect(page).toHaveURL(/\/$/);
  });
});
