import React from "react";
import { Instagram, Facebook, Youtube } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>CUSTOMER SERVICE</h3>
        <ul>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Terms & Conditions</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Fees & Payment</a>
          </li>
          <li>
            <a href="#">Shipping & Policy</a>
          </li>
          <li>
            <a href="#">Return Policy</a>
          </li>
          <li>
            <a href="#">Refund Policy</a>
          </li>
          <li>
            <a href="#">Measure for Delivery</a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>ABOUT US</h3>
        <ul>
          <li>
            <a href="#">Our Values</a>
          </li>
          <li>
            <a href="#">Sustainability</a>
          </li>
          <li>
            <a href="#">Potterybarn Kids About Us</a>
          </li>
          <li>
            <a href="#">Potterybarn Kids Sustainability</a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>STORES</h3>
        <ul>
          <li>
            <a href="#">Design Crew</a>
          </li>
          <li>
            <a href="#">Track Your Order</a>
          </li>
          <li>
            <a href="#">Find A Store</a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>FOLLOW US</h3>
        <div className="social-icons">
          <a href="#" className="social-icon">
            <Instagram />
          </a>
          <a href="#" className="social-icon">
            <Facebook />
          </a>
          <a href="#" className="social-icon">
            <Youtube />;
          </a>
        </div>
        <div className="newsletter">
          <p>Join our VIP list for inspiration, new arrivals & more.</p>
          <form>
            <input type="email" placeholder="Enter Your Email" />
            <button type="submit">SIGN UP</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © 2021 Williams-Sonoma, Inc. All Rights Reserved | Terms & Conditions
          (Updated April 2020) | Privacy Policy (Updated January 2020)
        </p>
      </div>
    </footer>
  );
};

export default Footer;
