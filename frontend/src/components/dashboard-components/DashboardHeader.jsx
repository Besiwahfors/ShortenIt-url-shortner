
import React from "react";
import { Link } from "react-router-dom";

const DashboardNavbar = ({ username }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Welcome, {username}!</h1>
      
      <div className="mt-4">
        
      </div>
    </div>
  );
};

export default DashboardNavbar;
