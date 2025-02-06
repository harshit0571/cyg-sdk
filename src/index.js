import pkg from '../package.json'
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
