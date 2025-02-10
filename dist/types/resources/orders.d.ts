import API from '../api';
interface OrderResponse {
    id: string;
}
export default function orders(api: API): {
    create(params: Record<string, any>): Promise<OrderResponse>;
    fetch(orderId: string): Promise<OrderResponse>;
    payments(orderId: string): Promise<OrderResponse[]>;
};
export {};
