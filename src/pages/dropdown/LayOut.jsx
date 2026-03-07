// src/pages/dropdown/DropdownLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";

const DropdownLayout = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">
        Dropdown Section</h2>
      <Outlet /> {/* Nested pages render here */}
    </div>
  );
};

export default DropdownLayout;