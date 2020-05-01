class Till {
	constructor(id) {
    this.id = id;
		this.customerTime = [];
	}
	totalTime() {
		return this.customerTime.reduce((a, b) => a + b, 0)
	}
	addCustomer(time) {
		this.customerTime.push(time);
	}
}

function tillWithSmallestQueue(tills) {
    let s =  tills.reduce((t1, t2) => {
      if (t1.totalTime() <= t2.totalTime()) {
        return t1;
      } else {
        return t2;
      }
    }, tills[0]);

  return s;
}

function tillWithLargestQueue(tills) {
    let l = tills.reduce((t1, t2) => {
        if(t1.totalTime() > t2.totalTime()) {
          return t1;
        } else {
          return t2;
        }
    }, tills[0]);  
    return l;
}

function queueTime(customers, n) {
    let tills = [];
    for(let i=0; i<n; i++) {
      tills.push(new Till(i+1))
    }
    // process each customer
    customers.forEach(customer => {
        // get till with lowest totalTime
        let smallestTill = tillWithSmallestQueue(tills);
        
        // add customer to that till
        smallestTill.addCustomer(customer);
    });
    
    // find till with larget totalTime
    let largestTill = tillWithLargestQueue(tills);
    // that's the output we need
    return largestTill.totalTime();
}

module.exports = {queueTime}