// original code

function calculateTotals(items) {
    console.time('calculateTotals');
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += items[i].price;
    }
    console.timeEnd('calculateTotals');
    return total;
  }

// refactored code

function summingTotal (items) {
    return items.reduce((total, item) => total + item.price, 0);
  }

function calculateNewTotals(items) {
    console.time('calculateNewTotals');
    let total = 0;
    console.timeEnd('calculateNewTotals');
    return summingTotal(items);
}


let items = [ {name: 'product1', price: 10}, {name: 'product2', price: 20}, {name: 'product3', price: 30} ];

console.log(calculateNewTotals(items));
console.log(calculateTotals(items));


