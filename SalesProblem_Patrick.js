let productProfitArray = [
  {
    productname: "A",
    sales: -75,
  },
  {
    productname: "B",
    sales: -70,
  },
  {
    productname: "C",
    sales: 95,
  },
  {
    productname: "D",
    sales: 5,
  },
  {
    productname: "E",
    sales: 88,
  },
  {
    productname: "F",
    sales: 29,
  },
];

function topProduct(productProfitArray) {
  const topSales = Math.max(...productProfitArray.map((obj) => obj.sales));
  return productProfitArray.filter((obj) => obj.sales === topSales);
}

function bottomProduct(productProfitArray) {
  const minSales = Math.min(...productProfitArray.map((obj) => obj.sales));
  return productProfitArray.filter((obj) => obj.sales === minSales);
}

function zeroProfitProduct(productProfitArray) {
  if (productProfitArray.length === 0) {
    return null;
  }

  let closestProduct = productProfitArray[0];

  for (let i = 1; i < productProfitArray.length; i++) {
    const currentProduct = productProfitArray[i];
    const closestProfit = closestProduct.sales;

    if (Math.abs(currentProduct.sales) < Math.abs(closestProfit)) {
      closestProduct = currentProduct;
    } else if (
      Math.abs(currentProduct.sales) === Math.abs(closestProfit) &&
      currentProduct.sales > closestProfit
    ) {
      closestProduct = currentProduct;
    }
  }

  return closestProduct;
}

console.log(topProduct(productProfitArray));
console.log(bottomProduct(productProfitArray));
console.log(zeroProfitProduct(productProfitArray));
