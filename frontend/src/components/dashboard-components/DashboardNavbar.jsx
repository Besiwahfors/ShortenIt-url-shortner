
import React from "react";
import { Link } from "react-router-dom";

const DashboardNavbar = ({ username }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="mt-2">Welcome, {username}!</p>
      <div className="mt-4">
        <Link
          to="/profile"
          className="block mt-2 text-blue-200 hover:text-white transition duration-300"
        >
          Profile
        </Link>
      </div>
    </div>
  );
};

export default DashboardNavbar;
