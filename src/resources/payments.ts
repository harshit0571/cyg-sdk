import API from "../api";

interface PaymentResponse {
  id: string;
  amount: number;
  // Add other payment properties as needed
}

export default function payments(api: API) {
  return {
    fetch(paymentId: string) {
      return api.get<PaymentResponse>(`payments/${paymentId}`);
    },

    create(params: Record<string, any>) {
      return api.post<PaymentResponse>("payments", params);
    },

    capture(paymentId: string, amount: number) {
      return api.post<PaymentResponse>(`payments/${paymentId}/capture`, {
        amount,
      });
    },
  };
}
