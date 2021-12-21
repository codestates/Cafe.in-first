//next.js에서 https 적용하는 옵션. https://anmagpie.medium.com/secure-your-local-development-server-with-https-next-js-81ac6b8b3d68
//node에서 돌리는 거랑 비슷한 맥락으로 서버를 다시 만들어주면 됨
//일단은 로컬에서만 적용하는 거임.

const { createServer } = require("https");
const { parse } = require("url");
const { readFileSync } = require("fs");
const next = require("next");

const PORT = 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const httpsOptions = {
  key: readFileSync("./key.pem"),
  cert: readFileSync("./cert.pem"),
};

app.prepare().then(() => {
  createServer(httpsOptions, (req, res) => {
    const parseUrl = parse(req.url, true);
    handle(req, res, parseUrl);
  }).listen(PORT, () => console.log(PORT));
});
