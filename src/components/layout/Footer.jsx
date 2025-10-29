import React from "react";
import businessCafeLogo from "/images/business-cafe-logo.png";
import facebookIcon from "/images/et_facebook.png";
import twitterIcon from "/images/et_twitter.png";
import linkedinIcon from "/images/et_linkedin.png";
import instagramIcon from "/images/et_instagram.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Facebook", icon: facebookIcon, href: "#" },
    { name: "Twitter", icon: twitterIcon, href: "#" },
    { name: "LinkedIn", icon: linkedinIcon, href: "#" },
    { name: "Instagram", icon: instagramIcon, href: "#" },
  ];

  return (
    <footer
      style={{ backgroundColor: "#ffffff", borderTop: "1px solid #e0e0e0" }}
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        style={{ maxWidth: "1280px" }}
      >
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Business Cafe */}
          <div>
            {/* Logo and Text */}
            <div className="flex items-center gap-3 mb-4">
              <img
                src={businessCafeLogo}
                alt="Business Cafe Logo"
                className="w-10 h-10"
              />
              <h3 className="text-xl font-bold">
                <span style={{ color: "#000000" }}>Business</span>{" "}
                <span style={{ color: "#008874" }}>Cafe</span>
              </h3>
            </div>

            <p
              className="mb-4 text-sm leading-relaxed"
              style={{
                color: "#000000",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Discover your ideal workspace with us. Work smart, not hard in our
              fully-equipped office spaces.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="w-10 h-10 rounded-full hover:opacity-80 transition-opacity"
                >
                  <img
                    src={social.icon}
                    alt={`${social.name} icon`}
                    className="w-full h-full object-contain"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="mb-4 pb-2 inline-block"
              style={{
                color: "#000000",
                fontFamily: "Poppins, sans-serif",
                fontWeight: "600",
                borderBottom: "2px solid #008874",
              }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2 mt-4">
              <li>
                <a
                  href="#home"
                  className="text-sm transition-colors"
                  style={{
                    color: "#000000",
                    fontFamily: "Poppins, sans-serif",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#008874")}
                  onMouseLeave={(e) => (e.target.style.color = "#000000")}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#space"
                  className="text-sm transition-colors"
                  style={{
                    color: "#000000",
                    fontFamily: "Poppins, sans-serif",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#008874")}
                  onMouseLeave={(e) => (e.target.style.color = "#000000")}
                >
                  Space
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-sm transition-colors"
                  style={{
                    color: "#000000",
                    fontFamily: "Poppins, sans-serif",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#008874")}
                  onMouseLeave={(e) => (e.target.style.color = "#000000")}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm transition-colors"
                  style={{
                    color: "#000000",
                    fontFamily: "Poppins, sans-serif",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#008874")}
                  onMouseLeave={(e) => (e.target.style.color = "#000000")}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className="mb-4 pb-2 inline-block"
              style={{
                color: "#000000",
                fontFamily: "Poppins, sans-serif",
                fontWeight: "600",
                borderBottom: "2px solid #008874",
              }}
            >
              Contact Info
            </h4>
            <ul className="space-y-2 mt-4 text-sm">
              <li
                style={{ color: "#000000", fontFamily: "Poppins, sans-serif" }}
              >
                <span style={{ fontWeight: "500", color: "#000000" }}>
                  Location:
                </span>{" "}
                Kigali,{" "}
                <span style={{ color: "#008874", fontWeight: "500" }}>
                  Rwanda
                </span>
              </li>
              <li
                style={{ color: "#000000", fontFamily: "Poppins, sans-serif" }}
              >
                <span style={{ fontWeight: "500", color: "#000000" }}>
                  Email:
                </span>{" "}
                <a
                  href="mailto:businesscafe@info.com"
                  className="transition-colors"
                  style={{ color: "#000000" }}
                  onMouseEnter={(e) => (e.target.style.color = "#008874")}
                  onMouseLeave={(e) => (e.target.style.color = "#000000")}
                >
                  businesscafe@info.com
                </a>
              </li>
              <li
                style={{ color: "#000000", fontFamily: "Poppins, sans-serif" }}
              >
                <span style={{ fontWeight: "500", color: "#000000" }}>
                  Phone:
                </span>{" "}
                <a
                  href="tel:+250783787817"
                  className="transition-colors"
                  style={{ color: "#000000" }}
                  onMouseEnter={(e) => (e.target.style.color = "#008874")}
                  onMouseLeave={(e) => (e.target.style.color = "#000000")}
                >
                  +250783787817
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/d/viewer?hl=en&ie=UTF8&oe=UTF8&msa=0&mid=1o2cUkUb6MuCeiDOQKlo65xgwxAE&ll=-2.037623841691486%2C30.094707000000014&z=12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors"
                  style={{
                    color: "#008874",
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "500",
                    textDecoration: "underline",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#006d5d")}
                  onMouseLeave={(e) => (e.target.style.color = "#008874")}
                >
                  View Location on GoogleMap
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="pt-6 text-center"
          style={{ borderTop: "1px solid #e0e0e0" }}
        >
          <p
            className="text-base font-normal"
            style={{
              color: "#000000",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Copyright &copy; {currentYear} Business Cafe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
