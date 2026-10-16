function discountPrices (prices, discount) {
  let discounted = []

  for (let i = 0; i < prices.length; i++) {
    let discountedPrice = prices[i] * (1 - discount)
    let finalPrice = Math.round(discountedPrice * 100) / 100
    discounted.push(finalPrice)
  }
 console.log(i) // ReferenceError; stops here
 console.log(discountedPrice) // Not reached
 console.log(finalPrice) // Not reached
  return discounted
}

discountPrices([100, 200, 300], .5) // Error at i
