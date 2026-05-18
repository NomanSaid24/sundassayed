const fs = require("fs");
const http = require("http");
const path = require("path");

const publicHtml = path.join(process.cwd(), "cloned-site", "public_html");
const legacySite = path.join(process.cwd(), "site");
const ROOT = fs.existsSync(path.join(publicHtml, "index.html")) ? publicHtml : legacySite;
const PORT = Number(process.env.PORT || 3000);

const TYPES = {
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

function resolveRequestPath(requestUrl) {
  const url = new URL(requestUrl, `http://localhost:${PORT}`);
  let pathname = decodeURIComponent(url.pathname);
  if (pathname === "/") pathname = "/index.html";

  const fullPath = path.normalize(path.join(ROOT, pathname));
  if (!fullPath.startsWith(ROOT)) return null;

  if (fs.existsSync(fullPath) && fs.statSync(fullPath).isDirectory()) {
    return path.join(fullPath, "index.html");
  }

  if (fs.existsSync(fullPath)) return fullPath;
  return path.join(ROOT, "index.html");
}

const server = http.createServer((request, response) => {
  const filePath = resolveRequestPath(request.url);

  if (!filePath || !fs.existsSync(filePath)) {
    response.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  response.writeHead(200, {
    "content-type": TYPES[ext] || "application/octet-stream",
    "cache-control": "no-store",
  });
  fs.createReadStream(filePath).pipe(response);
});

server.listen(PORT, () => {
  console.log(`Local clone running at http://localhost:${PORT}`);
});
