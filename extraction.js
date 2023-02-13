// Original
function calculateFinalPrice(price, taxPercent, shippingCost) {
  if (price > 50) {
    return price + (price * taxPercent) + shippingCost;
  } else {
    return price + (price * taxPercent) + (shippingCost * 2);
  }
}



// Refactored
function calculateFinalPrice(price, taxPercent, shippingCost) {
    let tax = calculatingTax
    let totalShippingCost = price <= 50 ? shippingCost * 2 : shippingCost;
    return price + tax + totalShippingCost;
     
  }

function calculatingTax(price, taxPercent)) {
    return price * taxPercent;
}