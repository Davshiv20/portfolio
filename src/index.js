import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "animate.css";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Shivam's Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
