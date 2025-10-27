import React from "react";
import HeroSectionImage from "/images/Rectangle-1.png";

const Hero = () => {
  return (
    <section id="home" className="relative pt-16 h-screen">
      <div className="absolute inset-0">
        <img
          src={HeroSectionImage}
          alt="Modern office workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-secondary/50"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-accent max-w-3xl">
          <p className="text-primary text-lg mb-4 font-medium">
            Best Workspace of the Year
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Work Creative,
            <br />
            Flexible Scalable Workspace
          </h1>
          <p className="text-xl mb-8 text-secondary-50">
            We create inspiring workspaces that adapt to your business needs and
            foster creativity
          </p>
          <button className="bg-primary hover:bg-primary-600 text-accent px-8 py-3 rounded-md text-lg font-medium transition-all shadow-md hover:shadow-lg">
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
