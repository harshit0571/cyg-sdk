export default function orders(api) {
  return {
    create(params) {
      return api.post("orders", params);
    },

    fetch(orderId) {
      return api.get(`orders/${orderId}`);
    },

    payments(orderId) {
      return api.get(`orders/${orderId}/payments`);
    },
  };
}
