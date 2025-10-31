import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section
      id="contact"
      style={{ backgroundColor: "#f5f5f5", padding: "80px 0" }}
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ maxWidth: "1280px" }}
      >
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
          <div>
            <p
              style={{
                color: "#008874",
                fontFamily: "Poppins, sans-serif",
                fontSize: "14px",
                fontWeight: "600",
                marginBottom: "8px",
              }}
            >
              Contact Us
            </p>
            <h2
              style={{
                color: "#000000",
                fontFamily: "Poppins, sans-serif",
                fontSize: "32px",
                fontWeight: "700",
                marginBottom: "32px",
              }}
            >
              Say Hello
            </h2>

            {/* Address */}
            <div className="flex items-start gap-4 mb-6">
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: "#008874",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <img
                  src="/images/location-icon.png"
                  alt="Location"
                  style={{ width: "24px", height: "24px" }}
                />
              </div>
              <div>
                <h4
                  style={{
                    color: "#000000",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "16px",
                    fontWeight: "700",
                    marginBottom: "4px",
                  }}
                >
                  Address
                </h4>
                <p
                  style={{
                    color: "#666666",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "14px",
                    fontWeight: "400",
                  }}
                >
                  Location: KG 9 Ave, Kigali
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 mb-6">
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: "#008874",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <img
                  src="/images/email-icon.png"
                  alt="Email"
                  style={{ width: "24px", height: "24px" }}
                />
              </div>
              <div>
                <h4
                  style={{
                    color: "#000000",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "16px",
                    fontWeight: "700",
                    marginBottom: "4px",
                  }}
                >
                  Email
                </h4>
                <a
                  href="mailto:businesscafekigali@info.com"
                  style={{
                    color: "#666666",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "14px",
                    fontWeight: "400",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#008874")}
                  onMouseLeave={(e) => (e.target.style.color = "#666666")}
                >
                  businesscafekigali@info.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: "#008874",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <img
                  src="/images/phone-icon.png"
                  alt="Phone"
                  style={{ width: "24px", height: "24px" }}
                />
              </div>
              <div>
                <h4
                  style={{
                    color: "#000000",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "16px",
                    fontWeight: "700",
                    marginBottom: "4px",
                  }}
                >
                  Phone
                </h4>
                <a
                  href="tel:+250788383838"
                  style={{
                    color: "#666666",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "14px",
                    fontWeight: "400",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#008874")}
                  onMouseLeave={(e) => (e.target.style.color = "#666666")}
                >
                  +250788383838
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <p
              style={{
                color: "#008874",
                fontFamily: "Poppins, sans-serif",
                fontSize: "14px",
                fontWeight: "600",
                marginBottom: "8px",
              }}
            >
              Have Question ?
            </p>
            <h2
              style={{
                color: "#000000",
                fontFamily: "Poppins, sans-serif",
                fontSize: "32px",
                fontWeight: "700",
                marginBottom: "32px",
              }}
            >
              Send a Message
            </h2>

            <form onSubmit={handleSubmit}>
              {/* Name Input */}
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  marginBottom: "16px",
                  border: "1px solid #008874",
                  borderRadius: "4px",
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "14px",
                  outline: "none",
                }}
              />

              {/* Email Input */}
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  marginBottom: "16px",
                  border: "1px solid #008874",
                  borderRadius: "4px",
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "14px",
                  outline: "none",
                }}
              />

              {/* Subject Input */}
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  marginBottom: "16px",
                  border: "1px solid #008874",
                  borderRadius: "4px",
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "14px",
                  outline: "none",
                }}
              />

              {/* Message Textarea */}
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  marginBottom: "16px",
                  border: "1px solid #008874",
                  borderRadius: "4px",
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "14px",
                  outline: "none",
                  resize: "vertical",
                }}
              />

              {/* Submit Button */}
              <button
                type="submit"
                style={{
                  backgroundColor: "#008874",
                  color: "#ffffff",
                  padding: "12px 32px",
                  border: "none",
                  borderRadius: "4px",
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "16px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "background-color 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#006d5d")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#008874")
                }
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
