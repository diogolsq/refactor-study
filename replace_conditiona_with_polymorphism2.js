// original code
function calculateShippingCost(weight, shippingMethod) {
    if (shippingMethod === "standard") {
      return weight * 2;
    } else if (shippingMethod === "express") {
      return weight * 4;
    } else {
      return 0;
    }
  }



  // refactored code

  class ShippingMethod {
    constructor(weight) {
      this.weight = weight;
    }
    calculateShippingCost() {
      return 0;
    }
  }

  class StandardShippingMethod extends ShippingMethod {
    calculateShippingCost() {
      return this.weight * 2;
    }
  }

  class ExpressShippingMethod extends ShippingMethod {
    calculateShippingCost() {
      return this.weight * 4;
    }
  }