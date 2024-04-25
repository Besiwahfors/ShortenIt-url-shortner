
import React from "react";

const DashboardAside = () => {
  return (
    <div className="border-t border-gray-700 mt-auto p-4">
      <a
        href="/logout"
        className="block text-sm text-red-200 hover:text-white transition duration-300"
      >
        Logout
      </a>
    </div>
  );
};

export default DashboardAside;
