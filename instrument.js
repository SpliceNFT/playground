const puppeteer = require("puppeteer-core");
const handler = require("serve-handler");
const http = require("http");
const fs = require("fs");

const main = async () => {
  let server;
  let browser;
  try {
    server = http.createServer((request, response) => {
      // You pass two more arguments for config and middleware
      // More details here: https://github.com/vercel/serve-handler#options
      return handler(request, response, {});
    });

    server.listen(3099, () => {});

    browser = await puppeteer.launch({
      product: "firefox",
      executablePath: "/usr/bin/firefox",
      ignoreHTTPSErrors: true,
      headless: true,
      extraPrefsFirefox: {},
      // Make browser logs visible
      //dumpio: true,
    });
    const page = await browser.newPage();

    await page.goto("http://localhost:3099");
    await page.setViewport({
      width: 1500,
      height: 500,
      deviceScaleFactor: 1,
    });
    //    const traits = await page.evaluateHandle();

    const { traits, dataUrl } = await page.evaluate(async () => {
      return await runSplice();
    });

    console.log(traits);
    const pngData = Buffer.from(
      dataUrl.replace("data:image/png;base64,", ""),
      "base64"
    );
    fs.writeFileSync("out.png", pngData);
  } catch (error) {
    console.error(error);
  } finally {
    if (browser) {
      await browser.close();
    }
    if (server) {
      server.close();
    }
  }
};

main();
