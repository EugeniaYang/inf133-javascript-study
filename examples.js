function discountPrices (prices, discount) {
    var discounted = []
    for (var i = 0; i < prices.length; i++) {
      var discountedPrice = prices[i] * (1 - discount)
      var finalPrice = Math.round(discountedPrice * 100) / 100
      discounted.push(finalPrice)
    }
    console.log(i) // 3
    console.log(discountedPrice) // 150
    console.log(finalPrice) // 150
    return discounted
  }
discountPrices([100, 200, 300], .5)
