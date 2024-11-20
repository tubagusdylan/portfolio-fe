import React from "react";
import ReactDOM from "react-dom/client";
import AppRoute from "@config/route";
import { store } from "@store/index";
import { Provider } from "react-redux";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRoute />
      <ToastContainer position="top-center" autoClose={3000} pauseOnHover={false} />
    </Provider>
  </React.StrictMode>
);

