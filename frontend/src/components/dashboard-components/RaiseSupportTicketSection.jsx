
import React from "react";
import { Link } from "react-router-dom";
import { FaTicketAlt } from "react-icons/fa";

const RaiseSupportTicketSection = () => {
  return (
    <div className="text-center w-52 ">
      <Link
        to="/raise-ticket"
        className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center space-x-2"
      >
        <FaTicketAlt />
        <span>Raise Support Ticket</span>
      </Link>
    </div>
  );
};

export default RaiseSupportTicketSection;
