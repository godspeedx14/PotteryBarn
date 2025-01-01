import React from "react";
import "./Home.css";

const Home = () => (
  <div className="home">
    <section className="hero">
      <div className="hero-content">
        <a href="https://example.com" className="hero-image-link">
          <img
            src="https://cdn.pixelspray.io/v2/black-bread-289bfa/Zu3Ns5/wrkr/original/potterybarn/banner/306_202408090303_Primary_Banner.png?width=1750&height=658&mode=fill&fill=solid&fill-color=FFFFFFF"
            alt="Hero Image"
            className="hero-image"
          />
        </a>
      </div>
    </section>

    <section className="trending">
      <h4>TRENDING NOW</h4>
      <div className="trending-items">
        <div className="trending-item">
          <img
            src="https://cdn.pixelspray.io/v2/black-bread-289bfa/Zu3Ns5/wrkr/original/potterybarn/banner/306_202408070250_Cat1.png"
            alt="Trending item 1"
          />
        </div>
        <div className="trending-item">
          <img
            src="https://cdn.pixelspray.io/v2/black-bread-289bfa/Zu3Ns5/wrkr/original/potterybarn/banner/306_202408070251_Cat2.png"
            alt="Trending item 2"
          />
        </div>
        <div className="trending-item">
          <img
            src="https://cdn.pixelspray.io/v2/black-bread-289bfa/Zu3Ns5/wrkr/original/potterybarn/banner/306_202408070251_Cat3.png"
            alt="Trending item 3"
          />
        </div>
        <div className="trending-item">
          <img
            src="https://cdn.pixelspray.io/v2/black-bread-289bfa/Zu3Ns5/wrkr/original/potterybarn/banner/306_202408070251_Cat4.png"
            alt="Trending item 4"
          />
        </div>
        <div className="trending-item">
          <img
            src="https://cdn.pixelspray.io/v2/black-bread-289bfa/Zu3Ns5/wrkr/original/potterybarn/banner/306_202408070252_Cat5.png"
            alt="Trending item 5"
          />
        </div>
      </div>
    </section>

    <section className="hero">
      <div className="hero-content">
        <a href="https://example.com" className="hero-image-link">
          <img
            src="https://cdn.pixelspray.io/v2/black-bread-289bfa/Zu3Ns5/wrkr/original/potterybarn/banner/306_202408070256_Secondary_Banner.png?width=1750&height=665&mode=fill&fill=solid&fill-color=FFFFFF"
            alt="Hero Image"
            className="hero-image"
          />
        </a>
      </div>
    </section>
    <div className="sentence">
      <p>When it comes to home, there's no such thing as too cozy.</p>
    </div>

    <div className="row">
      <div className="diningconsole">
        <a
          href="https://www.potterybarn.in/potterybarn-furniture/pottery-barn-dining-furniture/pottery-barn-dining-chairs"
          target="_self"
        >
          <img
            loading="lazy"
            width="810"
            height="872"
            title="Outdoor Collections"
            alt="Outdoor Collections"
            src="https://cdn.pixelspray.io/v2/black-bread-289bfa/Zu3Ns5/wrkr/original/potterybarn/banner/306_202312200317_Group_1.png?width=810&height=872&mode=fill&fill=solid&fill-color=FFFFFF"
          />
        </a>
      </div>
      <div className="diningconsole">
        <a
          href="https://www.potterybarn.in/potterybarn-furniture/pottery-barn-living-room-furniture/pottery-barn-console-tables"
          target="_self"
        >
          <img
            loading="lazy"
            width="810"
            height="872"
            title="Outdoor Collections"
            alt="Outdoor Collections"
            src="https://cdn.pixelspray.io/v2/black-bread-289bfa/Zu3Ns5/wrkr/original/potterybarn/banner/306_202312200319_Group_2.png?width=810&height=872&mode=fill&fill=solid&fill-color=FFFFFF"
          />
        </a>
      </div>
    </div>

    <section className="hero">
      <div className="hero-content">
        <a href="https://example.com" className="hero-image-link">
          <img
            src="https://cdn.pixelspray.io/v2/black-bread-289bfa/Zu3Ns5/wrkr/original/potterybarn/banner/306_202407310136_Secondary_Banner.png?width=1750&height=665&mode=fill&fill=solid&fill-color=FFFFFF"
            alt="Hero Image"
            className="hero-image"
          />
        </a>
      </div>
    </section>
  </div>
);

export default Home;
