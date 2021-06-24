import React from "react";
import "./App.css";
import Landing from "./pages/Landing/Landing.js";
import About from "./pages/About/About.js";
import FeatureLeadin from "./pages/FeaturesLeadin/FeaturesLeadin.js";
import Feature from "./pages/Features.js";
import TestimonialLeadin from "./pages/TestimonialLeadin.js";
import Testimonial from "./pages/Testimonial.js";
import { HashRouter, Route } from "react-router-dom";

export default function App() {
  return (
    <HashRouter>
      <div>
        <Route exact path="/" component={Landing} />
        <Route exact path="/about" component={About} />
        <Route exact path="/featureleadin" component={FeatureLeadin} />
        <Route exact path="/features" component={Feature} />
        <Route exact path="/testimonialleadin" component={TestimonialLeadin} />
        <Route exact path="/testimonial" component={Testimonial} />
      </div>
    </HashRouter>
  );
}
