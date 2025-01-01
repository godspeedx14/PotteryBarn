import React, { useState } from "react";
import "./ProductCarousel.css";

const ProductCarousel = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const products = [
    {
      name: "Frost Marble Accessories",
      price: 3500,
      image:
        "https://cdn.pixelspray.io/v2/black-bread-289bfa/Zu3Ns5/wrkr/t.resize(h:0,w:0)/data/pottery-barn/18-dec-2021/7910954_1.jpg",
    },
    {
      name: "Kennedy Persian-Style Rug",
      price: 20000,
      image:
        "https://cdn.pixelspray.io/v2/black-bread-289bfa/Zu3Ns5/wrkr/t.resize(h:0,w:0)/data/pottery-barn/12-dec-2022/8564813_1.jpg",
    },
    {
      name: "Hammered Handcrafted Stemless Champagne Flutes",
      price: 1000,
      image:
        "https://cdn.pixelspray.io/v2/black-bread-289bfa/Zu3Ns5/wrkr/t.resize(h:0,w:0)/data/pottery-barn/30-may-2022/7910605_1.jpg",
    },
    {
      name: "Tava Handwoven Rattan Accessories",
      price: 4000,
      image:
        "https://cdn.pixelspray.io/v2/black-bread-289bfa/Zu3Ns5/wrkr/t.resize(h:0,w:0)/data/pottery-barn/07feb2024/10006504_1.jpg",
    },
    {
      name: "Artisan Handpainted Terracotta Planters",
      price: 5000,
      image:
        "https://cdn.pixelspray.io/v2/black-bread-289bfa/Zu3Ns5/wrkr/t.resize(h:0,w:0)/data/pottery-barn/30-may-2022/7911070_1.jpg",
    },
  ];

  const scroll = (direction) => {
    const newPosition =
      direction === "left"
        ? Math.max(0, scrollPosition - 1)
        : Math.min(products.length - 1, scrollPosition + 1);
    setScrollPosition(newPosition);
  };

  return (
    <div className="product-carousel">
      <p>Recommended for You</p>
      <div className="carousel-container">
        <button onClick={() => scroll("left")} className="scroll-button left">
          &lt;
        </button>
        <div
          className="product-list"
          style={{ transform: `translateX(-${scrollPosition * 20}%)` }}
        >
          {products.map((product, index) => (
            <div key={index} className="product-item">
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p>
              <h6>₹{product.price}</h6>
            </div>
          ))}
        </div>
        <button onClick={() => scroll("right")} className="scroll-button right">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;
