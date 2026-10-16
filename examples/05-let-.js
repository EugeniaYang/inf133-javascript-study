function discountPrices (prices, discount) {
    console.log(discounted) // ReferenceError: TDZ
    let discounted = []
    for (let i = 0; i < prices.length; i++) {
      let discountedPrice = prices[i] * (1 - discount)
      let finalPrice = Math.round(discountedPrice * 100) / 100
      discounted.push(finalPrice)
    }
   console.log(i) // Not reached; i is out of scope
   console.log(discountedPrice) // Not reached
   console.log(finalPrice) // Not reached
    return discounted
  }
  


discountPrices([100, 200, 300], .5);
