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
    // The accent theme color (#e0263c / rgb(224, 38, 60)) should show up in the
    // card's shadow/border -- confirms both the base stylesheet and our theme
    // override are both actually taking effect.
    expect(cardStyle.boxShadow).toContain("224, 38, 60");
  });

  test("shows all 4 work experience entries in a single column (no alternating)", async ({ page }) => {
    await page.goto("/about");
    const rows = page.locator(".vertical-item-row");
    await expect(rows).toHaveCount(4);

    // VERTICAL mode (not VERTICAL_ALTERNATING) -- every row's card should sit
    // at the same x position, not zig-zagging left/right.
    const boxes = await rows.evaluateAll((els) => els.map((el) => el.getBoundingClientRect().x));
    for (const x of boxes) {
      expect(Math.abs(x - boxes[0])).toBeLessThan(2);
    }
  });
});

test.describe("About page Skills section", () => {
  test("renders each skills category as pill tags", async ({ page }) => {
    await page.goto("/about");
    for (const heading of ["AWS Services", "Database & Cloud", "Backend", "Frontend"]) {
      await expect(page.getByText(heading, { exact: false }).first()).toBeVisible();
    }

    const pills = page.locator(".skill-pill");
    expect(await pills.count()).toBeGreaterThan(0);
    const firstPillText = await pills.first().textContent();
    expect(firstPillText?.trim().length).toBeGreaterThan(0);
  });
});
