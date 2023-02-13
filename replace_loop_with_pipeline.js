//original code
function processOrders(orders){
    for (let i = 0; i < orders.length; i++) {
        let order = orders[i];
        order.status = 'processed';
        order.processedAt = new Date();
    }
    return orders;
}

//refactored code

// utility function
function updateOrder(order){
    order.status = 'processed';
    order.processedAt = new Date();
    return order;
}


function processOrders(orders){
    return orders.map(updateOrder);
}