import React from "react";
import "./FamilyBrands.css";

const FamilyBrands = () => {
  return (
    <div className="family-brands">
      <h2>Shop Our Family Of Brands</h2>
      <div className="brand-container">
        <div className="brand-item">
          <img
            src="https://cdn.pixelspray.io/v2/black-bread-289bfa/Zu3Ns5/wrkr/original/potterybarn/banner/306_202310030644_PB_Reliance_F23_Diwali_HP_D_31.jpg"
            alt="Pottery Barn Kids"
          />
          <div className="brand-overlay"></div>
        </div>
        <div className="brand-item">
          <img
            src="https://cdn.pixelspray.io/v2/black-bread-289bfa/Zu3Ns5/wrkr/original/potterybarn/banner/306_202310030645_PB_Reliance_F23_Diwali_HP_D_32.jpg"
            alt="West Elm"
          />
          <div className="brand-overlay"></div>
        </div>
      </div>
    </div>
  );
};

export default FamilyBrands;
