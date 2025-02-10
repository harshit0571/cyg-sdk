import { APIOptions } from "./types";

class API {
  private hostUrl: string;
  private ua: string;
  private key_id: string;
  private key_secret?: string;
  private headers: Record<string, string>;

  constructor(options: APIOptions) {
    this.hostUrl = options.hostUrl || "https://api.cyg.com/v1/";
    this.ua = options.ua || `cyg-node@${options.version}`;
    this.key_id = options.key_id;
    this.key_secret = options.key_secret;
    this.headers = options.headers || {};
  }

  get<T>(path: string, data: Record<string, any> = {}): Promise<T> {
    // Implement GET request
    return Promise.resolve(data as T);
  }

  post<T>(path: string, data: Record<string, any> = {}): Promise<T> {
    // Implement POST request
    return Promise.resolve(data as T);
  }
}

export default API;
