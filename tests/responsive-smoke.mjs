import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";

const base = "http://127.0.0.1:4173/projects/belyn";
const browser = await chromium.launch({ headless: true });
await mkdir("artifacts", { recursive: true });

try {
  for (const viewport of [
    { name: "desktop", width: 1440, height: 1000 },
    { name: "tablet", width: 768, height: 1024 },
    { name: "mobile", width: 390, height: 844 },
  ]) {
    const page = await browser.newPage({ viewport: { width: viewport.width, height: viewport.height } });
    const pageErrors = [];
    page.on("pageerror", (error) => pageErrors.push(error.message));
    const response = await page.goto(base, { waitUntil: "domcontentloaded" });
    if (!response || !response.ok()) throw new Error(`${viewport.name}: route returned ${response?.status() ?? "no response"}`);
    await page.locator("h1").waitFor();
    const headline = await page.locator("h1").innerText();
    if (!headline.includes("FROM KASHMIR") || !headline.includes("WORLD")) {
      throw new Error(`${viewport.name}: case study hero did not render`);
    }
    await page.evaluate(async () => {
      const step = Math.max(500, window.innerHeight * 0.8);
      for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
        window.scrollTo(0, y);
        await new Promise((resolve) => setTimeout(resolve, 90));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(350);
    const dimensions = await page.evaluate(() => ({
      viewport: window.innerWidth,
      document: document.documentElement.scrollWidth,
    }));
    if (dimensions.document > dimensions.viewport + 1) {
      throw new Error(`${viewport.name}: horizontal overflow (${dimensions.document}px > ${dimensions.viewport}px)`);
    }
    if (pageErrors.length) throw new Error(`${viewport.name}: browser errors: ${pageErrors.join("; ")}`);
    await page.screenshot({ path: `artifacts/belyn-${viewport.name}.png`, fullPage: true });
    console.log(`PASS ${viewport.name}: ${dimensions.viewport}px viewport, no horizontal overflow`);
    await page.close();
  }
} finally {
  await browser.close();
}
