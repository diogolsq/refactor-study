// original code


function Customer(name, address, phone) {
    this.name = name;
    this.address = address;
    this.phone = phone;
  }
  
  function Order(customer, items) {
    this.customer = customer;
    this.items = items;
  }
  
  Order.prototype.getCustomerName = function() {
    return this.customer.name;
  };
  
  Order.prototype.getCustomerAddress = function() {
    return this.customer.address;
  };
  
  Order.prototype.getCustomerPhone = function() {
    return this.customer.phone;
  };

  // refactored code

class Customer {
    constructor(name, address, phone) {
        this.name = name;
        this.address = address;
        this.phone = phone;
    }
}

class Order {
    constructor(customer, items) {
        this.customer = customer;
        this.items = items;
    }

    getCustomerName() {
        return this.customer.name;
    }

    getCustomerAddress() {
        return this.customer.address;
    }

    getCustomerPhone() {
        return this.customer.phone;
    }
}