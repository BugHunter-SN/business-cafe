import React from "react";
import RentingOffices from "/images/renting-offices.png";
import CoffeeShop from "/images/coffee-shop.png";
import PrivateEventSpace from "/images/event-space.png";

const Services = () => {
  return (
    <section
      id="services"
      style={{ backgroundColor: "#f5f5f5", padding: "80px 0" }}
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ maxWidth: "1280px" }}
      >
        <div className="text-center mb-16">
          <h2
            className="mb-4"
            style={{
              color: "#000000",
              fontFamily: "Poppins, sans-serif",
              fontSize: "32px",
              fontWeight: "700",
              lineHeight: "120%",
            }}
          >
            We Offer creative working
            <br />
            environments
          </h2>
          <p
            className="mx-auto"
            style={{
              color: "#666666",
              fontFamily: "Poppins, sans-serif",
              fontSize: "15px",
              fontWeight: "400",
              maxWidth: "600px",
              lineHeight: "150%",
            }}
          >
            Find your perfect workspace. Choose from versatile options tailored
            to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Renting Offices */}
          <div
            className="overflow-hidden transition-shadow"
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "8px",
              boxShadow:
                "0px 0px 4px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <img
              src={RentingOffices}
              alt="Renting Offices"
              className="w-full object-cover"
              style={{ height: "200px" }}
            />
            <div className="p-6 text-center">
              <h3
                className="mb-2"
                style={{
                  color: "#008874",
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "20px",
                  fontWeight: "700",
                }}
              >
                Renting Offices
              </h3>
              <div
                style={{
                  width: "50px",
                  height: "2px",
                  backgroundColor: "#008874",
                  margin: "8px auto 16px auto",
                }}
              ></div>
              <p
                className="mb-4"
                style={{
                  color: "#666666",
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "150%",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipiscing elit mollis
                mauris
              </p>
              <a
                href="#"
                style={{
                  color: "#008874",
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "14px",
                  fontWeight: "600",
                  textDecoration: "none",
                }}
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Coffee Shop */}
          <div
            className="overflow-hidden transition-shadow"
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "8px",
              boxShadow:
                "0px 0px 4px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <img
              src={CoffeeShop}
              alt="Coffee Shop"
              className="w-full object-cover"
              style={{ height: "200px" }}
            />
            <div className="p-6 text-center">
              <h3
                className="mb-2"
                style={{
                  color: "#008874",
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "20px",
                  fontWeight: "700",
                }}
              >
                Coffee Shop
              </h3>
              <div
                style={{
                  width: "50px",
                  height: "2px",
                  backgroundColor: "#008874",
                  margin: "8px auto 16px auto",
                }}
              ></div>
              <p
                className="mb-4"
                style={{
                  color: "#666666",
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "150%",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipiscing elit mollis
                mauris
              </p>
              <a
                href="#"
                style={{
                  color: "#008874",
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "14px",
                  fontWeight: "600",
                  textDecoration: "none",
                }}
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Private Event Space */}
          <div
            className="overflow-hidden transition-shadow"
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "8px",
              boxShadow:
                "0px 0px 4px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <img
              src={PrivateEventSpace}
              alt="Private event Space"
              className="w-full object-cover"
              style={{ height: "200px" }}
            />
            <div className="p-6 text-center">
              <h3
                className="mb-2"
                style={{
                  color: "#008874",
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "20px",
                  fontWeight: "700",
                }}
              >
                Private event Space
              </h3>
              <div
                style={{
                  width: "50px",
                  height: "2px",
                  backgroundColor: "#008874",
                  margin: "8px auto 16px auto",
                }}
              ></div>
              <p
                className="mb-4"
                style={{
                  color: "#666666",
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "150%",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipiscing elit mollis
                mauris
              </p>
              <a
                href="#"
                style={{
                  color: "#008874",
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "14px",
                  fontWeight: "600",
                  textDecoration: "none",
                }}
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* About Us Section */}
        <div
          className="mt-16 p-8"
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            boxShadow:
              "0px 0px 4px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.1)",
            border: "1px solid #e0e0e0",
          }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="md:w-2/3">
              <p
                className="mb-2"
                style={{
                  color: "#008874",
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                About Us
              </p>
              <h3
                className="mb-4"
                style={{
                  color: "#000000",
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "24px",
                  fontWeight: "700",
                  lineHeight: "120%",
                }}
              >
                We offer creative working environments that suit your business
              </h3>
              <p
                style={{
                  color: "#666666",
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "15px",
                  fontWeight: "400",
                  lineHeight: "150%",
                }}
              >
                Lorem ipsum praesentium dignissimos lorem temporibus unde odio
                animi inventore voluptates laborum. Sed, nostrum praesentium
                dignissimos temporibus unde odio animi inventore.
              </p>
            </div>
            <button
              className="whitespace-nowrap"
              style={{
                backgroundColor: "#008874",
                color: "#ffffff",
                padding: "12px 32px",
                borderRadius: "8px",
                fontFamily: "Poppins, sans-serif",
                fontSize: "16px",
                fontWeight: "600",
                border: "none",
                cursor: "pointer",
                boxShadow:
                  "0px 0px 4px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.1)",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#006d5d";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#008874";
              }}
            >
              See Service
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
