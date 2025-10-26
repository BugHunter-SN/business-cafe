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
    <footer className="bg-accent border-t border-secondary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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

              <h3 className="text-xl font-semibold text-secondary ">
                Business <span className="text-primary">Cafe</span>
              </h3>
            </div>

            <p className="text-secondary-600 mb-4 text-sm leading-relaxed">
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
            <h4 className="font-semibold text-secondary mb-4 border-b-2 border-primary pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2 mt-4">
              <li>
                <a
                  href="#home"
                  className="text-secondary-600 hover:text-primary transition-colors text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#space"
                  className="text-secondary-600 hover:text-primary transition-colors text-sm"
                >
                  Space
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-secondary-600 hover:text-primary transition-colors text-sm"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-secondary-600 hover:text-primary transition-colors text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-secondary mb-4 border-b-2 border-primary pb-2 inline-block">
              Contact Info
            </h4>
            <ul className="space-y-2 mt-4 text-sm">
              <li className="text-secondary-600">
                <span className="font-medium text-secondary">Location:</span>{" "}
                Kigali, <span className="text-primary font-medium">Rwanda</span>
              </li>
              <li className="text-secondary-600">
                <span className="font-medium text-secondary">Email:</span>{" "}
                <a
                  href="mailto:businesscafe@info.com"
                  className="hover:text-primary transition-colors"
                >
                  businesscafe@info.com
                </a>
              </li>
              <li className="text-secondary-600">
                <span className="font-medium text-secondary">Phone:</span>{" "}
                <a
                  href="tel:+250783787817"
                  className="hover:text-primary transition-colors"
                >
                  +250783787817
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-600 transition-colors text-sm font-medium"
                >
                  View Location on GoogleMap
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-secondary-100 pt-6 text-center">
          <p className="text-secondary-600 text-base font-normal leading-none">
            Copyright © {currentYear} Business Cafe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
