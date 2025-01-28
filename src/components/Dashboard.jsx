



import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import BarChart from "./BarChart";
import "./Dashboard.css";

const Dashboard = () => {
  const [analyticsData, setAnalyticsData] = useState([]);
  const [totalClicks, setTotalClicks] = useState(0);
  const [dateWiseClicks, setDateWiseClicks] = useState([]);
  const [clickDevices, setClickDevices] = useState([]);

  // Fetch data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem("analyticsData");
    if (savedData) {
      setAnalyticsData(JSON.parse(savedData));
    }
  }, []);

  // Calculate metrics whenever analyticsData changes
  useEffect(() => {
    if (analyticsData.length > 0) {
      const total = analyticsData.reduce((sum, item) => sum + item.clicks, 0);
      setTotalClicks(total);

      const dateClicksMap = analyticsData.reduce((acc, item) => {
        const date = new Date(item.timestamp).toLocaleDateString();
        acc[date] = (acc[date] || 0) + item.clicks;
        return acc;
      }, {});
      const dateWise = Object.keys(dateClicksMap).map((date) => ({
        label: date,
        value: dateClicksMap[date],
      }));
      setDateWiseClicks(dateWise);

      const deviceClicksMap = analyticsData.reduce((acc, item) => {
        acc[item.userDevice] = (acc[item.userDevice] || 0) + item.clicks;
        return acc;
      }, {});
      const deviceWise = Object.keys(deviceClicksMap).map((device) => ({
        label: device,
        value: deviceClicksMap[device],
      }));
      setClickDevices(deviceWise);
    }
  }, [analyticsData]);

  return (
    <div className="dashboard-container">
      <Navbar userName="Sujith" date={new Date().toDateString()} />
      <div className="main">
        <Sidebar />
        <div className="dashboard-content">
          <div className="total-clicks">
            <h2>Total Clicks</h2>
            <span className="total">{totalClicks}</span>
          </div>
          <div className="charts">
            <BarChart title="Date-wise Clicks" data={dateWiseClicks} />
            <BarChart title="Click Devices" data={clickDevices} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

