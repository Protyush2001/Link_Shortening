

// import React, { useState, useEffect } from "react";
// import "./Table.css";

// const Table = ({ userId, data, setData }) => {
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const [currentRow, setCurrentRow] = useState(null);

//   useEffect(() => {
//     const savedData = JSON.parse(localStorage.getItem(`linkData_${userId}`)) || [];
//     setData(savedData);
//   }, [userId, setData]);

//   useEffect(() => {
//     localStorage.setItem(`linkData_${userId}`, JSON.stringify(data));
//   }, [data, userId]);

//   const handleEditClick = (index) => {
//     setCurrentRow({ ...data[index], index });
//     setIsPopupOpen(true);
//   };

//   const handleClosePopup = () => {
//     setIsPopupOpen(false);
//     setCurrentRow(null);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setCurrentRow((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSave = () => {
//     if (currentRow !== null) {
//       setData((prevData) =>
//         prevData.map((row, index) =>
//           index === currentRow.index ? { ...currentRow, index: undefined } : row
//         )
//       );
//     }
//     handleClosePopup();
//   };

//   const handleDelete = (index) => {
//     setData((prevData) => prevData.filter((_, i) => i !== index));
//   };

//   const handleLinkClick = (index) => {
//     window.open(data[index].originalLink, "_blank");
    
//     setData((prevData) =>
//       prevData.map((row, i) =>
//         i === index ? { ...row, clicks: row.clicks + 1 } : row
//       )
//     );
//   };

//   const handleCopyLink = (shortLink) => {
//     navigator.clipboard.writeText(shortLink).then(() => {
//       alert("Short link copied to clipboard!");
//     });
//   };

//   const handleAddNewRow = () => {
//     const newRow = {
//       date: new Date().toLocaleDateString(),
//       timestamp: new Date().toLocaleString(),
//       originalLink: "https://example.com",
//       shortLink: `https://short.link/${Date.now()}`,
//       remarks: "New entry",
//       clicks: 0,
//       status: "Active",
//     };
//     setData((prevData) => [...prevData, newRow]);
//   };

//   return (
//     <div className="table-container">
//       <button className="add-button" onClick={handleAddNewRow}>
//         ➕ Add New Row
//       </button>
//       <table>
//         <thead>
//           <tr>
//             <th>Timestamp</th>
//             <th>Date</th>
//             <th>Original Link</th>
//             <th>Short Link</th>
//             <th>Remarks</th>
//             <th>Clicks</th>
//             <th>Status</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((row, index) => (
//             <tr key={index}>
//               <td>{row.timestamp || "N/A"}</td>
//               <td>{row.date || "N/A"}</td>
//               <td>
//                 <a
//                   href={row.originalLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="link"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     handleLinkClick(index);
//                   }}
//                 >
//                   {row.originalLink}
//                 </a>
//               </td>
//               <td>
//                 <a
//                   href={row.originalLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="link"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     handleLinkClick(index);
//                   }}
//                 >
//                   {row.shortLink}
//                 </a>
//                 <button
//                   className="copy-button"
//                   onClick={() => handleCopyLink(row.shortLink)}
//                   title="Copy to clipboard"
//                 >
//                   📋
//                 </button>
//               </td>
//               <td>{row.remarks || "No Remarks"}</td>
//               <td>{row.clicks}</td>
//               <td
//                 className={
//                   row.status === "Active" ? "status-active" : "status-inactive"
//                 }
//               >
//                 {row.status}
//               </td>
//               <td>
//                 <button
//                   className="edit-button"
//                   onClick={() => handleEditClick(index)}
//                 >
//                   ✏️
//                 </button>
//                 <button
//                   className="delete-button"
//                   onClick={() => handleDelete(index)}
//                 >
//                   🗑️
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Table;



import React, { useState, useEffect } from "react";
import "./Table.css";

const Table = ({ userId, data, setData }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentRow, setCurrentRow] = useState(null);

  // Load data from local storage when the component mounts
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem(`linkData_${userId}`)) || [];
    setData(savedData);
  }, [userId, setData]);

  // Save data to local storage when it changes
  useEffect(() => {
    localStorage.setItem(`linkData_${userId}`, JSON.stringify(data));
  }, [data, userId]);

  // Handle opening the edit popup
  const handleEditClick = (index) => {
    setCurrentRow({ ...data[index], index });
    setIsPopupOpen(true);
  };

  // Close the edit popup
  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setCurrentRow(null);
  };

  // Handle input change in the edit popup
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentRow((prev) => ({ ...prev, [name]: value }));
  };

  // Save edited row data
  const handleSave = () => {
    if (currentRow !== null) {
      setData((prevData) =>
        prevData.map((row, index) =>
          index === currentRow.index ? { ...currentRow } : row
        )
      );
    }
    handleClosePopup();
  };

  // Handle deleting a row
  const handleDelete = (index) => {
    setData((prevData) => prevData.filter((_, i) => i !== index));
  };

  // Handle clicking on the original or short link
  const handleLinkClick = (index) => {
    window.open(data[index].originalLink, "_blank");

    setData((prevData) =>
      prevData.map((row, i) =>
        i === index ? { ...row, clicks: row.clicks + 1 } : row
      )
    );
  };

  // Copy short link to clipboard
  const handleCopyLink = (shortLink) => {
    navigator.clipboard.writeText(shortLink).then(() => {
      alert("Short link copied to clipboard!");
    });
  };

  // Add a new row
  const handleAddNewRow = () => {
    const newRow = {
      date: new Date().toLocaleDateString(),
      timestamp: new Date().toLocaleString(),
      originalLink: "https://example.com",
      shortLink: `https://short.link/${Date.now()}`,
      remarks: "New entry",
      clicks: 0,
      status: "Active",
    };
    setData((prevData) => [...prevData, newRow]);
  };

  return (
    <div className="table-container">
      <button className="add-button" onClick={handleAddNewRow}>
        ➕ Add New Row
      </button>
      <table>
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>Date</th>
            <th>Original Link</th>
            <th>Short Link</th>
            <th>Remarks</th>
            <th>Clicks</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.timestamp || "N/A"}</td>
              <td>{row.date || "N/A"}</td>
              <td>
                <a
                  href={row.originalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(index);
                  }}
                >
                  {row.originalLink}
                </a>
              </td>
              <td>
                <a
                  href={row.originalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(index);
                  }}
                >
                  {row.shortLink}
                </a>
                <button
                  className="copy-button"
                  onClick={() => handleCopyLink(row.shortLink)}
                  title="Copy to clipboard"
                >
                  📋
                </button>
              </td>
              <td>{row.remarks || "No Remarks"}</td>
              <td>{row.clicks}</td>
              <td
                className={
                  row.status === "Active" ? "status-active" : "status-inactive"
                }
              >
                {row.status}
              </td>
              <td>
                <button
                  className="edit-button"
                  onClick={() => handleEditClick(index)}
                >
                  ✏️
                </button>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(index)}
                >
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isPopupOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-button" onClick={handleClosePopup}>
              &times;
            </button>
            <h3>Edit Row</h3>
            <div className="form-group">
              <label>Original Link:</label>
              <input
                type="text"
                name="originalLink"
                value={currentRow.originalLink}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Short Link:</label>
              <input
                type="text"
                name="shortLink"
                value={currentRow.shortLink}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Remarks:</label>
              <input
                type="text"
                name="remarks"
                value={currentRow.remarks}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Status:</label>
              <select
                name="status"
                value={currentRow.status}
                onChange={handleInputChange}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <button className="save-button" onClick={handleSave}>
              Save Changes
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;
