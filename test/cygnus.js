// Initialize Cyg with key
const cyg = new Cyg({
  key_id: "test_key_id",
  key_secret: "test_key_secret",
});

// Test the open modal directly
function testModal() {
  cyg.open({
    amount: 50000, // amount in paise
    currency: "INR",
    name: "Test Corp",
    description: "Test Transaction",
    handler: function (response) {
      console.log("Payment ID:", response.razorpay_payment_id);
    },
    modal: {
      ondismiss: function () {
        console.log("Payment modal closed");
      },
    },
  });
}

// Test API resources
async function testAPI() {
  try {
    // Create an order
    const order = await cyg.orders.create({
      amount: 50000,
      currency: "INR",
      receipt: "receipt#1",
    });
    console.log("Order created:", order);

    // Fetch a payment
    const payment = await cyg.payments.fetch("pay_123");
    console.log("Payment fetched:", payment);
  } catch (error) {
    console.error("API Error:", error);
  }
}

// Add test buttons to the page
const testContainer = document.createElement("div");
testContainer.innerHTML = `
  <button onclick="testModal()">Test Modal</button>
  <button onclick="testAPI()">Test API</button>
`;
document.body.appendChild(testContainer);
