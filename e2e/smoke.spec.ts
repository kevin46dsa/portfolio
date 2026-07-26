import { test, expect, type Page } from "@playwright/test";

const routes = [
  "/",
  "/about",
  "/projects",
  "/photography",
  "/music",
  "/bookshelf",
  "/resume",
  "/blog",
  "/sitemap",
];

// These routes embed flaky/legacy third-party services (Goodreads via a public
// CORS proxy, a Google Drive PDF iframe, Spotify/YouTube iframes, react-photo-collage's
// React-19-legacy internals) that log console noise independent of our own code. We
// still fail on pageerror (an actual uncaught exception/crash), just not on console
// noise from services we don't control.
const ROUTES_WITH_KNOWN_THIRD_PARTY_NOISE = new Set(["/photography", "/bookshelf", "/resume", "/music"]);

function collectErrors(page: Page) {
  const consoleErrors: string[] = [];
  const crashes: string[] = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") consoleErrors.push(msg.text());
  });
  page.on("pageerror", (err) => crashes.push(err.message));
  return { consoleErrors, crashes };
}

for (const route of routes) {
  test(`${route} renders with no uncaught errors`, async ({ page }) => {
    const { consoleErrors, crashes } = collectErrors(page);
    await page.goto(route);
    await page.waitForLoadState("networkidle");
    await expect(page.locator("body")).not.toBeEmpty();

    expect(crashes, `uncaught exceptions on ${route}:\n${crashes.join("\n")}`).toEqual([]);

    if (!ROUTES_WITH_KNOWN_THIRD_PARTY_NOISE.has(route)) {
      expect(consoleErrors, `console errors on ${route}:\n${consoleErrors.join("\n")}`).toEqual([]);
    }
  });
}

test("unmatched route falls back to the 404 page", async ({ page }) => {
  await page.goto("/this-route-does-not-exist");
  await page.waitForLoadState("networkidle");
  await expect(page.locator("body")).not.toBeEmpty();
});
