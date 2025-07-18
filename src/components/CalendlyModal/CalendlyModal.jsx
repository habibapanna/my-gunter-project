import { useEffect, useState } from "react";
import { InlineWidget } from "react-calendly";

const CalendlyModal = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  // Optional: Disable body scroll when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showModal]);

  return (
    <div>
      <button
        onClick={toggleModal}
        className="text-white bg-purple-600 text-xs md:text-sm px-4 md:px-8 py-2 md:py-3 rounded-full font-semibold transition duration-300 cursor-pointer flex items-center gap-2 hover:scale-95 hover:bg-purple-500"
      >
        BOOK A CALL
      </button>

      {showModal && (
        <div className="fixed z-50 bg-black bg-opacity-60 flex items-center justify-center px-4 md:px-0">
          <div className="absolute w-[300px] md:w-[400px] max-w-xl h-[80vh] bg-white dark:bg-white shadow-lg overflow-hidden top-0">
            {/* Close Button */}
            <button
              onClick={toggleModal}
              className="absolute top-3 right-4 text-gray-600 dark:text-gray-300 hover:text-red-500 text-3xl font-bold z-10 cursor-pointer"
            >
              &times;
            </button>

            {/* Calendly iframe */}
            <div className="w-full h-full overflow-y-auto pt-8">
              <InlineWidget
                url="https://calendly.com/ashiq5770411/30min"
                styles={{ height: "100%", width: "100%" }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendlyModal;
