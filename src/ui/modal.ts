import { ModalOptions } from "../types";

export default function createModal(
  options: ModalOptions = {} as ModalOptions
): void {
  if (!options.amount) {
    throw new Error("`amount` is mandatory");
  }

  const modal = document.createElement("div");
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  `;

  const content = document.createElement("div");
  content.style.cssText = `
    background: white;
    padding: 20px;
    border-radius: 4px;
    min-width: 300px;
  `;

  content.innerHTML = `
    <h2>Payment Modal</h2>
    <p>Amount: ${options.amount / 100}</p>
    <button id="cyg-pay">Pay Now</button>
    <button id="cyg-close">Close</button>
  `;

  modal.appendChild(content);
  document.body.appendChild(modal);

  // Handle close
  const closeButton = document.getElementById("cyg-close");
  if (closeButton) {
    closeButton.onclick = () => {
      document.body.removeChild(modal);
      if (options.modal?.ondismiss) {
        options.modal.ondismiss();
      }
    };
  }

  // Handle payment
  const payButton = document.getElementById("cyg-pay");
  if (payButton) {
    payButton.onclick = () => {
      if (options.handler) {
        options.handler({
          razorpay_payment_id: "pay_" + Math.random().toString(36).substr(2, 9),
        });
      }
      document.body.removeChild(modal);
    };
  }
}
