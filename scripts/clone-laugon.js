const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const puppeteer = require("puppeteer");

const TARGET = "https://www.laugon.com/";
const ORIGIN = new URL(TARGET).origin;
const FINAL_DIR = path.join(process.cwd(), "cloned-site", "public_html");
const OUT_DIR = path.join(process.cwd(), ".codex-runtime", "laugon-staging");
const SNAPSHOT_DIR = path.join(process.cwd(), "snapshots");

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
  "#/projects/tao",
  "#/legal/cookies",
  "#/legal/privacy",
  "#/legal/legal-notice",
];

const BLOCKED_HOSTS = new Set([
  "consent.cookiebot.com",
  "consentcdn.cookiebot.com",
  "www.googletagmanager.com",
  "www.google-analytics.com",
  "region1.google-analytics.com",
  "analytics.google.com",
]);

const MIME_EXTENSIONS = {
  "text/html": ".html",
  "text/css": ".css",
  "text/javascript": ".js",
  "application/javascript": ".js",
  "application/json": ".json",
  "image/png": ".png",
  "image/jpeg": ".jpg",
  "image/webp": ".webp",
  "image/svg+xml": ".svg",
  "font/woff2": ".woff2",
  "application/font-woff2": ".woff2",
  "video/mp4": ".mp4",
};

function ensureDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function writeFile(filePath, body) {
  ensureDir(filePath);
  fs.writeFileSync(filePath, body);
}

function cleanOutput() {
  fs.rmSync(OUT_DIR, { recursive: true, force: true });
  fs.rmSync(SNAPSHOT_DIR, { recursive: true, force: true });
  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.mkdirSync(SNAPSHOT_DIR, { recursive: true });
}

function publishOutput() {
  if (!fs.existsSync(path.join(OUT_DIR, "index.html"))) {
    throw new Error("Clone did not produce index.html; refusing to replace the public_html output.");
  }

  fs.rmSync(FINAL_DIR, { recursive: true, force: true });
  fs.mkdirSync(path.dirname(FINAL_DIR), { recursive: true });
  fs.renameSync(OUT_DIR, FINAL_DIR);
}

function extensionFromContentType(contentType = "") {
  const base = contentType.split(";")[0].trim().toLowerCase();
  return MIME_EXTENSIONS[base] || "";
}

function sameOriginOutputPath(urlString, contentType) {
  const url = new URL(urlString);
  let pathname = decodeURIComponent(url.pathname);

  if (pathname.endsWith("/")) {
    pathname += "index.html";
  }

  if (!path.extname(pathname)) {
    pathname += extensionFromContentType(contentType) || ".bin";
  }

  return path.join(OUT_DIR, pathname.replace(/^\/+/, ""));
}

function externalOutputPath(urlString, contentType) {
  const url = new URL(urlString);
  const ext = path.extname(url.pathname) || extensionFromContentType(contentType) || ".bin";
  const hash = crypto.createHash("sha1").update(urlString).digest("hex").slice(0, 12);
  const safeHost = url.hostname.replace(/[^a-z0-9.-]/gi, "_");
  const safeName = `${path.basename(url.pathname) || "resource"}-${hash}${ext}`;
  return {
    absolute: path.join(OUT_DIR, "_external", safeHost, safeName),
    publicPath: `/_external/${safeHost}/${safeName}`,
  };
}

function isCloneableUrl(urlString) {
  const url = new URL(urlString);
  if (url.origin === ORIGIN) return true;
  return url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com";
}

function removeTrackingFromHtml(html) {
  return html
    .replace(/\s*<script async src="https:\/\/www\.googletagmanager\.com\/gtag\/js\?id=G-LS8PYVHG47"><\/script>\s*<script>[\s\S]*?gtag\('consent', 'default', \{[\s\S]*?\}\);\s*<\/script>/, "")
    .replace('reportingDomain: "https://www.figma.com"', 'reportingDomain: ""')
    .replace(/https:\/\/www\.laugon\.com\//g, "/")
    .replace("<!-- Created in Figma Make -->", "<!-- Local clone generated from https://www.laugon.com/ with Puppeteer. -->");
}

function patchComponentBundle(js) {
  const withoutCookiebot = js.replace(
    /function r2\(\) \{[\s\S]*?\n\}\nconst kn = "G-LS8PYVHG47";\nfunction l2\(\) \{[\s\S]*?\n\}\nfunction c2\(\)/,
    'function r2() {}\nconst kn = "G-LS8PYVHG47";\nfunction l2() {}\nfunction c2()'
  );

  return withoutCookiebot.replace(
    /return B\(\(\) => \{\n    if \(!t\.current\) return;[\s\S]*?\n  \}, \[i\]\), \/\* @__PURE__ \*\//,
    `return B(() => {
    if (!t.current) return;
    let r = false;
    t.current.innerHTML = "";
    fetch("/_external/usercentrics/privacy-policy-" + i + ".html").then((l) => l.text()).then((l) => {
      if (r || !t.current) return;
      t.current.innerHTML = l;
      const c = t.current.querySelector("h1, h2");
      c && c.remove(), t.current.querySelectorAll("*").forEach((u) => {
        const m = u.textContent?.trim().toLowerCase() ?? "";
        if (m === "powered by usercentrics" || m.startsWith("powered by")) {
          const g = u.parentElement;
          g && g !== t.current && g.children.length === 1 ? g.remove() : u.remove();
        }
      }), t.current.querySelectorAll('a[href*="usercentrics"]').forEach((u) => {
        const m = u.closest("p, div, span");
        m && m !== t.current ? m.remove() : u.remove();
      });
    }).catch(() => {
      t.current && (t.current.innerHTML = "<p>Privacy policy content is unavailable.</p>");
    });
    return () => {
      r = true, t.current && (t.current.innerHTML = "");
    };
  }, [i]), /* @__PURE__ */`
  );
}

function removeGoogleImports(css) {
  return css.replace(/@import\s*(?:url\()?["']https:\/\/fonts\.googleapis\.com\/css2\?family=[^"')]+["']\)?[^;]*;/g, "");
}

async function fetchBuffer(urlString, headers = {}) {
  const response = await fetch(urlString, {
    headers: {
      "user-agent": "Mozilla/5.0 AppleWebKit/537.36 Chrome/125 Safari/537.36",
      ...headers,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${urlString}: ${response.status}`);
  }

  return {
    buffer: Buffer.from(await response.arrayBuffer()),
    contentType: response.headers.get("content-type") || "",
  };
}

async function inlineGoogleFonts() {
  const cssUrls = [
    "https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400&display=swap",
    "https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&display=swap",
  ];

  let bundledCss = "";

  for (const cssUrl of cssUrls) {
    const { buffer } = await fetchBuffer(cssUrl, {
      accept: "text/css,*/*;q=0.1",
    });
    let fontCss = buffer.toString("utf8");
    const fontUrls = [...fontCss.matchAll(/https:\/\/fonts\.gstatic\.com\/[^)"]+/g)].map((match) => match[0]);

    for (const fontUrl of [...new Set(fontUrls)]) {
      const { buffer: fontBuffer, contentType } = await fetchBuffer(fontUrl);
      const { absolute, publicPath } = externalOutputPath(fontUrl, contentType);
      writeFile(absolute, fontBuffer);
      fontCss = fontCss.replaceAll(fontUrl, publicPath);
    }

    bundledCss += `\n${fontCss}\n`;
  }

  writeFile(path.join(OUT_DIR, "_external", "google-fonts.css"), bundledCss);
  return bundledCss;
}

async function downloadPrivacyPolicies() {
  const languages = ["en", "es"];

  for (const language of languages) {
    const url = `https://policygenerator.usercentrics.eu/api/embedding?id=80ca9f27-d4ea-46be-b9bd-12b7e9eceffc&language=${language}`;
    const { buffer } = await fetchBuffer(url, { accept: "text/html,*/*;q=0.1" });
    writeFile(path.join(OUT_DIR, "_external", "usercentrics", `privacy-policy-${language}.html`), buffer);
  }
}

async function saveCapturedResponse(response) {
  try {
    const url = response.url();
    if (!isCloneableUrl(url)) return;
    if (response.status() >= 400) return;

    const request = response.request();
    if (request.method() !== "GET") return;

    const headers = response.headers();
    const contentType = headers["content-type"] || "";
    const body = await response.buffer();
    const urlObj = new URL(url);
    const filePath = urlObj.origin === ORIGIN
      ? sameOriginOutputPath(url, contentType)
      : externalOutputPath(url, contentType).absolute;

    writeFile(filePath, body);
  } catch (error) {
    console.warn(`Could not save ${response.url()}: ${error.message}`);
  }
}

async function captureLiveSiteAssets() {
  console.log("Capturing live site routes with Puppeteer...");
  const browser = await puppeteer.launch({
    headless: "new",
    defaultViewport: { width: 1440, height: 1200 },
  });

  const page = await browser.newPage();
  page.setDefaultTimeout(90000);

  await page.setRequestInterception(true);
  page.on("request", (request) => {
    const url = new URL(request.url());
    if (BLOCKED_HOSTS.has(url.hostname)) {
      request.abort();
      return;
    }
    request.continue();
  });

  page.on("response", (response) => {
    saveCapturedResponse(response);
  });

  await page.goto(TARGET, { waitUntil: "networkidle2", timeout: 90000 });

  for (const route of ROUTES) {
    await page.evaluate((hash) => {
      window.location.hash = hash;
      window.scrollTo(0, 0);
    }, route);
    await page.waitForFunction((hash) => window.location.hash === hash, {}, route);
    await new Promise((resolve) => setTimeout(resolve, 900));

    await page.evaluate(async () => {
      const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
      const max = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      const step = Math.max(500, Math.floor(window.innerHeight * 0.7));

      for (let y = 0; y <= max; y += step) {
        window.scrollTo(0, y);
        await delay(120);
      }

      window.scrollTo(0, 0);
    });

    const name = route ? route.replace(/^#\//, "").replaceAll("/", "-") : "home";
    await page.screenshot({
      path: path.join(SNAPSHOT_DIR, `${name}.png`),
      fullPage: false,
    });
  }

  await browser.close();
  console.log("Live route capture complete.");
}

async function downloadCoreFiles() {
  console.log("Downloading and patching local runtime assets...");
  const { buffer: htmlBuffer } = await fetchBuffer(TARGET, { accept: "text/html" });
  const html = removeTrackingFromHtml(htmlBuffer.toString("utf8"));
  writeFile(path.join(OUT_DIR, "index.html"), html);

  const runtimeUrl = "https://www.laugon.com/_runtimes/sites-runtime.3cf9de7a74741b1ada8f8db63a6ca2831b0eb39ad4b1040e1a56baf4cfcbe1a8.js";
  const componentUrl = "https://www.laugon.com/_components/v2/d175cb1196fd11dfabf23a8d55c652f1ba2d117d.js";
  const cssUrl = "https://www.laugon.com/_components/v2/d175cb1196fd11dfabf23a8d55c652f1ba2d117d.css";
  const jsonUrl = "https://www.laugon.com/_json/25bf1993-b09f-4762-a60d-e46f21dd12ad/_index.json";

  const [runtime, component, css, json] = await Promise.all([
    fetchBuffer(runtimeUrl),
    fetchBuffer(componentUrl),
    fetchBuffer(cssUrl),
    fetchBuffer(jsonUrl),
  ]);

  writeFile(sameOriginOutputPath(runtimeUrl, runtime.contentType), runtime.buffer);
  writeFile(sameOriginOutputPath(componentUrl, component.contentType), patchComponentBundle(component.buffer.toString("utf8")));

  const fontCss = await inlineGoogleFonts();
  await downloadPrivacyPolicies();
  const localCss = `${fontCss}\n${removeGoogleImports(css.buffer.toString("utf8"))}`;
  writeFile(sameOriginOutputPath(cssUrl, css.contentType), localCss);

  const jsonText = json.buffer.toString("utf8");
  writeFile(sameOriginOutputPath(jsonUrl, json.contentType), jsonText);

  const bundle = JSON.parse(jsonText);
  const assetFiles = Object.values(bundle.assets || {})
    .map((asset) => asset.url)
    .filter(Boolean);

  const componentAssetFiles = [...component.buffer.toString("utf8").matchAll(/[a-f0-9]{40}\.png/g)].map((match) => match[0]);
  const allAssets = [...new Set([...assetFiles, ...componentAssetFiles])];

  for (const asset of allAssets) {
    const assetUrl = `${ORIGIN}/_assets/v11/${asset}`;
    try {
      const fetched = await fetchBuffer(assetUrl);
      writeFile(sameOriginOutputPath(assetUrl, fetched.contentType), fetched.buffer);
    } catch (error) {
      console.warn(error.message);
    }
  }
  console.log(`Downloaded ${allAssets.length} bundled image assets.`);
}

async function main() {
  console.log(`Cloning ${TARGET}`);
  cleanOutput();
  await captureLiveSiteAssets();
  await downloadCoreFiles();
  publishOutput();
  console.log(`Cloned ${TARGET} into ${path.relative(process.cwd(), FINAL_DIR)}`);
  console.log(`Reference screenshots saved in ${path.relative(process.cwd(), SNAPSHOT_DIR)}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
