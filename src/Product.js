import React from 'react';
import './Product.css';

const Product = ({ product, addToCart }) => (
  <div className="product">
    <img src={`/api/placeholder/${product.id * 100}/150`} alt={product.name} className="product-image" />
    <h2 className="product-name">{product.name}</h2>
    <p className="product-price">${product.price.toFixed(2)}</p>
    <button onClick={() => addToCart(product)} className="add-to-cart-button">
      Add to Cart
    </button>
  </div>
);

export default Product; 