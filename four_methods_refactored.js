//original code
function calculateDiscount(prices, loyaltyPoints, minimumSpend) {
    let total = 0;
    for (let i = 0; i < prices.length; i++) {
      if (prices[i] < minimumSpend) {
        continue;
      }
      if (loyaltyPoints >= 100) {
        total += prices[i] * 0.1;
      } else {
        total += prices[i] * 0.05;
      }
    }
    return total;
  }


//refactored code

class DiscountCalculator {
    constructor(prices, loyaltyPoints, minimumSpend) {
      this.prices = prices;
      this.loyaltyPoints = loyaltyPoints;
      this.minimumSpend = minimumSpend;
    }

    calculateDiscount(price) {
        if(price < this.minimumSpend) {
            return 0;
        }

        return this.loyaltyPoints >= 100 ? price * 0.1 : price * 0.05;
    }
}

function calculateTotalDiscount(prices, loyaltyPoints, minimumSpend) {
    return prices
        .filter(price => price >= DiscountCalculator.minimumSpend)
        .map(price => DiscountCalculator.calculateDiscount(price))
        .reduce((total, discount) => total + discount, 0);
}