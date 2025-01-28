import React from "react";
import "./TotalClicks.css";

const TotalClicks = ({ total }) => {
  return (
    <div className="total-clicks">
      <h2>Total Clicks</h2>
      <span className="total-clicks-value">{total}</span>
    </div>
  );
};

export default TotalClicks;
