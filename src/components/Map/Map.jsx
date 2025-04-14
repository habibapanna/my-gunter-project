

const Map = () => {
    return (
        <div>
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

export default Map;