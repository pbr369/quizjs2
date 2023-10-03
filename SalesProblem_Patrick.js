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
  const zero = 0;
  return productProfitArray.map((o) => Object.values(o)[0]).reduce((a, b) => {
      return Math.abs(b - zero) < Math.abs(a - zero) ? b : a;
    });
}

console.log(topProduct(productProfitArray));
console.log(bottomProduct(productProfitArray));
console.log(zeroProfitProduct(productProfitArray));
