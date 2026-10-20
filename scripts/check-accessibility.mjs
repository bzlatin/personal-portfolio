import { pathToFileURL } from "node:url";
import { resolve } from "node:path";
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE ? pathToFileURL(resolve(process.env.PLAYWRIGHT_MODULE, "index.mjs")).href : "playwright");
import fs from "node:fs";
fs.mkdirSync("verification", { recursive: true });
(async () => {
  const browser = await chromium.launch({
    executablePath:
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    headless: true,
  });
  const page = await browser.newPage();
  const report = [];
  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of [
      "/",
      "/projects/pushpull",
      "/projects/ud-cis-bot",
      "/projects/studyguider",
      "/projects/starterhelpi",
      "/projects/foodhunt",
    ]) {
      await page.goto(
        (process.env.BASE_URL || "http://127.0.0.1:3003") + route,
        { waitUntil: "networkidle" },
      );
      await page.addScriptTag({
        path:
          process.env.AXE_PATH ||
          "/tmp/portfolio-a11y/node_modules/axe-core/axe.min.js",
      });
      const result = await page.evaluate(() =>
        axe.run(document, {
          runOnly: {
            type: "tag",
            values: [
              "wcag2a",
              "wcag2aa",
              "wcag21a",
              "wcag21aa",
              "best-practice",
            ],
          },
        }),
      );
      report.push({
        width,
        route,
        violations: result.violations.map((v) => ({
          id: v.id,
          impact: v.impact,
          description: v.description,
          nodes: v.nodes.map((n) => ({
            target: n.target,
            summary: n.failureSummary,
          })),
        })),
      });
    }
  }
  fs.writeFileSync(
    "verification/accessibility.json",
    JSON.stringify(report, null, 2),
  );
  console.log(JSON.stringify(report, null, 2));
  await browser.close();
  if (report.some((r) => r.violations.length)) process.exitCode = 1;
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
