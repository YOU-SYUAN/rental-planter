import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages/App.js";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.js";
import RentForm from "./components/RentForm";

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/mainPage" element={<App />} />
      <Route path="/rentForm" element={<RentForm />} />
      <Route path="*" element={<h1>404 Page Not Found</h1>} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
