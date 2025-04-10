import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2"; // Import SweetAlert2

const ScheduleModal = ({ onClose }) => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment Scheduled:", { date, time });

    // Show SweetAlert success message
    Swal.fire({
      title: "Appointment Scheduled!",
      text: "Your appointment has been successfully scheduled.",
      icon: "success",
      confirmButtonText: "OK",
    });

    // Close the modal
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-purple-600 shadow-lg p-6 w-[90%] max-w-md rounded-lg">
        <h2 className="text-xl text-white font-semibold mb-4 text-center mt-56">Schedule Appointment</h2>
        <form onSubmit={handleSubmit} className="space-y-4 text-white text-left">
          <div>
            <label className="block text-sm font-medium mb-1">Select Date:</label>
            <DatePicker
              selected={date}
              onChange={(date) => setDate(date)}
              minDate={new Date()}
              className="w-full p-2 border rounded"
              dateFormat="MMMM d, yyyy"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Select Time:</label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full p-2 border rounded text-3xl"
              required
            />
          </div>
          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-purple-600 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-amber-500 text-white font-bold rounded hover:bg-amber-600"
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ScheduleModal;
