import React from "react";
import footerbgimage from "../image/banner/footer-background.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-bottom">
        <div
          className="footer-top"
          style={{
            backgroundImage: `url(${footerbgimage})`
          }}
        ></div>
      </div>
    </div>
  );
}
