// original code

function calculateDiscount(price, customerType) {
    if (customerType === "regular") {
      return price * 0.1;
    } else if (customerType === "premium") {
      return price * 0.2;
    } else {
      return 0;
    }
  }

  

// refactored code

class Customer {
    calculateDiscount(price) {
        return 0;
    }
}

class RegularCustomer extends Customer {
    calculateDiscount(price) {
        return price * 0.1;
    }
}

class PremiumCustomer extends Customer {
    calculateDiscount(price) {
        return price * 0.2;
    }
}

function calculateDiscount(price, customer) {
    return customer.calculateDiscount(price);
}