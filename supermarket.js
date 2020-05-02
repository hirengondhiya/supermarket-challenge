class Till {
	constructor() {
		this.customerTime = [];
	}
	lineTotal() {
		return this.customerTime.reduce((a, b) => a + b, 0);
	}
	addCustomer(time) {
		this.customerTime.push(time);
	}
}
// returns till with lowest lineTotal value
function smallestLine(tills) {
  return tills.reduce((t1, t2) => t1.lineTotal() <= t2.lineTotal()? t1 : t2, tills[0]);  
}
// returns till with largest lineTotal value
function largestLine(tills) {
    return tills.reduce((t1, t2) => t1.lineTotal() > t2.lineTotal()? t1 : t2, tills[0]);  
}
function queueTime(customers, n) {
	// create n tills 
	let tills = new Array(n).fill(undefined).map(t => new Till());
    // add each customer to the till with smallest line
    customers.forEach(customer => smallestLine(tills).addCustomer(customer));
    // find till with largest lineTotal return
    return largestLine(tills).lineTotal();
}

module.exports = {queueTime}