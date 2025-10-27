import React from "react";
import Rectangle from "/images/Rectangle-6.png";

const WhyChooseUs = () => {
  const CheckIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.6667 5L7.50004 14.1667L3.33337 10"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <section id="about" className="py-20 bg-accent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm text-secondary-500 mb-2 uppercase tracking-wide">
            Your Benefits
          </p>
          <h2 className="text-4xl font-bold text-secondary mb-4">
            Why Choose Us
          </h2>
          <p className="text-secondary-600 max-w-xl mx-auto text-sm">
            Unleash your productivity with our premium workspace solutions.
            Elevate your work game and join the thriving team today.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="bg-primary-50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckIcon />
              </div>
              <h3 className="text-lg font-bold text-secondary mb-2">
                Creative Space
              </h3>
              <p className="text-secondary-600 text-sm">
                Lorem ipsum dolor sit amet po, consectetur adipiscing elit.
              </p>
            </div>

            <div className="bg-primary-50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckIcon />
              </div>
              <h3 className="text-lg font-bold text-secondary mb-2">
                High Speed Wifi
              </h3>
              <p className="text-secondary-600 text-sm">
                Lorem ipsum dolor sit amet po, consectetur adipiscing elit.
              </p>
            </div>

            <div className="bg-primary-50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckIcon />
              </div>
              <h3 className="text-lg font-bold text-secondary mb-2">
                Parking Area
              </h3>
              <p className="text-secondary-600 text-sm">
                Lorem ipsum dolor sit amet po, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          {/* Center Image */}
          <div className="lg:col-span-1 flex items-center justify-center">
            <img
              src={Rectangle}
              alt="Modern office interior"
              className="rounded-lg shadow-xl w-full object-cover"
              style={{ height: "700px", width: "469px" }}
            />
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="bg-primary-50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckIcon />
              </div>
              <h3 className="text-lg font-bold text-secondary mb-2">
                24/7 Access
              </h3>
              <p className="text-secondary-600 text-sm">
                Lorem ipsum dolor sit amet po, consectetur adipiscing elit.
              </p>
            </div>

            <div className="bg-primary-50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckIcon />
              </div>
              <h3 className="text-lg font-bold text-secondary mb-2">
                Great Location
              </h3>
              <p className="text-secondary-600 text-sm">
                Lorem ipsum dolor sit amet po, consectetur adipiscing elit.
              </p>
            </div>

            <div className="bg-primary-50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckIcon />
              </div>
              <h3 className="text-lg font-bold text-secondary mb-2">
                Outdoor Space
              </h3>
              <p className="text-secondary-600 text-sm">
                Lorem ipsum dolor sit amet po, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
