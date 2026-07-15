// server.js
const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");

const PORT = process.argv[2] || 8000;
// const ROOT = process.cwd();
const ROOT = path.join(process.cwd(), "build");

const MIME_TYPES = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "application/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".txt": "text/plain",
  ".pdf": "application/pdf",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
  ".mp3": "audio/mpeg",
  ".wav": "audio/wav",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".otf": "font/otf"
};

http.createServer((req, res) => {
  const pathname = decodeURIComponent(url.parse(req.url).pathname);
  let filePath = path.join(ROOT, pathname);

  // Prevent directory traversal
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403);
    return res.end("Forbidden");
  }

  fs.stat(filePath, (err, stats) => {
    if (err) {
      res.writeHead(404);
      return res.end("404 Not Found");
    }

    if (stats.isDirectory()) {
      const indexFile = path.join(filePath, "index.html");

      fs.stat(indexFile, (err) => {
        if (!err) {
          fs.createReadStream(indexFile).pipe(res);
          return;
        }

        fs.readdir(filePath, { withFileTypes: true }, (err, files) => {
          if (err) {
            res.writeHead(500);
            return res.end("Internal Server Error");
          }

          res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

          res.write(`<html><head><title>Directory listing for ${pathname}</title></head><body>`);
          res.write(`<h1>Directory listing for ${pathname}</h1><hr><ul>`);

          if (pathname !== "/") {
            const parent = path.posix.dirname(pathname);
            res.write(`<li><a href="${parent === "/" ? "/" : parent + "/"}">../</a></li>`);
          }

          files.sort((a, b) => a.name.localeCompare(b.name));

          for (const file of files) {
            const href = path.posix.join(pathname, file.name) + (file.isDirectory() ? "/" : "");
            res.write(`<li><a href="${href}">${file.name}${file.isDirectory() ? "/" : ""}</a></li>`);
          }

          res.end("</ul><hr></body></html>");
        });
      });

      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, {
      "Content-Type": MIME_TYPES[ext] || "application/octet-stream",
      "Content-Length": stats.size
    });

    fs.createReadStream(filePath).pipe(res);
  });

}).listen(PORT, () => {
  console.log(`Serving HTTP on 0.0.0.0 port ${PORT} (http://localhost:${PORT}/)`);
});