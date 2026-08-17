import { test, expect, type Page } from "@playwright/test";

// Regression coverage for a real bug: clicking a photo to open the full-screen
// viewer threw `ReactDOM.findDOMNode is not a function` (removed in React 19)
// deep inside react-photo-collage's bundled react-images dependency, crashing
// the whole subtree -- visitors saw a blank white screen and Escape did nothing.
// react-photo-collage/react-images were replaced with native MosaicGrid/Lightbox
// components; these tests pin that fix down and must never let it silently return.

function collectPageErrors(page: Page) {
  const errors: string[] = [];
  page.on("pageerror", (err) => errors.push(err.message));
  return errors;
}

test.describe("Photography page", () => {
  test("loads with all album sections and no page errors", async ({ page }) => {
    const errors = collectPageErrors(page);
    await page.goto("/photography");
    await page.waitForLoadState("networkidle");

    for (const title of ["17-Mile Drive", "Time Square", "Fisherman's Wharf", "Nature & Quiet"]) {
      await expect(page.getByRole("heading", { name: title, exact: false })).toBeVisible();
    }

    expect(errors).toEqual([]);
  });

  test("featured mosaic section renders clickable tiles", async ({ page }) => {
    await page.goto("/photography");
    await page.waitForLoadState("networkidle");

    const featured = page.getByTestId("featured-mosaic");
    await expect(featured).toBeVisible();
    const tiles = featured.getByTestId("photo-tile");
    await expect(tiles.first()).toBeVisible();
    expect(await tiles.count()).toBeGreaterThan(0);
  });

  test("clicking a tile opens the lightbox showing the real image, no page errors", async ({ page }) => {
    const errors = collectPageErrors(page);
    await page.goto("/photography");
    await page.waitForLoadState("networkidle");

    const firstTile = page.getByTestId("photo-tile").first();
    await firstTile.click();

    const lightbox = page.getByTestId("lightbox");
    await expect(lightbox).toBeVisible();
    await expect(lightbox).toHaveAttribute("role", "dialog");
    await expect(lightbox).toHaveAttribute("aria-modal", "true");

    // The specific failure mode of the original bug: the page went blank.
    await expect(page.locator("body")).not.toBeEmpty();
    const image = page.getByTestId("lightbox-image");
    await expect(image).toBeVisible();
    expect(await image.getAttribute("src")).toBeTruthy();

    expect(errors).toEqual([]);
  });

  test("Escape closes the lightbox", async ({ page }) => {
    await page.goto("/photography");
    await page.waitForLoadState("networkidle");

    await page.getByTestId("photo-tile").first().click();
    await expect(page.getByTestId("lightbox")).toBeVisible();

    await page.keyboard.press("Escape");
    await expect(page.getByTestId("lightbox")).not.toBeVisible();
  });

  test("clicking the backdrop closes the lightbox", async ({ page }) => {
    await page.goto("/photography");
    await page.waitForLoadState("networkidle");

    await page.getByTestId("photo-tile").first().click();
    const lightbox = page.getByTestId("lightbox");
    await expect(lightbox).toBeVisible();

    // Click the backdrop itself, not the image/controls inside it.
    await lightbox.click({ position: { x: 5, y: 5 } });
    await expect(lightbox).not.toBeVisible();
  });

  test("the close button closes the lightbox", async ({ page }) => {
    await page.goto("/photography");
    await page.waitForLoadState("networkidle");

    await page.getByTestId("photo-tile").first().click();
    const lightbox = page.getByTestId("lightbox");
    await expect(lightbox).toBeVisible();

    await page.getByTestId("lightbox-close").click();
    await expect(lightbox).not.toBeVisible();
  });

  test("arrow controls navigate between photos in an album", async ({ page }) => {
    await page.goto("/photography");
    await page.waitForLoadState("networkidle");

    // Fisherman's Wharf (Album3) has 5 photos -- enough to exercise navigation.
    const album = page.locator(".album-card", { hasText: "Fisherman's Wharf" });
    await album.getByTestId("photo-tile").first().click();

    const image = page.getByTestId("lightbox-image");
    const firstSrc = await image.getAttribute("src");

    await page.getByTestId("lightbox-next").click();
    await expect(image).not.toHaveAttribute("src", firstSrc ?? "");
    const secondSrc = await image.getAttribute("src");

    await page.getByTestId("lightbox-prev").click();
    await expect(image).toHaveAttribute("src", firstSrc ?? "");
    expect(secondSrc).not.toBe(firstSrc);

    // Keyboard arrows do the same thing.
    await page.keyboard.press("ArrowRight");
    await expect(image).toHaveAttribute("src", secondSrc ?? "");
    await page.keyboard.press("ArrowLeft");
    await expect(image).toHaveAttribute("src", firstSrc ?? "");
  });

  test("mobile viewport: tiles stack and the lightbox is usable", async ({ browser }) => {
    const context = await browser.newContext({ viewport: { width: 375, height: 812 } });
    const page = await context.newPage();
    const errors = collectPageErrors(page);

    await page.goto("/photography");
    await page.waitForLoadState("networkidle");
    const hasHorizontalOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth + 1
    );
    expect(hasHorizontalOverflow).toBe(false);

    const firstTile = page.getByTestId("photo-tile").first();
    await firstTile.click();
    await expect(page.getByTestId("lightbox")).toBeVisible();
    await expect(page.getByTestId("lightbox-image")).toBeVisible();

    await page.keyboard.press("Escape");
    await expect(page.getByTestId("lightbox")).not.toBeVisible();

    expect(errors).toEqual([]);
    await context.close();
  });
});
