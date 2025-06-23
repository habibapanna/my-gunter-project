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
import { Fade, Slide, Zoom, Bounce } from "react-awesome-reveal";

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
    <div id="contact" className="bg-black">
      <div className="p-6 md:p-10">
        {successMessage && (
          <Zoom>
            <div className="mb-6 text-center text-amber-500 text-lg font-semibold">
              {successMessage}
            </div>
          </Zoom>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center justify-center">
          {/* LEFT SIDE - TEXT + INFO */}
          <Fade direction="left" triggerOnce>
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
              <Slide cascade damping={0.2} triggerOnce>
                <div className="space-y-2">
                  <p className="flex items-center gap-2 text-gray-300">
                    <MdEmail className="text-xl text-white" />
                    rmia99294@gmail.com
                  </p>
                  <p className="flex items-center gap-2 text-gray-300 mt-3">
                    <FaPhone className="text-lg text-white" />
                    +880 1777368969
                  </p>
                </div>
              </Slide>

              {/* Social Media Links */}
              <Bounce cascade damping={0.1} triggerOnce>
                <div className="flex gap-4 mt-10">
                {[FaWhatsapp, FaFacebook, FaLinkedin, SiTelegram].map((Icon, i) => {
  const links = [
    "https://wa.me/8801714114459", // WhatsApp
    " https://www.facebook.com/IDWLTD",   // Facebook (replace with your profile)
    "https://www.linkedin.com/company/103198412/admin/dashboard/",   // LinkedIn (replace with your profile)
    "https://t.me/yourTelegramID", // Telegram (replace with your ID)
    "#"                            // WeChat: typically doesn't have a URL, maybe replace or handle differently
  ];

  return (
    <a
      key={i}
      href={links[i]}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-stone-800 hover:bg-purple-600 p-3 rounded-full text-white transition duration-300"
    >
      <Icon size={20} />
    </a>
  );
})}

                </div>
              </Bounce>
            </div>
          </Fade>

          {/* RIGHT SIDE - FORM */}
          <Slide direction="right" triggerOnce>
            <form onSubmit={handleSubmit} className="space-y-6 w-full bg-stone-950 lg:py-5 p-5 lg:px-16 shadow-xl">
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
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
