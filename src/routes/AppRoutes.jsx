// File: src/routes/AppRoutes.jsx

import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";

function AppRoutes() {
  return (
    <Routes>
      {/* Main Route */}
      <Route path="/" element={<Home />} />

      {/* <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/solutions" element={<Solutions />} />
      <Route path="/contact" element={<Contact />} /> */}

      {/* 404 Not Found Route
          Uncomment when NotFound.jsx is created:

      <Route path="*" element={<NotFound />} />
      */}
    </Routes>
  );
}

export default AppRoutes;
