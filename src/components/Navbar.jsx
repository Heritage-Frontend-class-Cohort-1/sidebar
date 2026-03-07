import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import rcglogo from "../assets/rcglogo.webp";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [desktopContactOpen, setDesktopContactOpen] = useState(false);
  const [mobileContactOpen, setMobileContactOpen] = useState(false);

  const contactLinks = [
    { name: "Sweet", path: "/dropdown/promise" },
    { name: "Idera", path: "/dropdown/idera" },
    { name: "Adeboye", path: "/dropdown/adeboye" },
  ];

  return (
    <nav className="bg-black text-white px-6 py-4 relative z-50">
      <div className="flex items-center justify-between">

        {/* Logo */}
        <img src={rcglogo} alt="RCG Logo" className="w-16 h-auto" />

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-medium">

          <Link to="/" className="hover:text-blue-500 transition">Home</Link>

          {/* Desktop Contact Dropdown - CLICK */}
          <div className="relative">
            <div
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => setDesktopContactOpen(!desktopContactOpen)}
            >
              <span className="hover:text-blue-500 transition">Contact</span>
              <ChevronDown size={20} className={`${desktopContactOpen ? "rotate-180" : ""} transition-transform`} />
            </div>

            {desktopContactOpen && (
              <div className="absolute top-full left-0 mt-1 bg-white text-black rounded shadow-lg flex flex-col p-3 space-y-2 z-50">
                {contactLinks.map((link) => (
                  <Link
                    to={link.path}
                    key={link.name}
                    className="hover:text-blue-500"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/services" className="hover:text-blue-500 transition">Services</Link>
          <Link to="/products" className="hover:text-blue-500 transition">Products</Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
          {isMenuOpen ? <X size={40} /> : <Menu size={38} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col mt-4 space-y-4 font-medium">

          <Link to="/" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-500">
            Home
          </Link>

          {/* Mobile Contact Dropdown */}
          <div className="flex flex-col space-y-2">
            <div
              className="flex items-center gap-1 font-semibold cursor-pointer"
              onClick={() => setMobileContactOpen(!mobileContactOpen)}
            >
              <p>Contact</p>
              <ChevronDown size={16} className={`${mobileContactOpen ? "rotate-180" : ""} transition-transform`} />
            </div>

            {mobileContactOpen && (
              <div className="ml-4 flex flex-col space-y-2">
                {contactLinks.map((link) => (
                  <Link
                    to={link.path}
                    key={link.name}
                    onClick={() => setIsMenuOpen(false)}
                    className="hover:text-blue-500"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/services" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-500">
            Services
          </Link>
          <Link to="/products" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-500">
            Products
          </Link>

        </div>
      )}
    </nav>
  );
};

export default Navbar;