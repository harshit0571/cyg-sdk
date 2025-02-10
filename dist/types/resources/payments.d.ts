import API from "../api";
interface PaymentResponse {
    id: string;
    amount: number;
}
export default function payments(api: API): {
    fetch(paymentId: string): Promise<PaymentResponse>;
    create(params: Record<string, any>): Promise<PaymentResponse>;
    capture(paymentId: string, amount: number): Promise<PaymentResponse>;
};
export {};
