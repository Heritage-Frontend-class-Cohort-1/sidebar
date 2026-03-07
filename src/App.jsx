import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Products from "./pages/Products";

import DropdownLayout from "./pages/dropdown/LayOut";
import Promise from "./pages/dropdown/Promise";
import Idera from "./pages/dropdown/Idera";
import Adeboye from "./pages/dropdown/Adeboye";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />

        {/* Parent route for dropdown pages */}
        <Route path="/dropdown" element={<DropdownLayout />}>
          <Route path="promise" element={<Promise />} />
          <Route path="idera" element={<Idera />} />
          <Route path="adeboye" element={<Adeboye />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;