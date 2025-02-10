import { validateSignature } from "./utils/cyg-utils";
import payments from "./resources/payments";
import orders from "./resources/orders";
import { CygOptions, ModalOptions } from "./types";
declare class Cyg {
    static VERSION: string;
    private key_id;
    private key_secret?;
    private api;
    payments: ReturnType<typeof payments>;
    orders: ReturnType<typeof orders>;
    static validateSignature(...args: Parameters<typeof validateSignature>): boolean;
    constructor(options?: CygOptions);
    private addResources;
    open(options?: ModalOptions): void;
}
export default Cyg;
