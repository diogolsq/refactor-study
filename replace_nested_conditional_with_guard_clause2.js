// this is also known as invertion and return early

// original code
function calculateShippingCost(weight, shippingMethod, isRushOrder) {
    if (weight <= 0) {
      return 0;
    }
    if (shippingMethod === "standard") {
      if (isRushOrder) {
        return weight * 4;
      } else {
        return weight * 2;
      }
    } else {
      return weight * 3;
    }
  }


// refactored code

function calculateShippingCost(weight, shippingMethod, isRushOrder) {
    if (weight <=0 ) return 0;
    if (shippingMethod !== "standard") return weight * 3;
    if (isRushOrder) return weight * 4;
    return weight * 2;
}