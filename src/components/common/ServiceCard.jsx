import React from "react";

const ServiceCard = ({ title, description, image }) => {
  return (
    <div className="bg-accent rounded-md overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-secondary mb-2">{title}</h3>
        <p className="text-secondary-600 mb-4">{description}</p>
        <a
          href="#"
          className="text-primary hover:text-primary-600 font-medium transition-colors"
        >
          Learn More →
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
