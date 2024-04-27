import React, { useState, useEffect } from "react";
import axios from "axios";

const AnalyticsSection = () => {
  const [totalClicks, setTotalClicks] = useState(0);
  const [weeklyClickRate, setWeeklyClickRate] = useState(0);
  const [monthlyClicks, setMonthlyClicks] = useState(0);

  useEffect(() => {
    fetchLinkClicks();
  }, []);

  const fetchLinkClicks = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:4000/api/link/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { totalClicks, weeklyClickRate, monthlyClicks } = res.data;
      setTotalClicks(totalClicks);
      setWeeklyClickRate(weeklyClickRate);
      setMonthlyClicks(monthlyClicks);
    } catch (error) {
      console.error("Error fetching link clicks:", error);
    }
  };

  const formatPercentage = (value) => {
    return value ? `${value}%` : "0%";
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Analytics</h2>
      <div className="flex">
        <div className="bg-gray-200 rounded-lg shadow-lg p-6 mr-4 flex-1">
          <h3 className="text-lg font-semibold mb-2">Total Clicks</h3>
          <p className="text-3xl font-bold">{totalClicks}</p>
        </div>
        <div className="bg-gray-200 rounded-lg shadow-lg p-6 mr-4 flex-1">
          <h3 className="text-lg font-semibold mb-2">Weekly Click Rate</h3>
          <p className="text-3xl font-bold">{formatPercentage(weeklyClickRate)}</p>
        </div>
        <div className="bg-gray-200 rounded-lg shadow-lg p-6 flex-1">
          <h3 className="text-lg font-semibold mb-2">Monthly Clicks</h3>
          <p className="text-3xl font-bold">{monthlyClicks}</p>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsSection;
