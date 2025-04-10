import React from "react";
import { ImSpinner, ImSpinner3 } from "react-icons/im";

const Spinner = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <ImSpinner3 className="animate-spin text-purple-600 text-6xl" />
        </div>
    );
};

export default Spinner;
