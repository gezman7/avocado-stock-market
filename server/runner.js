const { ampm, yellow, yuda } = require("./ScarpperAgent");
const scrapData = require("./crawler");
const fs = require("fs");
const { promisify } = require("util");
const chalk = require("chalk");

const scrapperStack = [ampm, yellow, yuda];
const jsonPrices = [];

async function getPrices() {
  for (const element of scrapperStack) {
    console.log(chalk.blue("sending request to " + element.name));
    jsonPrices.push(await scrapData(element.name, element.site, element.query));
  }
  writePrices(jsonPrices);
}

async function writePrices(jsonPrices) {
  const readFileAsync = promisify(fs.readFile);
  const writeFileAsync = promisify(fs.writeFile);

  const priceHistory = await readFileAsync("./data.json");
  const readablePriceHistory = JSON.parse(priceHistory);
  console.log(chalk.green("Read file succesfully from json"));

  readablePriceHistory.push(jsonPrices);

  await writeFileAsync(
    "./data.json",
    JSON.stringify(readablePriceHistory, null, "\t")
  );
  console.log(chalk.green("Written file succesfully from json"));
  console.log(chalk.bold("***********************************"));

  console.log(chalk.bold(`${jsonPrices.length} elements addded to the Data:`));
  console.log(jsonPrices);
}
getPrices();
