function processPayment(amount = 0) {
    console.log(`Collecting payment of ${amount}`);
}

function processOrder(orderId = 0, amount = 0) {
    console.log(`${orderId} is being processed`);
    processPayment(amount);
    console.log(`${orderId} has been fully processed`);
}

console.log('Processing orders');
processOrder(12321, 10.99);
processOrder(12322, 12.99);
processOrder(12323, 15.0);
console.log('All the orders have been processed');
