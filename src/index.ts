import API from "./api";
import { validateSignature } from "./utils/cyg-utils";
import createModal from "./ui/modal";
import payments from "./resources/payments";
import orders from "./resources/orders";
import { CygOptions, ModalOptions } from "./types";

// Import package.json using require for CommonJS compatibility
const pkg: { version: string } = require("../package.json");

class Cyg {
  static VERSION = pkg.version;
  private key_id: string;
  private key_secret?: string;
  private api: API;
  public payments!: ReturnType<typeof payments>;
  public orders!: ReturnType<typeof orders>;

  static validateSignature(...args: Parameters<typeof validateSignature>) {
    return validateSignature(...args);
  }

  constructor(options: CygOptions = {} as CygOptions) {
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

  private addResources(): void {
    Object.assign(this, {
      payments: payments(this.api),
      orders: orders(this.api),
    });
  }

  open(options: ModalOptions = {} as ModalOptions): void {
    createModal(options);
  }
}

export default Cyg;
