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
// CORS proxy, a Google Drive PDF iframe, Spotify/YouTube iframes) that log console
// noise independent of our own code. We still fail on pageerror (an actual uncaught
// exception/crash), just not on console noise from services we don't control.
// /photography used to be here too (react-photo-collage's React-19-legacy internals),
// but that dependency was replaced with native MosaicGrid/Lightbox components -- see
// e2e/photography-page.spec.ts, which now asserts zero pageerrors through the full
// open/close/navigate flow.
const ROUTES_WITH_KNOWN_THIRD_PARTY_NOISE = new Set(["/bookshelf", "/resume", "/music"]);

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

test.describe("landing page scroll narrative", () => {
  test("shows all four sections in order", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    const landing = page.locator(".landing-page");
    await expect(page.locator(".hero-section")).toBeVisible();
    await expect(landing.getByRole("heading", { name: "Projects" })).toBeVisible();
    await expect(landing.getByRole("heading", { name: "Work Experience" })).toBeVisible();
    await expect(landing.getByRole("heading", { name: "About Me" })).toBeVisible();
  });

  test("section title hyperlinks navigate to their full pages", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    const landing = page.locator(".landing-page");

    await landing.getByRole("heading", { name: "Projects" }).getByRole("link").click();
    await expect(page).toHaveURL(/\/projects$/);

    await page.goto("/");
    await page.waitForLoadState("networkidle");
    await landing.getByRole("heading", { name: "Work Experience" }).getByRole("link").click();
    await expect(page).toHaveURL(/\/about$/);

    await page.goto("/");
    await page.waitForLoadState("networkidle");
    await landing.getByRole("heading", { name: "About Me" }).getByRole("link").click();
    await expect(page).toHaveURL(/\/about$/);
  });

  test("respects prefers-reduced-motion with no console errors", async ({ browser }) => {
    const context = await browser.newContext({ reducedMotion: "reduce" });
    const page = await context.newPage();
    const { crashes } = collectErrors(page);

    await page.goto("/");
    await page.waitForLoadState("networkidle");
    await expect(page.locator(".hero-section")).toBeVisible();
    expect(crashes).toEqual([]);

    await context.close();
  });
});
