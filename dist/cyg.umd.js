(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Cyg = factory());
})(this, (function () { 'use strict';

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

  return Cyg;

}));
