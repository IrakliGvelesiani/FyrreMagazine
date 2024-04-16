import React from "react";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import Layout from "./Components/Layout/Layout";
import "./index.css";
import "./Assets/fonts/GeneralSans/Fonts/WEB/fonts/GeneralSans-Medium.ttf";

const rootElement = document.getElementById("root");

createRoot(rootElement).render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
);

reportWebVitals();
