import logo from "./logo.svg";
import "./App.css";
import Cyg from "cyg-js";

function App() {
  const handlePayment = () => {
    const cyg = new Cyg({
      key_id: "rzp_test_1234567890",
    });

    cyg.open({
      amount: 50000, // amount in smallest currency unit (e.g., paise for INR)
      handler: function (response) {
        alert("Payment ID: " + response.razorpay_payment_id);
      },
      modal: {
        ondismiss: function () {
          alert("Payment modal closed");
        },
      },
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          onClick={handlePayment}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            margin: "20px",
            cursor: "pointer",
          }}
        >
          Make Payment
        </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
