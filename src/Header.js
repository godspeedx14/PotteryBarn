import React, { useState, useEffect } from "react";
import { Search, User, Heart, ShoppingCart, Menu } from "lucide-react";
import "./Header.css";

const Header = ({ cartItems, toggleComponentsVisibility }) => {
  const [text, setText] = useState(
    "New to Potterybarn? Get 10% off on First order"
  );
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prevText) =>
        prevText === "New to Potterybarn? Get 10% off on First order"
          ? "Zero-cost EMI available up to 12 months on purchases over INR 40,000"
          : "New to Potterybarn? Get 10% off on First order"
      );
    }, 5000); // Change text every 5 seconds

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the interval and event listener on component unmount
    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="changing-line">{text}</div>
      <div className={`top-bar ${isScrolled ? "scrolled" : ""}`}>
        <div className="hamburger-menu">
          <button className="icon-button" onClick={toggleMenu}>
            <Menu />
          </button>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Search" className="search-input" />
          <Search className="search-icon" />
        </div>
        <a href="/">
          <div className="logo">
            <svg
              width="100%"
              height="80%"
              viewBox="0 0 350 23.3"
              role="img"
              aria-labelledby="title"
              className="icon-cart"
            >
              <title aria-labelledby="title" className="title">
                Pottery Barn
              </title>
              <path
                className="st0"
                d="M5,12.1v10.6h1v0.5H0v-0.5h1V0.5H0V0h7.1c0.5,0,2.3-0.1,3.3,0.5c1.1,0.7,1.4,1.7,1.4,2.8v5.5c0,0.6-0.1,1.6-1.2,2.4c-1,0.7-2.8,0.8-4.2,0.8H5z M7.8,2.1c0-0.4,0-0.8-0.2-1.1C7.2,0.6,6.8,0.5,6.2,0.5H5v11.1h1.5c0.5,0,0.8-0.2,1.1-0.4c0.3-0.3,0.2-0.9,0.2-1.2V2.1z"
              ></path>
              <path
                className="st0"
                d="M42.1,19.8c0,2.1-1.4,3.5-5.1,3.4c-4,0-5-1.3-5-3.4V5.7c0-2.5,1.8-3.8,5.2-3.8c3.3,0,5,1.6,5,3.8V19.8zM38.5,3.9c0-1.2-0.4-1.6-1.3-1.6c-1,0-1.5,0.4-1.5,1.6v17.3c0,0.9,0.3,1.6,1.4,1.6c1.1,0,1.5-0.4,1.5-1.6V3.9z"
              ></path>
              <path
                className="st0"
                d="M74.4,2.3v4.2h-0.5V3.3h-3.1v19.5h0.9v0.5h-5.4v-0.5h0.9V3.3h-3.1v3.3h-0.5V2.3H74.4z"
              ></path>
              <path
                className="st0"
                d="M106.7,2.3v4.2h-0.5V3.3h-3.1v19.5h0.9v0.5h-5.4v-0.5h0.9V3.3h-3.1v3.3h-0.5V2.3H106.7z"
              ></path>
              <path
                className="st0"
                d="M132.5,12.1h4v-1.8h0.5v4.6h-0.5v-1.8h-4v9.3h4v-3.2h0.5v4.1H128v-0.5h0.9v-20H128V2.3h9.1v4.1h-0.5V3.3h-4V12.1z"
              ></path>
              <path
                className="st0"
                d="M166.5,12.5c0,0.1,1.3,0.2,2.3,0.9c0.9,0.6,1,1.3,1,2.2v7.1h0.9v0.5h-4.5v-8.4c0-0.7,0.2-1.3-0.5-1.7c-0.4-0.3-1.1-0.2-1.6-0.2h-1.2v9.8h0.9v0.5h-5.4v-0.5h0.9v-20h-0.9V2.3h6.4c0.4,0,2.1-0.1,3,0.5c1,0.6,1.3,1.5,1.3,2.6v4.5c0,0.2,0.1,1.2-0.7,1.9C167.5,12.4,166.5,12.5,166.5,12.5z M165.4,4.2c0-0.4,0.1-0.7-0.2-1c-0.3-0.3-0.8-0.4-1.1-0.4h-1.1v9.8h1.3c0.4,0,0.7-0.1,1-0.4c0.3-0.3,0.2-0.8,0.2-1.1V4.2z"
              ></path>
              <path
                className="st0"
                d="M194,15.8l-3.8-13h-0.9V2.3h5.4v0.5h-0.9l3.2,11l2.8-11H199V2.3h3v0.5h-0.9l-3.4,13v7h0.9v0.5h-5.4v-0.5h0.9V15.8z"
              ></path>
              <path
                className="st0"
                d="M235.9,14.6v5.2c0,0.9,0,1.5-0.7,2.3c-0.9,1-2.7,1.1-3.5,1.1H223v-0.5h1V0.5h-1V0h8.4c1,0,1.8,0.2,2.6,0.8c1.3,1,1.2,2.2,1.2,2.2v5.6c0,0,0,1.1-0.8,1.8c-1.1,0.9-1.9,0.9-1.9,1c0,0.2,1.5,0.1,2.6,1.1C235.6,13,235.9,13.6,235.9,14.6zM228,22.7h2.2c0.1,0,0.8,0,1.2-0.3c0.4-0.3,0.5-0.7,0.5-1.1v-8.2c0-0.3,0-0.6-0.2-0.9c-0.2-0.3-0.7-0.4-1.1-0.4H228V22.7zM228,0.5v10.7h2.1c0.1,0,0.5,0,0.8-0.3c0.2-0.3,0.2-0.6,0.2-0.9V1.9c0-0.1,0.1-0.9-0.2-1.1c-0.2-0.3-1.1-0.3-1.2-0.3H228z"
              ></path>
              <path
                className="st0"
                d="M262.9,2.8H262V2.3h5.6v0.5h-1l3.6,20h0.9v0.5h-5.5v-0.5h0.8l-0.9-5.8H261l-1.2,5.8h0.9v0.5h-2.8v-0.5h0.8L262.9,2.8z M261.2,16.1h4.1l-1.9-11.4L261.2,16.1z"
              ></path>
              <path
                className="st0"
                d="M300.5,12.5c0,0.1,1.3,0.2,2.3,0.9c0.9,0.6,1,1.3,1,2.2v7.1h0.9v0.5h-4.5v-8.4c0-0.7,0.2-1.3-0.5-1.7c-0.4-0.3-1.1-0.2-1.6-0.2h-1.2v9.8h0.9v0.5h-5.4v-0.5h0.9v-20h-0.9V2.3h6.4c0.4,0,2.1-0.1,3,0.5c1,0.6,1.3,1.5,1.3,2.6v4.5c0,0.2,0.1,1.2-0.7,1.9C301.5,12.4,300.5,12.5,300.5,12.5z M299.3,4.2c0-0.4,0.1-0.7-0.2-1c-0.3-0.3-0.8-0.4-1.1-0.4h-1.1v9.8h1.3c0.4,0,0.7-0.1,1-0.4c0.3-0.3,0.2-0.8,0.2-1.1V4.2z"
              ></path>
              <path
                className="st0"
                d="M332.4,23.3l-4.4-17.4v16.9h0.9v0.5H326v-0.5h0.9v-20H326V2.3h4.5l4.6,18.1V2.8h-0.9V2.3h2.8v0.5h-0.9v20.5H332.4z"
              ></path>
            </svg>
          </div>
        </a>
        <div className="user-actions">
          <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
            <button
              className="sign-in-button"
              onClick={(event) => {
                toggleComponentsVisibility();
                toggleMenu();
              }}
            >
              <User />
              <span>Sign In</span>
            </button>
            <nav className="mobile-nav">
              <ul>
                <li>
                  <a href="#">New & Now</a>
                </li>
                <li>
                  <a href="#">Ideas & Inspiration</a>
                </li>
                <li>
                  <a href="#">Sale</a>
                </li>
                <li>
                  <a href="#">Bestsellers</a>
                </li>
                <li>
                  <a href="#">Design Services</a>
                </li>
                <li>
                  <a href="#">Sustainability</a>
                </li>
                <li>
                  <a href="#">Our Values</a>
                </li>
              </ul>
            </nav>
          </div>
          <button
            className="icon-button sign-in"
            onClick={toggleComponentsVisibility}
          >
            <User />
            <span>Sign In</span>
          </button>
          <button className="icon-button">
            <Heart />
            <span>Favorites</span>
          </button>
          <button className="icon-button">
            <ShoppingCart />
            <span>Cart ({cartItems.length})</span>
          </button>
        </div>
      </div>

      <div className="main-nav-container">
        <nav className="main-nav">
          <ul>
            <li>
              <a href="#">New & Now</a>
            </li>
            <li>
              <a href="#">Ideas & Inspiration</a>
            </li>
            <li>
              <a href="#">Sale</a>
            </li>
            <li>
              <a href="#">Bestsellers</a>
            </li>
            <li>
              <a href="#">Design Services</a>
            </li>
            <li>
              <a href="#">Sustainability</a>
            </li>
            <li>
              <a href="#">Our Values</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="category-nav-container">
        <nav className="category-nav">
          <ul>
            <li>
              <a href="#">Furniture</a>
            </li>
            <li>
              <a href="#">Bedding</a>
            </li>
            <li>
              <a href="#">Bath</a>
            </li>
            <li>
              <a href="#">Cushions & Decor</a>
            </li>
            <li>
              <a href="#">Rugs</a>
            </li>
            <li>
              <a href="#">Mirrors & Art</a>
            </li>
            <li>
              <a href="#">Lighting</a>
            </li>
            <li>
              <a href="#">Kitchen & Dining</a>
            </li>
            <li>
              <a href="#">Gifts</a>
            </li>
            <li>
              <a href="#" className="sale-link">
                Sale
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="promo-bar">
        <span>12 MONTHS NO COST EMI ON ORDERS ABOVE $5,40,000</span>
        <span>10% OFF FOR NEW USERS USE CODE: NEW10</span>
      </div>
    </header>
  );
};

export default Header;
