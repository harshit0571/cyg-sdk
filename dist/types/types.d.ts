export interface APIOptions {
    hostUrl?: string;
    ua?: string;
    key_id: string;
    key_secret?: string;
    headers?: Record<string, string>;
    version?: string;
}
export interface CygOptions {
    key_id: string;
    key_secret?: string;
    headers?: Record<string, string>;
}
export interface ModalOptions {
    amount: number;
    handler?: (response: {
        razorpay_payment_id: string;
    }) => void;
    modal?: {
        ondismiss?: () => void;
    };
}
export interface PaymentResponse {
    razorpay_payment_id: string;
}
