import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Upload from "./page/Upload/Upload";
import Success from "./page/Success/Success";
import Base from "./components/Base/Base";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path=":videoId" element={<App />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<Base />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
