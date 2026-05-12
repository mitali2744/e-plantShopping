import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity, clearCart } from "./CartSlice";
import "./CartItem.css";
import { useNavigate } from "react-router-dom";

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const calculateTotalAmount = () => {
    return cart.reduce(
      (total, item) =>
        total + parseFloat(item.cost.replace("$", "")) * item.quantity,
      0
    );
  };

  const handleContinueShopping = (e) => {
    if (onContinueShopping) {
      onContinueShopping(e);
    } else {
      navigate("/product-list");
    }
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    dispatch(
      updateQuantity({
        name: item.name,
        quantity: Math.max(1, item.quantity - 1),
      })
    );
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name)); // pass string directly
  };

  const handleClearCart = () => {
    if (window.confirm("Clear all items from cart?")) {
      dispatch(clearCart());
    }
  };

  const calculateTotalCost = (item) => {
    return parseFloat(item.cost.replace("$", "")) * item.quantity;
  };

  const handleCheckout = () => {
    alert("Checkout coming soon! 🌿");
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>🛒 Your Cart ({totalItems} {totalItems === 1 ? "item" : "items"})</h2>
        {cart.length > 0 && (
          <button className="clear-cart-btn" onClick={handleClearCart}>
            Clear All
          </button>
        )}
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-cart-icon">🌱</div>
          <h3>Your cart is empty</h3>
          <p>Looks like you haven't added any plants yet.</p>
          <button className="get-started-button" onClick={handleContinueShopping}>
            Browse Plants
          </button>
        </div>
      ) : (
        <>
          <div className="cart-items-list">
            {cart.map((item) => (
              <div className="cart-item" key={item.name}>
                <img className="cart-item-image" src={item.image} alt={item.name} />
                <div className="cart-item-details">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-cost">{item.cost} each</div>
                  <div className="cart-item-quantity">
                    <button
                      className="cart-item-button cart-item-button-dec"
                      onClick={() => handleDecrement(item)}
                    >
                      −
                    </button>
                    <span className="cart-item-quantity-value">{item.quantity}</span>
                    <button
                      className="cart-item-button cart-item-button-inc"
                      onClick={() => handleIncrement(item)}
                    >
                      +
                    </button>
                  </div>
                  <div className="cart-item-total">
                    Subtotal: <strong>${calculateTotalCost(item).toFixed(2)}</strong>
                  </div>
                  <button
                    className="cart-item-delete"
                    onClick={() => handleRemove(item)}
                    title="Remove item"
                  >
                    🗑 Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="cart-summary-row">
              <span>Items ({totalItems})</span>
              <span>${calculateTotalAmount().toFixed(2)}</span>
            </div>
            <div className="cart-summary-row">
              <span>Shipping</span>
              <span className="free-shipping">FREE 🌿</span>
            </div>
            <div className="cart-summary-divider" />
            <div className="cart-summary-row cart-summary-total">
              <span>Total</span>
              <span>${calculateTotalAmount().toFixed(2)}</span>
            </div>
          </div>

          <div className="continue_shopping_btn">
            <button className="get-started-button" onClick={handleContinueShopping}>
              ← Continue Shopping
            </button>
            <button className="get-started-button1" onClick={handleCheckout}>
              Checkout →
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartItem;
