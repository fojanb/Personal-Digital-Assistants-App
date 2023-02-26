import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {App , styles} from "./container/App/App";
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
console.log(styles);
root.render(
  <div>
    <h1>Translate App</h1>
    <App />
  </div>
);
