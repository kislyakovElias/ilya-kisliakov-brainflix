import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Upload from "./page/Upload/Upload";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path=":videoId" element={<App />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
