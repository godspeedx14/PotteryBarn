import React from 'react';
import { X } from 'lucide-react';
import './Cart.css';

const Cart = ({ items, removeFromCart, closeCart }) => (
  <div className="cart-overlay">
    <div className="cart">
      <div className="cart-header">
        <h2 className="cart-title">Your Cart</h2>
        <button onClick={closeCart} className="close-button">
          <X size={24} />
        </button>
      </div>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <span>{item.name} - ${item.price.toFixed(2)}</span>
              <button onClick={() => removeFromCart(item.id)} className="remove-button">
                Remove
              </button>
            </div>
          ))}
          <div className="cart-total">
            <p className="total-price">
              Total: ${items.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
            </p>
          </div>
        </>
      )}
    </div>
  </div>
);

export default Cart;