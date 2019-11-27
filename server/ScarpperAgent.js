let yellowScrapper = {
  name: "Yellow",
  site: "https://www.yellow.co.il/%D7%A4%D7%99%D7%A8%D7%95%D7%AA",
  query: "#prod_price-7890 .actual-price"
};

let ampmScrapper = {
  name: "AMPM",
  site:
    "https://www.ampm.co.il/search/%D7%90%D7%91%D7%95%D7%A7%D7%93%D7%95?catalogProduct=570248",
  query: ".sale-price"
};

let yudaScrapper = {
  name: "Super Yuda",
  site:
    "https://superyuda.co.il/shop/(products/results//open:info)?name=210763_%D7%90%D7%91%D7%95%D7%A7%D7%93%D7%95",
  query: ".currentPrice"
};
module.exports.ampm = ampmScrapper;
module.exports.yellow = yellowScrapper;
module.exports.yuda = yudaScrapper;
