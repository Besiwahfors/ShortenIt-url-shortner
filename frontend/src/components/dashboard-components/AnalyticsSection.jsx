import React from "react";

const AnalyticsSection = ({ totalClicks, weeklyClickRate, monthlyClicks }) => {
  const formatPercentage = (value) => {
    return value ? `${value}%` : '0%';
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Analytics</h2>
      <div className="flex">
        <div className="bg-gray-200 rounded-lg shadow-lg p-6 mr-4 flex-1">
          <h3 className="text-lg font-semibold mb-2">Total Clicks</h3>
          <p className="text-3xl font-bold">{totalClicks || 0}</p>
        </div>
        <div className="bg-gray-200 rounded-lg shadow-lg p-6 mr-4 flex-1">
          <h3 className="text-lg font-semibold mb-2">Weekly Click Rate</h3>
          <p className="text-3xl font-bold">{formatPercentage(weeklyClickRate)}</p>
        </div>
        <div className="bg-gray-200 rounded-lg shadow-lg p-6 flex-1">
          <h3 className="text-lg font-semibold mb-2">Monthly Clicks</h3>
          <p className="text-3xl font-bold">{monthlyClicks || 0}</p>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsSection;
