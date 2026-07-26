import { test, expect } from "@playwright/test";

// Regression test for a real bug: react-chrono was upgraded 2.9.1 -> 3.3.3 (needed
// for React 19 support) and silently stopped self-styling -- v3 requires an explicit
// `import "react-chrono/dist/style.css"` that was initially missed, which made the
// whole timeline render as a raw unstyled bullet list. These assertions check the
// stylesheet actually loaded and applied, not just that the component mounted.
test.describe("About page Experience timeline", () => {
  test("react-chrono's styles are loaded and applied, not rendering as a raw list", async ({ page }) => {
    await page.goto("/about");

    const wrapper = page.locator(".timeline-main-wrapper");
    await expect(wrapper).toBeVisible();

    const itemRow = page.locator(".vertical-item-row").first();
    await expect(itemRow).toBeVisible();
    expect(await itemRow.evaluate((el) => getComputedStyle(el).display)).toBe("flex");

    const cardContent = page.locator(".timeline-card-content").first();
    await expect(cardContent).toBeVisible();
    const cardStyle = await cardContent.evaluate((el) => {
      const style = getComputedStyle(el);
      return { borderRadius: style.borderRadius, boxShadow: style.boxShadow };
    });
    expect(cardStyle.borderRadius).not.toBe("0px");
    // The accent theme color (#6366f1 / rgb(99, 102, 241)) should show up in the
    // card's shadow/border -- confirms both the base stylesheet and our theme
    // override are both actually taking effect.
    expect(cardStyle.boxShadow).toContain("99, 102, 241");
  });

  test("shows all 4 work experience entries", async ({ page }) => {
    await page.goto("/about");
    await expect(page.locator(".vertical-item-row")).toHaveCount(4);
  });
});

test.describe("About page Skills section", () => {
  test("renders each skills category", async ({ page }) => {
    await page.goto("/about");
    for (const heading of ["AWS Services", "Database & Cloud", "Backend", "Frontend"]) {
      await expect(page.getByText(heading, { exact: false }).first()).toBeVisible();
    }
  });
});
