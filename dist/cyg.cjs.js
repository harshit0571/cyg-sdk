'use strict';

var version = "1.0.0";
var pkg = {
	version: version};

class Cyg {
  static VERSION = pkg.version;
  constructor() {
    this.name = "Razorpay";
  }

  sayHello() {
    console.log("Hello from Razorpay!");
    return "Hello from Razorpay!";
  }
}

module.exports = Cyg;
