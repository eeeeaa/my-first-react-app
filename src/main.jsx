import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import "./styles/index.css";

//createRoot is use to trigger initial render of the page
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
