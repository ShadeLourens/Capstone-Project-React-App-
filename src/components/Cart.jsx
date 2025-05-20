// Cart.jsx
// Displays the user's cart, allows item removal, clears the cart, and handles shipping selection.

import "./Cart.css";
import React from "react";
import { useNavigate } from "react-router-dom";

// Redux imports
import { useSelector, useDispatch } from "react-redux";
import { setShippingMethod, clearShippingMethod } from "../shippingSlice.js";
import { clearCart, removeFromCart } from "../cartSlice.js";

export default function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Get cart items and shipping method from Redux state
  const cartItems = useSelector((state) => state.cart.items);
  const shippingMethod = useSelector((state) => state.shipping.method);

  // Calculate subtotal of all items in the cart
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);

  // Determine shipping cost based on method
  const shippingCost =
    shippingMethod === "standard" ? 75 : shippingMethod === "express" ? 150 : 0;

  // Total cost = subtotal + shipping
  const total = subtotal + shippingCost;

  // Handles shipping method selection
  function handleShippingChange(e) {
    dispatch(setShippingMethod(e.target.value));
  }

  // Clears the cart and resets shipping
  const handleEmptyCart = () => {
    dispatch(clearCart());
    dispatch(clearShippingMethod());
  };

  // Checkout handler
  const handleCheckout = () => {
    alert("Checkout complete!");
    handleEmptyCart();
    navigate("/");
  };

  return (
    <div className="container cart-wrapper pt-5">
      <h1 className="mb-4 fw-bold" style={{ fontSize: "2.5rem" }}>
        Your Cart
      </h1>

      {/* Empty cart message */}
      {cartItems.length === 0 ? (
        <p className="text-muted fs-5">
          Your bag is feeling light! Add some skincare to your ritual ✨
        </p>
      ) : (
        <>
          {/* List each item in the cart */}
          <div className="cart-items border rounded-4 p-4 shadow-sm mb-4 bg-light">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="cart-item d-flex justify-content-between align-items-start"
              >
                <div>
                  <h6 className="mb-1 product-cart-name">{item.name}</h6>
                  <small className="text-muted">R{item.price.toFixed(2)}</small>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <span className="quantity-pill">1</span>
                  <button
                    className="remove-btn"
                    onClick={() => dispatch(removeFromCart(item))}
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Shipping method selection */}
          <div className="shipping-section">
            <div className="shipping-form d-flex flex-column flex-md-row justify-content-between align-items-start gap-2 mt-5">
              <div>
                <label className="form-label fw-semibold">
                  Select Shipping Method:
                </label>
                <select
                  className="form-select"
                  value={shippingMethod}
                  onChange={handleShippingChange}
                >
                  <option value="">-- Select --</option>
                  <option value="standard">Standard (R75)</option>
                  <option value="express">Express (R150)</option>
                  <option value="pickup">Local Pickup (Free)</option>
                </select>

                {/* Link to shipping explanation */}
                <button
                  className="shipping-info-btn mt-2"
                  onClick={() =>
                    alert(
                      "Standard: 3–5 days (R75)\nExpress: 1–2 days (R150)\nPickup: Collect locally (Free)"
                    )
                  }
                >
                  What’s the difference?
                </button>
              </div>

              {/* Totals */}
              <div className="cart-footer d-flex flex-column align-items-end gap-3">
                <p className="subtotal mb-0">
                  Subtotal: R{subtotal.toFixed(2)}
                </p>
                <h4 className="total">Total: R{total.toFixed(2)}</h4>
                {/* Cart actions */}
                <div className="d-flex gap-3">
                  <button className="empty-btn" onClick={handleEmptyCart}>
                    Empty My Bag
                  </button>
                  <button className="checkout-btn" onClick={handleCheckout}>
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Shipping help info */}
          <p className="shipping-help">
            Need help choosing shipping?
            <br /> Contact support at help@pHform.com
          </p>
        </>
      )}
    </div>
  );
}
