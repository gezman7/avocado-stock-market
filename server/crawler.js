const puppeteer = require("puppeteer");
const chalk = require("chalk");

// const date = new Date();

module.exports = async function scrapData(name, site, query) {
  let priceQuery = await priceScraper(site, query);
  console.log(chalk.green("price scrapped from " + name));
  let price = priceParser(priceQuery);
  const currentTime = JSON.stringify(new Date());

  return { name: name, price: price, date: currentTime };
};

async function priceScraper(site, query) {
  const browser = await puppeteer.launch();
  //   console.log(chalk.green("passed browser"));
  const page = await browser.newPage();

  await page.goto(site, { waitUntil: "networkidle2" });

  await page.waitForSelector(query);

  let price = await page.evaluate(query => {
    let priceQuery = document.querySelector(query);
    return priceQuery.textContent;
  }, query);
  //   console.log(tmp);
  await browser.close();
  return price;
}

function priceParser(price) {
  let priceNumber = price.match(/\d+/g).map(Number);
  let realPrice;
  if (priceNumber.length > 1) realPrice = priceNumber[0] + priceNumber[1] / 100;
  else realPrice = priceNumber;
  return realPrice;
}
