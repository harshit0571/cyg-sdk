class API {
  constructor(options) {
    this.hostUrl = options.hostUrl || "https://api.cyg.com/v1/";
    this.ua = options.ua || `cyg-node@${options.version}`;
    this.key_id = options.key_id;
    this.key_secret = options.key_secret;
    this.headers = options.headers || {};
  }

  get(path, data = {}) {
    // Implement GET request
    return Promise.resolve(data);
  }

  post(path, data = {}) {
    // Implement POST request
    return Promise.resolve(data);
  }
}

var version = "1.0.0";
var pkg = {
	version: version};

const validateSignature = (body, signature, secret) => {
  // Implement signature validation
  return true;
};

function createModal(options = {}) {
  if (!options.amount) {
    throw new Error("`amount` is mandatory");
  }

  const modal = document.createElement("div");
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  `;

  const content = document.createElement("div");
  content.style.cssText = `
    background: white;
    padding: 20px;
    border-radius: 4px;
    min-width: 300px;
  `;

  content.innerHTML = `
    <h2>Payment Modal</h2>
    <p>Amount: ${options.amount / 100}</p>
    <button id="cyg-pay">Pay Now</button>
    <button id="cyg-close">Close</button>
  `;

  modal.appendChild(content);
  document.body.appendChild(modal);

  // Handle close
  document.getElementById("cyg-close").onclick = () => {
    document.body.removeChild(modal);
    if (options.modal && options.modal.ondismiss) {
      options.modal.ondismiss();
    }
  };

  // Handle payment
  document.getElementById("cyg-pay").onclick = () => {
    if (options.handler) {
      options.handler({
        razorpay_payment_id: "pay_" + Math.random().toString(36).substr(2, 9),
      });
    }
    document.body.removeChild(modal);
  };
}

function payments(api) {
  return {
    fetch(paymentId) {
      return api.get(`payments/${paymentId}`);
    },

    create(params) {
      return api.post("payments", params);
    },

    capture(paymentId, amount) {
      return api.post(`payments/${paymentId}/capture`, { amount });
    },
  };
}

function orders(api) {
  return {
    create(params) {
      return api.post("orders", params);
    },

    fetch(orderId) {
      return api.get(`orders/${orderId}`);
    },

    payments(orderId) {
      return api.get(`orders/${orderId}/payments`);
    },
  };
}

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

export { Cyg as default };
