import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const serverPath = resolve(__dirname, "../dist/server/server.js");
let app;

async function getApp() {
  if (!app) {
    app = (await import(serverPath)).default;
  }
  return app;
}

function getRequest(req) {
  const url = new URL(req.url, `https://${req.headers.host}`);
  const init = {
    method: req.method,
    headers: req.headers,
    body: req.method === "GET" || req.method === "HEAD" ? null : req,
  };
  return new Request(url, init);
}

export default async function handler(req, res) {
  const app = await getApp();
  const response = await app.fetch(getRequest(req), {}, { waitUntil: () => {} });

  res.statusCode = response.status;
  response.headers.forEach((value, key) => {
    res.setHeader(key, value);
  });

  const body = await response.arrayBuffer();
  res.end(Buffer.from(body));
}
