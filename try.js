function closestToZeroProfit(productProfitArray) {
  if (productProfitArray.length === 0) {
    return null;
  }

  let closestProduct = productProfitArray[0];

  for (let i = 1; i < productProfitArray.length; i++) {
    const currentProfit = productProfitArray[i];
    const closestProfit = closestProduct;

    if (Math.abs(currentProfit) < Math.abs(closestProfit)) {
      closestProduct = currentProfit;
    } else if (
      Math.abs(currentProfit) === Math.abs(closestProfit) &&
      currentProfit > closestProfit
    ) {
      closestProduct = currentProfit;
    }
  }

  return closestProduct;
}

// Example usage:
const products = [-75, -70, 95, 5, 88, 29];
const closest = closestToZeroProfit(products);
console.log(`Closest product to zero profit: ${closest}`);
