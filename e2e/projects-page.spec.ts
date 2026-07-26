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
