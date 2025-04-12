import React, { useState } from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
  FaSkype,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { SiTelegram, SiWechat } from "react-icons/si";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://my-gunter-project-server.vercel.app/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to send email");
        return res.json();
      })
      .then(() => {
        setSuccessMessage("Your message has been successfully sent!");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        setTimeout(() => setSuccessMessage(""), 3000);
      })
      .catch((err) => {
        console.error("Error:", err);
        alert("Something went wrong. Please try again later.");
      });
  };

  return (
    <div className="bg-black">
      <div className="p-6 md:p-10">
        {successMessage && (
          <div className="mb-6 text-center text-amber-500 text-lg font-semibold animate-fade">
            {successMessage}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center justify-center">
          {/* LEFT SIDE - TEXT + INFO */}
          <div className="text-white space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Let's Discuss Your Project!
            </h1>
            <p className="text-gray-400 mt-8 mb-8 leading-loose">
              I'm excited to hear about your project idea. Whether you're just
              starting out or ready to launch, let's make it something amazing
              together.
            </p>

            {/* Contact Info */}
            <div className="space-y-2">
              <p className="flex items-center gap-2 text-gray-300">
                <MdEmail className="text-xl text-white" />
                Contact@Imaginedreamworld.com
              </p>
              <p className="flex items-center gap-2 text-gray-300 mt-3">
                <FaPhone className="text-lg text-white" />
                +880 1234-567890
              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex gap-4 mt-10">
              {[FaWhatsapp, FaFacebook, FaLinkedin, SiTelegram, FaSkype, SiWechat].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-stone-800 hover:bg-purple-600 p-3 rounded-full text-white transition duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <form onSubmit={handleSubmit} className="space-y-6 w-full bg-stone-950 lg:py-10 p-5 lg:px-16">
            <div className="grid grid-cols-1 gap-4">
              {["name", "email", "phone", "subject"].map((field) => (
                <div className="form-group" key={field}>
                  <input
                    type={field === "email" ? "email" : "text"}
                    id={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full px-4 border-b border-gray-600 py-2 focus:outline-none transition-all placeholder:text-gray-400 text-white"
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    required
                  />
                </div>
              ))}
            </div>
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 focus:outline-none transition-all text-white border-b border-gray-600"
                placeholder="Message"
                required
              />
            </div>
            <button
              type="submit"
              className="text-white font-semibold cursor-pointer text-xl text-left hover:text-purple-600"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>

      {/* ✅ HORIZONTAL MAP SECTION */}
      <div className="w-full my-8">
        <h2 className="text-center text-white text-lg lg:text-2xl font-semibold mb-5">
          <span className="text-amber-500">Visit Us:</span> House No: 137/24/A, Dhanmondi, Dhaka-1209, Bangladesh
        </h2>
        <div className="w-full h-[300px] px-5">
          <iframe
            title="Our Location"
            width="100%"
            height="100%"
            className="border-none grayscale contrast-125 brightness-90"
            style={{ filter: "invert(100%) hue-rotate(180deg)" }}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.4392742515685!2d90.37483377531796!3d23.803910886918406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a061e3f557%3A0x2e66b5dd9e8818fc!2s137%20Rd%20No.%2024A%2C%20Dhaka%201209!5e0!3m2!1sen!2sbd!4v1712811229244!5m2!1sen!2sbd"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
