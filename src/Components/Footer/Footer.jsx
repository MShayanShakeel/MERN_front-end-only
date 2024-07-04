import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="row main-footer-row">
          <h3 style={{ fontWeight: "700" }}>
            SALE UPTO 70% OFF FOR ALL CLOTHES & FASHION ITEMS,ON ALL BRANDS
          </h3>
          <div className="footer-main">
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
              <h2 style={{ fontWeight: "1000", fontFamily: "initial" }}>DNK</h2>
              <h5 style={{ color: "#696969" }}>
                The best look anything, anywhere
              </h5>
            </div>
            <div className="footer-man-women-section">
              <div className="col-sm-6 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                <h4 style={{ color: "#696969" }}>For Her</h4>
                <ul>
                  <li style={{ color: "black" }}>Womens Jeans</li>
                  <li style={{ color: "black" }}>Womens Jeans</li>
                  <li style={{ color: "black" }}>Womens Jeans</li>
                  <li style={{ color: "black" }}>Womens Jeans</li>
                  <li style={{ color: "black" }}>Womens Jeans</li>
                </ul>
              </div>

              <div className="col-sm-6 col-md-6 col-lg-7 col-xl-6 col-xxl-7">
                <h4 style={{ color: "#696969" }}>For Him</h4>
                <ul>
                  <li style={{ color: "black" }}>Mans Jeans</li>
                  <li style={{ color: "black" }}>Mans Jeans</li>
                  <li style={{ color: "black" }}>Mans Jeans</li>
                  <li style={{ color: "black" }}>Mans Jeans</li>
                  <li style={{ color: "black" }}>Mans Jeans</li>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4  Subscribe-section">
              <h4 style={{ color: "#696969" }}>Subscribe</h4>
              <input type="search" placeholder="Your email address..." />
              <button className="Subscribe-button-blue">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
