import { test, expect } from "@playwright/test";

// Regression coverage for the Music page redesign: the old react-bootstrap
// Tabs "pill" bar (unthemed default Bootstrap blue, no spacing) was replaced
// with real routes (/music/noisynos, /music/playlists) and a hub page at
// /music using the same ContentTile pattern as the landing page's Hobbies
// section -- so both are shareable/bookmarkable and look consistent with
// the rest of the site.

test.describe("Music hub", () => {
  test("shows two tiles styled like the landing page's Hobbies tiles", async ({ page }) => {
    await page.goto("/music");
    const tiles = page.locator(".music-hub-grid .content-tile");
    await expect(tiles).toHaveCount(2);

    await expect(page.getByText("NoisyNos", { exact: false }).first()).toBeVisible();
    await expect(page.getByText("Playlists", { exact: false }).first()).toBeVisible();
  });

  test("NoisyNos tile links to /music/noisynos", async ({ page }) => {
    await page.goto("/music");
    await page.locator(".content-tile", { hasText: "NoisyNos" }).click();
    await expect(page).toHaveURL(/\/music\/noisynos$/);
    await expect(page.getByRole("heading", { name: "Check Out My Socials" })).toBeVisible();
  });

  test("Playlists tile links to /music/playlists", async ({ page }) => {
    await page.goto("/music");
    await page.locator(".content-tile", { hasText: "Playlists" }).click();
    await expect(page).toHaveURL(/\/music\/playlists$/);
    await expect(page.getByRole("heading", { name: "Check Out My Spotify Playlists" })).toBeVisible();
  });
});

test.describe("Music sub-pages", () => {
  test("both sub-pages have a working back link to the hub", async ({ page }) => {
    await page.goto("/music/noisynos");
    await page.getByRole("link", { name: "← Music" }).click();
    await expect(page).toHaveURL(/\/music$/);

    await page.goto("/music/playlists");
    await page.getByRole("link", { name: "← Music" }).click();
    await expect(page).toHaveURL(/\/music$/);
  });

  test("each sub-page is directly reachable by URL, not just via the hub", async ({ page }) => {
    await page.goto("/music/noisynos");
    await expect(page.getByRole("heading", { name: "Check Out My Socials" })).toBeVisible();

    await page.goto("/music/playlists");
    await expect(page.getByRole("heading", { name: "Check Out My Spotify Playlists" })).toBeVisible();
  });
});
