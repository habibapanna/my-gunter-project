import React, { useState } from "react";

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
    setFormData({
      ...formData,
      [name]: value,
    });
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
        if (!res.ok) {
          throw new Error("Failed to send email");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data.message);
        setSuccessMessage("Your message has been successfully sent!");
  
        // Reset form fields
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
  
        // Hide success message after 3 seconds
        setTimeout(() => setSuccessMessage(""), 3000);
      })
      .catch((err) => {
        console.error("Error:", err);
        alert("Something went wrong. Please try again later.");
      });
  };
  

  return (
    <div className="bg-black p-6 md:p-10">
      <h2 className="text-center font-semibold text-lg md:text-xl mb-3 text-amber-500 mt-5">
        LET'S TALK
      </h2>
      <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center ">
        Get in Touch
      </h2>

      {successMessage && (
        <div className="mb-6 text-center text-amber-500 text-lg font-semibold animate-fade">
          {successMessage}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {["name", "email", "phone", "subject"].map((field) => (
                <div className="form-group" key={field}>
                  <label
                    htmlFor={field}
                    className="block text-white capitalize"
                  >
                    {field} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    id={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-stone-800 focus:outline-none focus:bg-gray-700 transition-all text-white"
                    required
                    
                  />
                </div>
              ))}
            </div>
            <div className="form-group">
              <label htmlFor="message" className="block text-white">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-5 bg-stone-800  focus:outline-none focus:bg-gray-700 transition-all text-white"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full md:w-auto bg-purple-600 px-6 py-3 text-white font-semibold transition duration-300 shadow-animation cursor-pointer"
            >
              Submit Message
            </button>
          </form>
        </div>

        {/* Dark Themed Google Map */}
        <div className="w-full h-[300px] md:h-[400px] flex items-center justify-center">
        <iframe
  className="w-full h-full"
  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d14607.996596886385!2d90.36290812581547!3d23.747409749772967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sHouse%20No%3A%20137%2F24%2FA%2C%20Dhanmondi%2C%20Dhaka-1209%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1742632275655!5m2!1sen!2sbd"
  style={{ border: 0, filter: "invert(100%) hue-rotate(180deg)" }} // This inverts the colors to create a dark mode effect
  allowFullScreen
  loading="lazy"
></iframe>

        </div>
      </div>
      <style>
        {`
          .shadow-animation {
              position: relative;
              overflow: hidden;
          }

          .shadow-animation::before,
          .shadow-animation::after {
              content: '';
              position: absolute;
              width: 50%;
              height: 100%;
              background: rgba(0, 0, 0, 0.9);
              transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
              opacity: 0;
          }

          .shadow-animation::before {
              left: 0;
              bottom: -100%;
          }

          .shadow-animation::after {
              right: 0;
              top: -100%;
          }

          .shadow-animation:hover::before {
              transform: translateY(-100%);
              opacity: 1;
          }

          .shadow-animation:hover::after {
              transform: translateY(100%);
              opacity: 1;
          }

          .shadow-animation:hover::before,
          .shadow-animation:hover::after {
              animation: panelDisappear 1s ease-in-out forwards;
          }

          @keyframes panelDisappear {
              0% { opacity: 1; }
              70% { opacity: 1; }
              100% { opacity: 0; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

export default ContactForm;
