const { ampm, yellow, yuda } = require("./ScarpperAgent");
const scrapData = require("./crawler");
const fs = require("fs");
const { promisify } = require("util");

const scrapperStack = [ampm, yellow, yuda];
const jsonPrices = [{}];

async function getPrices() {
  for (const element of scrapperStack) {
    console.log("sss" + element);
    jsonPrices.push(await scrapData(element.name, element.site, element.query));
  }
  writePrices(jsonPrices);
}

async function writePrices(jsonPrices) {
  const readFileAsync = promisify(fs.readFile);
  const writeFileAsync = promisify(fs.writeFile);

  const priceHistory = await readFileAsync("./data.json");
  const readablePriceHistory = JSON.parse(priceHistory);
  console.log(readablePriceHistory);

  readablePriceHistory.push(jsonPrices);
  console.log(readablePriceHistory);

  await writeFileAsync(
    "./data.json",
    JSON.stringify(readablePriceHistory, null, "\t")
  );
}
getPrices();
