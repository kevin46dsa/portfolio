import { test, expect } from "@playwright/test";

// Header's Nav.Link/NavDropdown.Item items use onClick + navigate() rather than a real
// href, so react-bootstrap renders them with an accessible role of "button", not "link" —
// unlike the Footer's Nav.Link items, which use a real href and are genuine links.

test.describe("header navigation", () => {
  test("top-level links navigate to the right page", async ({ page }) => {
    await page.goto("/");

    await page.locator("header").getByRole("button", { name: "About" }).click();
    await expect(page).toHaveURL(/\/about$/);

    await page.goto("/");
    await page.locator("header").getByRole("button", { name: "Resume" }).click();
    await expect(page).toHaveURL(/\/resume$/);

    await page.goto("/");
    await page.locator("header").getByRole("button", { name: "Projects" }).click();
    await expect(page).toHaveURL(/\/projects$/);
  });

  test("Hobbies dropdown links navigate to the right pages", async ({ page }) => {
    const hobby = async (label: string, urlPattern: RegExp) => {
      await page.goto("/");
      await page.locator("header").getByRole("button", { name: "Hobbies" }).click();
      await page.getByRole("button", { name: label }).click();
      await expect(page).toHaveURL(urlPattern);
    };

    await hobby("Music", /\/music$/);
    await hobby("Photography", /\/photography$/);
    await hobby("Bookshelf", /\/bookshelf$/);
    await hobby("Blog", /\/blog$/);
  });

  test("Hobbies dropdown opens on click and closes on Escape", async ({ page }) => {
    await page.goto("/");
    const hobbies = page.locator("header").getByRole("button", { name: "Hobbies" });

    await hobbies.click();
    await expect(page.locator(".dropdown-menu.show")).toHaveCount(1);

    await page.keyboard.press("Escape");
    await expect(page.locator(".dropdown-menu.show")).toHaveCount(0);
  });

  test("logo click returns to the landing page from a nested route", async ({ page }) => {
    await page.goto("/about");
    // The logo has an infinite CSS bounce animation, so Playwright's actionability check
    // (which waits for the element's bounding box to stop moving) never settles — force
    // the click since a real user would have no trouble clicking a bouncing logo either.
    await page.locator("header").getByText("Kevin D'sa").click({ force: true });
    await expect(page).toHaveURL(/\/$/);
  });

  test("Get in touch is an intentional dead link that falls back to the 404 page", async ({ page }) => {
    await page.goto("/");
    await page.locator("header").getByRole("button", { name: "Get in touch" }).click();
    await expect(page).toHaveURL(/\/contact-me$/);
    await expect(page.locator("body")).not.toBeEmpty();
  });
});

test.describe("footer navigation", () => {
  test("quick links navigate to the right pages", async ({ page }) => {
    await page.goto("/");
    const footer = page.locator("footer");

    await expect(footer.getByRole("link", { name: "About", exact: true })).toHaveAttribute("href", "/about");
    await expect(footer.getByRole("link", { name: "Resume" })).toHaveAttribute("href", "/resume");
    await expect(footer.getByRole("link", { name: "Projects" })).toHaveAttribute("href", "/projects");
    await expect(footer.getByRole("link", { name: "Blog" })).toHaveAttribute("href", "/blog");
    await expect(footer.getByRole("link", { name: "Sitemap" })).toHaveAttribute("href", "/sitemap");
  });

  test("sitemap link navigates correctly", async ({ page }) => {
    await page.goto("/");
    await page.locator("footer").getByRole("link", { name: "Sitemap" }).click();
    await expect(page).toHaveURL(/\/sitemap$/);
  });
});
