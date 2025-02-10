import API from '../api';

interface OrderResponse {
  id: string;
  // Add other order properties as needed
}

export default function orders(api: API) {
  return {
    create(params: Record<string, any>) {
      return api.post<OrderResponse>("orders", params);
    },

    fetch(orderId: string) {
      return api.get<OrderResponse>(`orders/${orderId}`);
    },

    payments(orderId: string) {
      return api.get<OrderResponse[]>(`orders/${orderId}/payments`);
    },
  };
} 