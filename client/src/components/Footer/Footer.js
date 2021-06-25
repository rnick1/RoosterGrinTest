import React from "react";
import "./Footer.css";
import facebook from "../../images/facebook.svg";
import instagram from "../../images/instagram.svg";

export default function Footer() {
  return (
    <div className="footer">
      <p className="footer-text">Follow Us:</p>
      <img className="footer-media-instagram" src={instagram} />
      <img className="footer-media-facebook" src={facebook}></img>
    </div>
  );
}
