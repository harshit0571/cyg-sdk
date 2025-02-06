import pkg from "../package.json";

class Cyg {
  static VERSION = pkg.version;
  constructor() {
    this.name = "cyg";
  }

  sayHello() {
    console.log("Hello from cyg!");
    return "Hello from cyg!";
  }
}

export default Cyg;
