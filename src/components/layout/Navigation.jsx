import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import businessCafeLogo from "/images/business-cafe-logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Space", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      style={{
        backgroundColor: "#ffffff",
        boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div
        className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ maxWidth: "1280px" }}
      >
        <div
          className="flex justify-between items-center"
          style={{ height: "86px" }}
        >
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src={businessCafeLogo}
              alt="Business Cafe Logo"
              className="w-10 h-10"
            />
            <span className="text-2xl font-bold">
              <span className="text-secondary">Business</span>{" "}
              <span style={{ color: "#008874" }}>Cafe</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                className="text-base font-medium transition-colors"
                style={{
                  color: activeLink === link.name ? "#008874" : "#000000",
                }}
                onMouseEnter={(e) => {
                  if (activeLink !== link.name)
                    e.target.style.color = "#008874";
                }}
                onMouseLeave={(e) => {
                  if (activeLink !== link.name)
                    e.target.style.color = "#000000";
                }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-secondary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          className="md:hidden border-t border-secondary-100"
          style={{ backgroundColor: "#ffffff" }}
        >
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.name);
                  setIsMenuOpen(false);
                }}
                className={`block text-base font-medium transition-colors ${
                  activeLink === link.name
                    ? ""
                    : "text-secondary-500 hover:text-secondary"
                }`}
                style={activeLink === link.name ? { color: "#008874" } : {}}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
