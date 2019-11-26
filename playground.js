// const fs = require("fs");
// const { promisify } = require("util");

// const readFileAsync = promisify(fs.readFile);
// const writeFileAsync = promisify(fs.writeFile);

// const run = async () => {
//   const priceHistory = await readFileAsync("./data.json");
//   const curDate = JSON.stringify(new Date());
//   const readablePriceHistory = JSON.parse(priceHistory);
//   console.log(readablePriceHistory);

//   readablePriceHistory.push(jsonPrices);
//   console.log(readablePriceHistory);

//   await writeFileAsync(
//     "./data.json",
//     JSON.stringify(readablePriceHistory, null, "\t")
//   );
// };

// run();
const str = "24 שח $";
var numbers = str.match(/\d+/g).map(Number);
console.log(+numbers);
