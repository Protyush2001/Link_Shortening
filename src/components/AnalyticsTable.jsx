



import React from "react";
import "./AnalyticsTable.css";

const AnalyticsTable = ({ data }) => {
  const handleShortLinkClick = (originalLink) => {
    if (originalLink) {
      window.open(originalLink, "_blank", "noopener noreferrer");
    } else {
      alert("Original link is unavailable.");
    }
  };

  return (
    <div className="analytics-table-container">
      <table className="analytics-table">
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>Original Link</th>
            <th>Short Link</th>
            <th>IP Address</th>
            <th>User Device</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="5">No data available</td>
            </tr>
          ) : (
            data.map((row, index) => (
              <tr key={index}>
                <td>{row.timestamp || "N/A"}</td>
                <td>{row.originalLink || "N/A"}</td>
                <td>
                  <button
                    className="short-link-button"
                    onClick={() => handleShortLinkClick(row.originalLink)}
                  >
                    {row.shortLink || "N/A"}
                  </button>
                </td>
                <td>{row.ipAddress || "N/A"}</td>
                <td>{row.userDevice || "N/A"}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AnalyticsTable;
