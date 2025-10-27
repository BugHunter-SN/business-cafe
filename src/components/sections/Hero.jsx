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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
        <div className="max-w-3xl text-center">
          <p
            className="mb-4 font-medium"
            style={{
              color: "#FFFFFF",
              fontFamily: "Poppins, sans-serif",
              fontSize: "25px",
              fontWeight: "500",
              lineHeight: "100%",
            }}
          >
            The Best WorkSpace in Kigali
          </p>
          <h1
            className="mb-6"
            style={{
              color: "#ffffff",
              fontFamily: "Poppins, sans-serif",
              fontSize: "40px",
              fontWeight: "700",
              lineHeight: "100%",
            }}
          >
            <span style={{ color: "#02BDA1" }}>Professional</span>, Creative,
            <br />
            Flexible, Scalable{" "}
            <span style={{ color: "#02BDA1" }}>Workspace</span>
          </h1>
          <p
            className="mb-8 mx-auto"
            style={{
              color: "#ffffff",
              fontFamily: "Poppins, sans-serif",
              fontSize: "15px",
              fontWeight: "400",
              lineHeight: "100%",
              maxWidth: "714px",
              height: "auto",
            }}
          >
            Discover your ideal workspace with us. Work smart, not hard in our
            fully-equipped office spaces. Elevate your business with flexible
            solutions tailored to your needs. Find your perfect office today!
          </p>
          <button
            className="transition-all shadow-md hover:shadow-lg mx-auto"
            style={{
              backgroundColor: "#008874",
              color: "#ffffff",
              width: "144px",
              height: "40px",
              borderRadius: "2px",
              fontFamily: "Poppins, sans-serif",
              fontSize: "16px",
              fontWeight: "700",
              border: "none",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#006d5d";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#008874";
            }}
          >
            Explore
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
