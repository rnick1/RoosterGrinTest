import React from "react";
import "./App.css";
import Landing from "./pages/Landing/Landing.js";
import About from "./pages/About/About.js";
import ServicesLeadin from "./pages/ServicesLeadin/ServicesLeadin.js";
import Services from "./pages/Services/Services.js";
import TestimonialsLeadin from "./pages/TestimonialsLeadin/TestimonialsLeadin.js";
import Testimonials from "./pages/Testimonials/Testimonials.js";
import { HashRouter, Route } from "react-router-dom";

export default function App() {
  return (
    <HashRouter>
      <div>
        <Route exact path="/" component={Landing} />
        <Route exact path="/about" component={About} />
        <Route exact path="/servicesleadin" component={ServicesLeadin} />
        <Route exact path="/services" component={Services} />
        <Route
          exact
          path="/testimonialsleadin"
          component={TestimonialsLeadin}
        />
        <Route exact path="/testimonials" component={Testimonials} />
      </div>
    </HashRouter>
  );
}
