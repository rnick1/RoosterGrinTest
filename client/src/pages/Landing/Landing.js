import React from "react";
import "./Landing.css";
import hero from "../images/hero.jpg";
import logoWhite from "../images/logo-white.svg";
import logoColor from "../images/logo-color.svg";

export default function Landing() {
  return (
    <div className="App">
      <div className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
}
