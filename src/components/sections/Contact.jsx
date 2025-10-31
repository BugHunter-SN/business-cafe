import React, { useState } from "react";
import LocationIcon from "/images/location-icon.png";
import EmailIcon from "/images/email-icon.png";
import PhoneIcon from "/images/phone-icon.png";

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
    console.log(formData);
  };

  return (
    <section id="contact" className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* LEFT SIDE */}
          <div className="flex flex-col gap-10">
            <div>
              <p className="text-[#008874] font-poppins font-bold text-lg mb-2">
                Contact Us
              </p>
              <h2 className="text-black font-poppins font-bold text-3xl sm:text-4xl mb-10">
                Say Hello
              </h2>
            </div>

            <div className="flex flex-col gap-10">
              {/* ADDRESS */}
              <div className="flex items-start gap-4">
                <div className="w-[65px] h-[65px] border-2 border-dotted border-[#008874] rounded-full flex items-center justify-center shrink-0">
                  <div className="w-[53px] h-[53px] bg-[#008874] rounded-full flex items-center justify-center">
                    <img
                      src={LocationIcon}
                      alt="Location"
                      className="w-12 h-12"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="font-poppins font-bold text-black text-base mb-1">
                    Address
                  </h4>
                  <p className="font-poppins text-gray-600 text-sm">
                    Location KG 9 Ave, Kigali
                  </p>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-4">
                <div className="w-[65px] h-[65px] border-2 border-dotted border-[#008874] rounded-full flex items-center justify-center shrink-0">
                  <div className="w-[53px] h-[53px] bg-[#008874] rounded-full flex items-center justify-center">
                    <img src={EmailIcon} alt="Email" className="w-12 h-12" />
                  </div>
                </div>
                <div>
                  <h4 className="font-poppins font-bold text-black text-base mb-1">
                    Email
                  </h4>
                  <a
                    href="mailto:businesscafe@info.com"
                    className="text-gray-600 text-sm font-poppins underline hover:text-[#008874] transition-colors"
                  >
                    businesscafe@info.com
                  </a>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex items-start gap-4">
                <div className="w-[65px] h-[65px] border-2 border-dotted border-[#008874] rounded-full flex items-center justify-center shrink-0">
                  <div className="w-[53px] h-[53px] bg-[#008874] rounded-full flex items-center justify-center">
                    <img src={PhoneIcon} alt="Phone" className="w-12 h-12" />
                  </div>
                </div>
                <div>
                  <h4 className="font-poppins font-bold text-black text-base mb-1">
                    Phone
                  </h4>
                  <a
                    href="tel:+250788183828"
                    className="text-gray-600 text-sm font-poppins hover:text-[#008874] transition-colors"
                  >
                    +250788183828
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE (FORM) */}
          <div>
            <p className="text-[#008874] font-poppins font-bold text-lg mb-2">
              Have Question ?
            </p>
            <h2 className="text-black font-poppins font-bold text-3xl sm:text-4xl mb-8">
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full h-[57px] px-4 mb-4 border border-[#008874] rounded-md font-poppins text-[15px] outline-none focus:ring-2 focus:ring-[#008874] transition"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full h-[57px] px-4 mb-4 border border-[#008874] rounded-md font-poppins text-[15px] outline-none focus:ring-2 focus:ring-[#008874] transition"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full h-[57px] px-4 mb-4 border border-[#008874] rounded-md font-poppins text-[15px] outline-none focus:ring-2 focus:ring-[#008874] transition"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full h-32 px-4 py-3 mb-4 border border-[#008874] rounded-md font-poppins text-[15px] outline-none resize-y focus:ring-2 focus:ring-[#008874] transition"
              />

              <button
                type="submit"
                className="w-[174px] h-[49px] bg-[#008874] text-white rounded-md font-poppins text-[15px] font-medium hover:bg-[#006d5d] transition"
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
