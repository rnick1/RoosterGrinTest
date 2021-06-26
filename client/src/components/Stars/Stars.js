import React from "react";
import "./Stars.css";
import starIcon from "../../images/starIcon.png";

export default function Stars() {
  return (
    <div>
      <img className="testimonials-stars" src={starIcon} />
      <img src={starIcon} />
      <img src={starIcon} />
      <img src={starIcon} />
      <img src={starIcon} />
    </div>
  );
}
