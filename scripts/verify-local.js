const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer");

const PORT = Number(process.env.PORT || 4731);
const URL = `http://127.0.0.1:${PORT}/`;
const ROUTES = [
  "",
  "#/projects",
  "#/projects/veepee",
  "#/projects/kira-learning",
  "#/projects/tucuvi",
  "#/projects/hp-parts-store",
  "#/projects/viavia",
  "#/projects/fourlink",
  "#/projects/affinity",
  "#/legal/cookies",
  "#/legal/privacy",
  "#/legal/legal-notice",
];

function isAllowedExternalRequest(url) {
  return [
    "translate.google.com/",
    "translate.googleapis.com/",
    "translate-pa.googleapis.com/",
    "fonts.gstatic.com/",
    "www.gstatic.com/",
    "ssl.gstatic.com/",
    "www.google.com/",
  ].some((host) => url.includes(host));
}

async function waitForServer() {
  const deadline = Date.now() + 15000;

  while (Date.now() < deadline) {
    try {
      const response = await fetch(URL);
      const html = await response.text();
      if (response.ok && html.includes("Sundas Syed Portfolio")) return;
    } catch {
      await new Promise((resolve) => setTimeout(resolve, 250));
    }
  }

  throw new Error(`Server did not start at ${URL}`);
}

async function main() {
  const server = spawn(process.execPath, ["server.js"], {
    env: { ...process.env, PORT: String(PORT) },
    stdio: "ignore",
    windowsHide: true,
  });

  try {
    await waitForServer();

    const browser = await puppeteer.launch({
      headless: "new",
      defaultViewport: { width: 1440, height: 1100 },
    });
    const page = await browser.newPage();
    const failures = [];
    const externalRequests = new Set();
    const results = [];

    page.on("request", (request) => {
      const url = request.url();
      if (url.startsWith(URL) || url.startsWith("data:") || url.startsWith("blob:")) return;
      if (isAllowedExternalRequest(url)) return;
      externalRequests.add(url);
    });
    page.on("requestfailed", (request) => {
      const url = request.url();
      if (!url.startsWith(URL)) return;
      if (url.includes("/_cms/")) return;
      failures.push(`${request.failure()?.errorText || "failed"} ${url}`);
    });

    fs.mkdirSync("snapshots", { recursive: true });

    for (const route of ROUTES) {
      await page.goto(URL + route, { waitUntil: "networkidle2", timeout: 90000 });
      await new Promise((resolve) => setTimeout(resolve, 1800));

      results.push(await page.evaluate(() => ({
        route: location.hash || "/",
        title: document.title,
        text: document.body.innerText.slice(0, 220),
        images: [...document.images].filter((image) => image.complete && image.naturalWidth > 0).length,
        height: document.documentElement.scrollHeight,
      })));
    }

    await page.goto(URL, { waitUntil: "networkidle2", timeout: 90000 });
    await page.screenshot({ path: path.join("snapshots", "local-home.png"), fullPage: false });

    await browser.close();

    if (failures.length) {
      throw new Error(`Local asset failures:\n${failures.join("\n")}`);
    }
    if (externalRequests.size) {
      throw new Error(`Unexpected external requests:\n${[...externalRequests].join("\n")}`);
    }

    console.log(JSON.stringify({
      checkedRoutes: results.length,
      externalRequests: 0,
      failedRequests: 0,
      routes: results.map(({ route, title, images, height }) => ({ route, title, images, height })),
    }, null, 2));
  } finally {
    server.kill();
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
