import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ReactGA from "react-ga4";

if (process.env.REACT_APP_GA_KEY) {
  ReactGA.initialize(process.env.REACT_APP_GA_KEY);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
