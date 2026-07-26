import { chromium } from "playwright";

const browser = await chromium.launch();
const base = "/private/tmp/claude-501/-Users-kevindsa-Documents-Portfolio-website/90184aed-2440-41ba-8d98-c61fbd904a9f/scratchpad";

// Desktop: full /projects page bento grid
const desktop = await browser.newPage({ viewport: { width: 1440, height: 1400 } });
await desktop.goto("http://localhost:3000/projects", { waitUntil: "networkidle" });
await desktop.waitForTimeout(800);
await desktop.screenshot({ path: `${base}/bento-projects-desktop.png`, fullPage: true });

// Desktop: landing page projects preview section
const desktop2 = await browser.newPage({ viewport: { width: 1440, height: 1200 } });
await desktop2.goto("http://localhost:3000/", { waitUntil: "networkidle" });
await desktop2.evaluate(() => window.scrollTo(0, window.innerHeight * 1.05));
await desktop2.waitForTimeout(700);
await desktop2.screenshot({ path: `${base}/bento-landing-preview-desktop.png` });

// Mobile: /projects page
const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } });
await mobile.goto("http://localhost:3000/projects", { waitUntil: "networkidle" });
await mobile.waitForTimeout(800);
await mobile.screenshot({ path: `${base}/bento-projects-mobile.png`, fullPage: true });

const overflow = await mobile.evaluate(() => ({
  scrollWidth: document.documentElement.scrollWidth,
  clientWidth: document.documentElement.clientWidth,
}));
console.log("Mobile overflow check:", JSON.stringify(overflow));

await browser.close();
console.log("done");
