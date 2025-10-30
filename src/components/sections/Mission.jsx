import React from "react";
import MissionBg from "/images/mission-bg.png";

const Mission = () => {
  return (
    <section
      className="py-20 relative"
      style={{
        backgroundImage: `url(${MissionBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#000000",
      }}
    >
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      ></div>

      <div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        style={{ maxWidth: "1280px" }}
      >
        <h2
          className="mb-6"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "32px",
            fontWeight: "700",
            color: "#FFFFFF",
          }}
        >
          <span style={{ color: "#008874" }}>Our</span> Mission
        </h2>

        {/* Container for text and strokes - 970px */}
        <div
          className="mx-auto"
          style={{
            width: "970px",
            maxWidth: "100%",
          }}
        >
          <p
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "15px",
              fontWeight: "700",
              lineHeight: "150%",
              textAlign: "center",
              color: "#FFFFFF",
              marginBottom: "16px",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipiscing elit, mattis
            blandit odio felis aliquet montes turpis consequat, est sociosqu
            vitae id nec rutrum. Ornare dictumst et eget fames cursus vel
            penatibus quis posuere, ultrices fermentum libero pretium convallis
            pharetra.
          </p>

          {/* Two stroke lines beneath text */}
          <div
            className="flex gap-4 justify-center"
            style={{
              marginTop: "16px",
            }}
          >
            {/* Left stroke - Teal */}
            <div
              style={{
                width: "59px",
                height: "4px",
                backgroundColor: "#008874",
                borderRadius: "3px",
              }}
            ></div>

            {/* Right stroke - White */}
            <div
              style={{
                width: "59px",
                height: "4px",
                backgroundColor: "#FFFFFF",
                borderRadius: "3px",
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
