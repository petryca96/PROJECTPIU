import React from "react";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

const rootElement = document.getElementById("root");

render(
  <React.StrictMode>
    <Router className="back">
      <App />
    </Router>
  </React.StrictMode>,
  rootElement
);
