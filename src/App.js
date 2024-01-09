import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Productlist from "./pages/Product-list";
import Productdetails from "./pages/Product-details";
import Breadcrumb from "./component/Breadcrumb";
import CustumLoadingBar from "./component/LoadingBar";

function App() {
  return (
    <BrowserRouter>
      <CustumLoadingBar />
      <Breadcrumb />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Productlist />} />
        <Route path="/products/:id" element={<Productdetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
