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

export default API;
