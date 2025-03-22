import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here, like sending the data to a server.
        console.log('Form Data Submitted: ', formData);
    };

    return (
        <div className="bg-white contact-form-container p-8">
            <h2 className="text-center font-semibold mb-5 mt-10 text-orange-600">LET'S TALK</h2>
            <h2 className="text-3xl font-bold mb-10 text-black text-center">Get in Touch</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Contact Form Column */}
                <div>
                    <form onSubmit={handleSubmit} className="space-y-6">
                       <div className='grid grid-cols-2 gap-5'>
                         {/* Name Field */}
                         <div className="form-group relative">
                            <label
                                htmlFor="name"
                                className="block text-gray-600  left-4 transition-all duration-300"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 bg-stone-100 border border-gray-300  focus:outline-none focus:ring-0 focus:bg-stone-200 focus:text-gray-800 transition-all"
                                required
                            />
                        </div>

                        {/* Email Field */}
                        <div className="form-group relative">
                            <label
                                htmlFor="email"
                                className="block  text-gray-600 left-4 transition-all duration-300"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 bg-stone-100 border border-gray-300  focus:outline-none focus:ring-0 focus:bg-stone-200 focus:text-gray-800 transition-all"
                                required
                            />
                        </div>

                        {/* Phone Field */}
                        <div className="form-group relative">
                            <label
                                htmlFor="phone"
                                className="block text-gray-600  left-4 transition-all duration-300"
                            >
                                Phone
                            </label>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-2 bg-stone-100 border border-gray-300  focus:outline-none focus:ring-0 focus:bg-stone-200 focus:text-gray-800 transition-all"
                                required
                            />
                        </div>

                        {/* Subject Field */}
                        <div className="form-group relative">
                            <label
                                htmlFor="subject"
                                className="block text-gray-600  left-4 transition-all duration-300"
                            >
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full px-4 py-2 bg-stone-100 border border-gray-300  focus:outline-none focus:ring-0 focus:bg-stone-200 focus:text-gray-800 transition-all"
                                required
                            />
                        </div>
                       </div>

                        {/* Message Field */}
                        <div className="form-group relative">
                            <label
                                htmlFor="message"
                                className="block text-gray-600  left-4 transition-all duration-300"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-5 bg-stone-100 border border-gray-300  focus:outline-none focus:ring-0 focus:bg-stone-200 focus:text-gray-800 transition-all"
                                required
                            />
                        </div>

                        <button 
                        type="submit"
                        className="bg-orange-600 px-10 py-4 text-white font-semibold transition duration-300 shadow-animation">
              Submit Message
            </button>
                    </form>
                </div>

                {/* Location Map Column */}
                <div className=" mx-auto items-center justify-center mt-5">
    
    <iframe className='w-[500px] h-full'
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d14607.996596886385!2d90.36290812581547!3d23.747409749772967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sHouse%20No%3A%20137%2F24%2FA%2C%20Dhanmondi%2C%20Dhaka-1209%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1742632275655!5m2!1sen!2sbd"
       
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
    ></iframe>
    
</div>
            </div>
             {/* Tailwind Keyframe Styles */}
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
        background: rgba(0, 0, 0, 0.9); /* Solid dark panel */
        transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
        opacity: 0;
    }
    
    /* Left panel (rises from bottom) */
    .shadow-animation::before {
        left: 0;
        bottom: -100%;
    }
    
    /* Right panel (falls from top) */
    .shadow-animation::after {
        right: 0;
        top: -100%;
    }

    /* Hover Effect */
    .shadow-animation:hover::before {
        transform: translateY(-100%);
        opacity: 1;
    }

    .shadow-animation:hover::after {
        transform: translateY(100%);
        opacity: 1;
    }

    /* Panels Disappear After a While */
    .shadow-animation:hover::before,
    .shadow-animation:hover::after {
        animation: panelDisappear 1s ease-in-out forwards;
    }

    @keyframes panelDisappear {
        0% {
            opacity: 1;
        }
        70% {
            opacity: 1;
        }
        100% {
            opacity: 0;
            transform: translateY(0);
        }
    }
    `}
</style>
        </div>
    );
};

export default ContactForm;
