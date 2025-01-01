import React from "react";
import "./GiftCollections.css";

const GiftCollections = () => {
  return (
    <div className="gift-collections">
      <div className="left-column">
        <div className="candles-fragrances">
          <img
            src="https://cdn.pixelspray.io/v2/black-bread-289bfa/Zu3Ns5/wrkr/original/potterybarn/banner/306_202311200541_Give_Thoughtfully_1.png"
            alt="Candles & Fragrances"
          />
          {/* <p>CANDLES & FRAGRANCES &gt;</p> */}
        </div>
        <div className="bar-accessories">
          <img
            src="https://cdn.pixelspray.io/v2/black-bread-289bfa/Zu3Ns5/wrkr/original/potterybarn/banner/306_202311200541_Give_Thoughtfully_2.png"
            alt="Bar Accessories"
          />
          {/* <p>BAR ACCESSORIES &gt;</p> */}
        </div>
      </div>
      <div className="main-content">
        {/* <h1>give</h1>
        <h2>THOUGHTFULLY</h2>
        <p>Find the perfect gift for every occasion</p>
        <button>EXPLORE ALL COLLECTIONS</button> */}
        <div className="room-display">
          <img
            src="https://cdn.pixelspray.io/v2/black-bread-289bfa/Zu3Ns5/wrkr/original/potterybarn/banner/306_202401120342_D_Gift.png"
            alt="Room Display"
          />
        </div>
      </div>
    </div>
  );
};

export default GiftCollections;
