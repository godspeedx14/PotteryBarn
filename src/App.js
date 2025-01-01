import React, { useState } from "react";
import Header from "./Header";
import Home from "./Home";
import Cart from "./Cart";
import "./App.css";
import ProductCarousel from "./ProductCarousel";
import Footer from "./Footer";
import GiftCollections from "./GiftCollections";
import FamilyBrands from "./FamilyBrands";
import AccountForm from "./AccountForm";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isComponentsVisible, setIsComponentsVisible] = useState(true);

  const toggleComponentsVisibility = () => {
    setIsComponentsVisible(!isComponentsVisible);
  };

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="app">
      <Header
        cartItems={cartItems}
        toggleComponentsVisibility={toggleComponentsVisibility}
      />
      {isComponentsVisible && (
        <>
          <Home />
          {isCartOpen && (
            <Cart
              items={cartItems}
              removeFromCart={removeFromCart}
              closeCart={toggleCart}
            />
          )}
          <ProductCarousel />
          <GiftCollections />
          <FamilyBrands />
        </>
      )}
      {!isComponentsVisible && <AccountForm />}
      <Footer />
    </div>
  );
};

export default App;
