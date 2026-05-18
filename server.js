const fs = require("fs");
const http = require("http");
const path = require("path");

const PORT = Number(process.env.PORT || 3000);
const legacySiteDir = path.join(__dirname, "cloned-site");
const publicHtmlSiteDir = path.join(legacySiteDir, "public_html");
const siteDir = fs.existsSync(path.join(publicHtmlSiteDir, "index.html"))
  ? publicHtmlSiteDir
  : legacySiteDir;

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2",
  ".mp4": "video/mp4",
};

function resolveFile(requestUrl) {
  const url = new URL(requestUrl, `http://localhost:${PORT}`);
  let pathname = decodeURIComponent(url.pathname);

  if (pathname === "/") pathname = "/index.html";

  const filePath = path.normalize(path.join(siteDir, pathname));
  if (!filePath.startsWith(siteDir)) return null;

  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    return path.join(filePath, "index.html");
  }

  if (fs.existsSync(filePath)) return filePath;
  return path.join(siteDir, "index.html");
}

const server = http.createServer((request, response) => {
  const filePath = resolveFile(request.url);

  if (!filePath || !fs.existsSync(filePath)) {
    response.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  response.writeHead(200, {
    "content-type": types[ext] || "application/octet-stream",
    "cache-control": "no-store",
  });
  fs.createReadStream(filePath).pipe(response);
});

server.listen(PORT, () => {
  console.log(`Local clone running at http://localhost:${PORT}`);
  console.log(`Serving ${siteDir}`);
});
