import React, { useState } from "react";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import ContactInfo from "../common/ContactInfo";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const contactDetails = [
    {
      icon: MapPin,
      title: "Address",
      content: "123 Business Avenue, Suite 100\nNew York, NY 10001",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@business.com",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (555) 123-4567",
    },
    {
      icon: Clock,
      title: "Office Time",
      content: "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday - Sunday: Closed",
    },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-secondary mb-8">
              Say Hello
            </h2>

            <div className="space-y-6">
              {contactDetails.map((detail, index) => (
                <ContactInfo key={index} {...detail} />
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-secondary mb-8">
              Send a Message
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-secondary-700 mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-secondary-200 rounded-sm focus:outline-none focus:ring-md focus:ring-primary focus:border-primary transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-secondary-700 mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-secondary-200 rounded-sm focus:outline-none focus:ring-md focus:ring-primary focus:border-primary transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-secondary-700 mb-2 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-secondary-200 rounded-sm focus:outline-none focus:ring-md focus:ring-primary focus:border-primary transition-all"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label className="block text-secondary-700 mb-2 font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-secondary-200 rounded-sm focus:outline-none focus:ring-md focus:ring-primary focus:border-primary transition-all resize-none"
                  placeholder="Tell us more about your needs..."
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                className="bg-primary hover:bg-primary-600 text-accent px-8 py-3 rounded-md font-medium transition-all shadow-md hover:shadow-lg w-full md:w-auto"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
