export default function payments(api) {
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
