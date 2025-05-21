

const Map = () => {
    return (
        <div>
                  <div className="w-full my-8">
        <h2 className="text-center text-white text-lg lg:text-2xl font-semibold mb-5">
          <span className="text-amber-500">Visit Us:</span> HOUSE 13, ALI PUR, UMEDPUR, SHIBCHAR, MADARIPUR-7933, BANGLADESH
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d141422.9778735239!2d90.11104121312465!3d23.273960048130405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755770056734bfd%3A0x7723f8ac7f61bf0!2sShibchar%20Madaripur!5e0!3m2!1sen!2sbd!4v1746724941525!5m2!1sen!2sbd"
          ></iframe>
        </div>
      </div>
        </div>
    );
};

export default Map;