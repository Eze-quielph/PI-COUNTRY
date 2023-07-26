import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import store from "./Redux/store/index.js";
import { Provider } from "react-redux";
import axios from 'axios';
axios.defaults.baseURL = "pi-country-production-2afb.up.railway.app"

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
