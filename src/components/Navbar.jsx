import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import rcglogo from "../assets/rcglogo.webp";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black text-white px-6 py-4">
      <div className="flex items-center justify-between">

        {/* Logo */}
        <img src={rcglogo} alt="RCG Logo" className="w-16 h-auto" />

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <Link to="/" className="hover:text-blue-500 transition">
            Home
          </Link>
          <Link to="/contact" className="hover:text-blue-500 transition">
            Contact
          </Link>
          <Link to="/services" className="hover:text-blue-500 transition">
            Services
          </Link>
          <Link to="/products" className="hover:text-blue-500 transition">
            Products
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden">
          {isMenuOpen ? <X size={40} /> : <Menu size={38} />}
        </button>
      </div>

      {/* Mobile Links */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col mt-4 space-y-4 font-medium">
          <Link to="/" onClick={toggleMenu} className="hover:text-blue-500">
            Home
          </Link>
          <Link to="/contact" onClick={toggleMenu} className="hover:text-blue-500">
            Contact
          </Link>
          <Link to="/services" onClick={toggleMenu} className="hover:text-blue-500">
            Services
          </Link>
          <Link to="/products" onClick={toggleMenu} className="hover:text-blue-500">
            Products
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;