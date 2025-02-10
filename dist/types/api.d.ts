import { APIOptions } from "./types";
declare class API {
    private hostUrl;
    private ua;
    private key_id;
    private key_secret?;
    private headers;
    constructor(options: APIOptions);
    get<T>(path: string, data?: Record<string, any>): Promise<T>;
    post<T>(path: string, data?: Record<string, any>): Promise<T>;
}
export default API;
