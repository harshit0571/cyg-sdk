import API from "./api";
import pkg from "../package.json";
import { validateSignature } from "./utils/cyg-utils";
import createModal from "./ui/modal";
import payments from "./resources/payments";
import orders from "./resources/orders";

class Cyg {
  static VERSION = pkg.version;

  static validateSignature(...args) {
    return validateSignature(...args);
  }

  constructor(options = {}) {
    const { key_id, key_secret, headers } = options;

    if (!key_id) {
      throw new Error("`key_id` is mandatory");
    }

    this.key_id = key_id;
    this.key_secret = key_secret;

    this.api = new API({
      hostUrl: "https://api.cyg.com/v1/",
      ua: `cyg-node@${Cyg.VERSION}`,
      key_id,
      key_secret,
      headers,
    });

    this.addResources();
  }

  addResources() {
    Object.assign(this, {
      payments: payments(this.api),
      orders: orders(this.api),
    });
  }

  open(options = {}) {
    createModal(options);
  }
}

export default Cyg;
