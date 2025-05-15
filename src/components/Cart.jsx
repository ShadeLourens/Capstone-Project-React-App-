// Cart.jsx
import "./Cart.css";
import React from "react";
import { useNavigate } from "react-router-dom";

// Redux imports
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../cartSlice.js";
import { setShippingMethod, clearShippingMethod } from "../shippingSlice.js";

export default function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Grab data from Redux state
  const cartItems = useSelector((state) => state.cart.items);
  const shippingMethod = useSelector((state) => state.shipping.method);

  // Calculate subtotal
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);

  // Set shipping cost based on selected method
  let shippingCost = 0;
  if (shippingMethod === "standard") shippingCost = 75;
  if (shippingMethod === "express") shippingCost = 150;

  // Final total includes shipping
  const total = subtotal + shippingCost;

  // Empty cart handler
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

      {/* If cart is empty */}
      {cartItems.length === 0 ? (
        <p className="text-muted fs-5">
          Your bag is feeling light! Add some skincare to your ritual ✨
        </p>
      ) : (
        <>
          {/* Product list */}
          <div className="cart-items border rounded-4 p-4 shadow-sm mb-4 bg-light">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="cart-item d-flex justify-content-between align-items-center mb-3 pb-3 border-bottom"
              >
                <div>
                  <h6 className="mb-1 product-cart-name">{item.name}</h6>
                  <small className="text-muted">R{item.price.toFixed(2)}</small>
                </div>
                <span className="quantity-pill">1</span>
              </div>
            ))}
          </div>

          {/* Shipping method selector and summary */}
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start gap-4 mb-4">
            <div>
              <label className="form-label fw-semibold">
                Select Shipping Method:
              </label>
              <select
                className="form-select"
                value={shippingMethod}
                onChange={(e) => dispatch(setShippingMethod(e.target.value))}
              >
                <option value="">-- Choose --</option>
                <option value="standard">Standard (3-5 days) – R75</option>
                <option value="express">Express (1-2 days) – R150</option>
                <option value="pickup">Local Pickup (Free)</option>
              </select>

              {/* Optional helper link to shipping explanation */}
              <button
                className="btn btn-link mt-2 text-decoration-none"
                style={{ fontSize: "0.9rem" }}
                onClick={() =>
                  alert(
                    "Standard: 3–5 days (R75)\nExpress: 1–2 days (R150)\nPickup: Collect locally (Free)"
                  )
                }
              >
                What’s the difference?
              </button>
            </div>

            {/* Price summary */}
            <div className="text-end">
              <p className="text-muted">Subtotal: R{subtotal.toFixed(2)}</p>
              <h4 className="fw-bold">Total: R{total.toFixed(2)}</h4>
              <div className="d-flex gap-3 mt-2">
                <button
                  className="btn btn-outline-danger"
                  onClick={handleEmptyCart}
                >
                  Empty My Bag
                </button>
                <button className="btn btn-dark" onClick={handleCheckout}>
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
