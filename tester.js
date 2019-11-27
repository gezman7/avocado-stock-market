function priceParser(price) {
  let priceNumber = price.match(/\d+/g).map(Number);
  let realPrice;
  if (priceNumber.length > 1) realPrice = priceNumber[0] + priceNumber[1] / 100;
  else realPrice = priceNumber;
  return realPrice;
}

console.log(priceParser("18.90 ₪"));
