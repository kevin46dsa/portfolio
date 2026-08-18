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

  test("desktop: cards have significant height and the points list scrolls internally instead of growing forever", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto("/");

    const card = page.locator(".experience-preview-card").first();
    const cardHeight = await card.evaluate((el) => el.getBoundingClientRect().height);
    expect(cardHeight).toBeGreaterThan(400);

    const points = page.locator(".experience-preview-points").first();
    const overflowInfo = await points.evaluate((el) => ({
      overflowY: getComputedStyle(el).overflowY,
      scrollHeight: el.scrollHeight,
      clientHeight: el.clientHeight,
    }));
    expect(overflowInfo.overflowY).toBe("auto");
    // The first role has 8 bullets -- more content than fits, so it should
    // actually be scrollable, not just capable of scrolling in theory.
    expect(overflowInfo.scrollHeight).toBeGreaterThan(overflowInfo.clientHeight);
  });
});

test.describe("landing section order", () => {
  test("Projects, then Work Experience, then Hobbies, then About Me", async ({ page }) => {
    await page.goto("/");
    const sections = [".projects-preview-section", ".experience-preview-section", ".hobbies-preview-section", ".about-preview-section"];
    const tops = await Promise.all(
      sections.map((sel) => page.locator(sel).evaluate((el) => el.getBoundingClientRect().top + window.scrollY))
    );
    for (let i = 1; i < tops.length; i++) {
      expect(tops[i]).toBeGreaterThan(tops[i - 1]);
    }
  });
});

test.describe("landing About Me preview", () => {
  test("desktop: profile photo is a circle, not squeezed into an oval", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto("/");
    const photo = page.locator(".about-preview-photo");
    const box = await photo.evaluate((el) => {
      const r = el.getBoundingClientRect();
      return { width: r.width, height: r.height };
    });
    expect(Math.abs(box.width - box.height)).toBeLessThan(1);
  });
});

test.describe("landing Hobbies preview", () => {
  test("Music tile's image is positioned to show the Noisy Nos logo, not the default center crop", async ({ page }) => {
    await page.goto("/");
    const musicImage = page.locator(".hobbies-preview-tile", { hasText: "Music" }).locator(".hobbies-preview-image");
    const objectPosition = await musicImage.evaluate((el) => getComputedStyle(el).objectPosition);
    expect(objectPosition).not.toBe("50% 50%");
  });

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
