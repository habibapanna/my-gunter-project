import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
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
    <div className="bg-black p-6 md:p-10">
      {successMessage && (
        <div className="mb-6 text-center text-amber-500 text-lg font-semibold animate-fade">
          {successMessage}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
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
              your@email.com
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
        <form onSubmit={handleSubmit} className="space-y-6 w-full bg-stone-950 p-10">
          <div className="grid grid-cols-1 gap-4">
            {["Name", "Email", "Phone", "Subject"].map((field) => (
              <div className="form-group" key={field}>
                <input
                  type={field === "email" ? "email" : "text"}
                  id={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full px-4 border-b border-gray-600 py-2 focus:outline-none transition-all placeholder:text-gray-400 text-white"
                  placeholder={field}
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
            className="text-white font-semibold cursor-pointer text-xl text-left"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
