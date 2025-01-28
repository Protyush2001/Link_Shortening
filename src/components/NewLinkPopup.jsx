



import React, { useState } from "react";
import "./NewLinkPopup.css";

const NewLinkPopup = ({ onClose, setData }) => {
  const [formData, setFormData] = useState({
    originalLink: "",
    remarks: "",
    status: "Active",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const currentDate = new Date();
//     const formattedDate = currentDate.toLocaleString("en-US", {
//       month: "short",
//       day: "numeric",
//       year: "numeric",
//       hour: "2-digit",
//       minute: "2-digit",
//     });

//     const newLink = {
//       date: formattedDate,
//       originalLink: formData.originalLink,
//       shortLink: `https://short.ly/${Math.random().toString(36).substring(2, 8)}`,
//       remarks: formData.remarks,
//       clicks: 0,
//       status: formData.status,
//     };

//     // Update state and save to local storage
//     setData((prevData) => {
//       const updatedData = [newLink, ...prevData];
//       localStorage.setItem("links", JSON.stringify(updatedData)); // Save to local storage
//       return updatedData;
//     });

//     onClose();
//   };

// const handleSubmit = (e) => {
//     e.preventDefault();
  
//     const currentDate = new Date();
  
//     // Formatted date for 'date' field
//     const formattedDate = currentDate.toLocaleDateString("en-US", {
//       month: "short",
//       day: "numeric",
//       year: "numeric",
//     });
  
//     // Full timestamp for 'timestamp' field
//     const formattedTimestamp = currentDate.toLocaleString("en-US", {
//       month: "short",
//       day: "numeric",
//       year: "numeric",
//       hour: "2-digit",
//       minute: "2-digit",
//       second: "2-digit",
//     });
  
//     const newLink = {
//       date: formattedDate, // Human-readable date
//       timestamp: formattedTimestamp, // Exact creation time
//       originalLink: formData.originalLink,
//       shortLink: `https://short.ly/${Math.random().toString(36).substring(2, 8)}`,
//       remarks: formData.remarks,
//       clicks: 0,
//       status: formData.status,
//     };
  
//     // Update state and save to local storage
//     setData((prevData) => {
//       const updatedData = [newLink, ...prevData];
//       localStorage.setItem("links", JSON.stringify(updatedData)); // Save to local storage
//       return updatedData;
//     });
  
//     onClose();
//   };


const handleSubmit = (e) => {
    e.preventDefault();
  
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    const formattedTimestamp = currentDate.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  
    // Detect user device
    const userAgent = navigator.userAgent.toLowerCase();
    const userDevice = /mobile/i.test(userAgent)
      ? "Mobile"
      : /tablet/i.test(userAgent)
      ? "Tablet"
      : /iPad|Android|Touch/.test(userAgent)
      ? "Tablet"
      : "Desktop";
  
    const newLink = {
      date: formattedDate,
      timestamp: formattedTimestamp,
      originalLink: formData.originalLink,
      shortLink: `https://short.ly/${Math.random().toString(36).substring(2, 8)}`,
      ipAddress: "192.168.1.1", // Use a placeholder for now or fetch dynamically
      userDevice: userDevice,
      remarks: formData.remarks,
      clicks: 0,
      status: formData.status,
    };
  
    // Update both `links` and `analyticsData` in local storage
    setData((prevData) => {
      const updatedData = [newLink, ...prevData];
      localStorage.setItem("links", JSON.stringify(updatedData));
      localStorage.setItem("analyticsData", JSON.stringify(updatedData)); // Also update analyticsData
      return updatedData;
    });
  
    onClose();
  };
  
  
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div className="popup-header">
          <h2>New Link</h2>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <form className="popup-form" onSubmit={handleSubmit}>
          <label>
            Destination Url <span className="required">*</span>
          </label>
          <input
            type="text"
            name="originalLink"
            value={formData.originalLink}
            onChange={handleChange}
            placeholder="https://web.whatsapp.com/"
            required
          />

          <label>
            Remarks <span className="required">*</span>
          </label>
          <textarea
            name="remarks"
            value={formData.remarks}
            onChange={handleChange}
            placeholder="Add remarks"
            required
          ></textarea>

          <div className="popup-actions">
            <button
              type="button"
              className="clear-button"
              onClick={() =>
                setFormData({ originalLink: "", remarks: "", status: "Active" })
              }
            >
              Clear
            </button>
            <button type="submit" className="create-button">
              Create new
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewLinkPopup;