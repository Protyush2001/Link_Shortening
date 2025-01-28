

import React from "react";
import "./BarChart.css";

const BarChart = ({ title, data }) => {
  return (
    <div className="bar-chart">
      <h3>{title}</h3>
      {data && data.length > 0 ? (
        <ul>
          {data.map((item, index) => (
            <li key={index} className="chart-item">
              <span className="label">{item.label}</span>
              <div className="bar-container">
                <div
                  className="bar"
                  style={{ width: `${item.value}%` }}
                  title={`${item.value}`}
                ></div>
              </div>
              <span className="value">{item.value}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-data">No data available</p>
      )}
    </div>
  );
};

export default BarChart;
