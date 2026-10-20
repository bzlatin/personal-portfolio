/* Run with PLAYWRIGHT_MODULE pointing to an installed Playwright module. */
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE ? pathToFileURL(resolve(process.env.PLAYWRIGHT_MODULE, "index.mjs")).href : "playwright");
import fs from "node:fs";
import assert from "node:assert/strict";
const pass = process.env.REVIEW_PASS || "1";
const base = process.env.BASE_URL || "http://127.0.0.1:3000";
fs.mkdirSync("verification", { recursive: true });
(async () => {
  const browser = await chromium.launch({
    executablePath:
      process.env.CHROME_PATH ||
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    headless: true,
  });
  const results = {
    pass,
    viewports: [],
    routes: [],
    errors: [],
    interactions: [],
  };
  const context = await browser.newContext();
  const page = await context.newPage();
  page.on("pageerror", (error) => results.errors.push(error.message));
  await page.addInitScript(() => {
    window.__layoutShift = 0;
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries())
        if (!entry.hadRecentInput) window.__layoutShift += entry.value;
    }).observe({ type: "layout-shift", buffered: true });
  });
  for (const width of [1440, 768, 390]) {
    await page.setViewportSize({ width, height: width === 1440 ? 1000 : 900 });
    const response = await page.goto(base, { waitUntil: "networkidle" });
    assert.equal(response.status(), 200);
    await page.evaluate(() => document.fonts.ready);
    await page.locator(".portrait").scrollIntoViewIfNeeded();
    await page.waitForFunction(() =>
      [...document.images].every(
        (image) => image.complete && image.naturalWidth > 0,
      ),
    );
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
    await page.screenshot({
      path: `verification/pass-${pass}-${width}.png`,
      fullPage: true,
    });
    await page.screenshot({
      path: `verification/pass-${pass}-${width}-hero.png`,
    });
    const measure = await page.evaluate(() => ({
      width: innerWidth,
      scrollWidth: document.documentElement.scrollWidth,
      cls: window.__layoutShift,
      h1: document.querySelector("h1").innerText,
      brokenImages: [...document.images]
        .filter((i) => !i.complete || !i.naturalWidth)
        .map((i) => i.src),
    }));
    assert.ok(measure.scrollWidth <= width, `Overflow at ${width}`);
    assert.equal(measure.brokenImages.length, 0);
    results.viewports.push(measure);
  }
  await page.getByRole("button", { name: "Menu", exact: true }).click();
  assert.equal(
    await page
      .getByRole("button", { name: "Close", exact: true })
      .getAttribute("aria-expanded"),
    "true",
  );
  await page.keyboard.press("Escape");
  assert.equal(
    await page
      .getByRole("button", { name: "Menu", exact: true })
      .getAttribute("aria-expanded"),
    "false",
  );
  assert.equal(
    await page.evaluate(() => document.activeElement.textContent),
    "Menu+",
  );
  await page.getByRole("button", { name: "Menu", exact: true }).click();
  await page
    .locator("#main-nav")
    .getByRole("link", { name: "Experience", exact: true })
    .click();
  await page.waitForFunction(() => location.hash === "#experience");
  assert.equal(
    await page
      .getByRole("button", { name: "Menu", exact: true })
      .getAttribute("aria-expanded"),
    "false",
  );
  results.interactions.push(
    "Mobile menu, Escape focus return, anchor navigation, menu dismissal",
  );
  await page.getByRole("button", { name: "Orbit", exact: true }).click();
  assert.equal(
    await page
      .getByRole("button", { name: "Orbit", exact: true })
      .getAttribute("aria-pressed"),
    "true",
  );
  await page.getByRole("button", { name: "Wave", exact: true }).focus();
  await page.keyboard.press("Enter");
  assert.equal(
    await page
      .getByRole("button", { name: "Wave", exact: true })
      .getAttribute("aria-pressed"),
    "true",
  );
  results.interactions.push("Linework switches with mouse/touch and keyboard");
  await context.grantPermissions(["clipboard-read", "clipboard-write"], {
    origin: base,
  });
  await page.getByRole("button", { name: "Copy email", exact: true }).click();
  await page
    .getByRole("button", { name: "Email copied", exact: true })
    .waitFor();
  assert.equal(
    await page.evaluate(() => navigator.clipboard.readText()),
    "btzlatin@gmail.com",
  );
  results.interactions.push("Email clipboard and live success feedback");
  for (const slug of [
    "pushpull",
    "ud-cis-bot",
    "studyguider",
    "starterhelpi",
    "foodhunt",
  ]) {
    for (const width of [1440, 390]) {
      await page.setViewportSize({ width, height: 900 });
      const response = await page.goto(`${base}/projects/${slug}`, {
        waitUntil: "networkidle",
      });
      assert.equal(response.status(), 200);
      assert.equal(await page.locator("h1").count(), 1);
      assert.ok(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
        `Overflow: ${slug} at ${width}`,
      );
      if (slug === "pushpull")
        await page.screenshot({
          path: `verification/pass-${pass}-${width}-case-study.png`,
          fullPage: true,
        });
      results.routes.push({ slug, width, status: response.status() });
    }
  }
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto(base, { waitUntil: "networkidle" });
  const reduced = await page.evaluate(() => ({
    scroll: getComputedStyle(document.documentElement).scrollBehavior,
    animation: getComputedStyle(document.querySelector(".signal-art"))
      .animationName,
  }));
  assert.equal(reduced.scroll, "auto");
  assert.equal(reduced.animation, "none");
  results.interactions.push(
    "Reduced motion disables intro animation and smooth scrolling",
  );
  await page.keyboard.press("Tab");
  assert.equal(
    await page.evaluate(() => document.activeElement.textContent),
    "Skip to content",
  );
  await page.keyboard.press("Enter");
  assert.equal(await page.evaluate(() => document.activeElement.id), "main");
  results.interactions.push("Keyboard skip link reaches main content");
  const nojs = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 390, height: 900 },
  });
  const fallback = await nojs.newPage();
  await fallback.goto(base, { waitUntil: "networkidle" });
  assert.ok(
    (await fallback.locator("main").innerText()).includes(
      "Innovative Defense Technologies",
    ),
  );
  assert.equal(await fallback.locator(".project").count(), 3);
  results.interactions.push(
    "Meaningful content and project links render without JavaScript",
  );
  assert.equal(results.errors.length, 0);
  fs.writeFileSync(
    `verification/pass-${pass}-results.json`,
    JSON.stringify(results, null, 2),
  );
  console.log(JSON.stringify(results, null, 2));
  await browser.close();
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
