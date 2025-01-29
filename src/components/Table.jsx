


// import React, { useState, useEffect } from "react";
// import "./Table.css";

// const Table = ({ userId, data, setData }) => {
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const [currentRow, setCurrentRow] = useState(null);

//   useEffect(() => {
//     // Load links for the specific user
//     const savedData = JSON.parse(localStorage.getItem(`linkData_${userId}`)) || [];
//     setData(savedData);
//   }, [userId, setData]);

//   useEffect(() => {
//     // Save links for the specific user
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

//   const handleLinkClick = (index, type) => {
//     const targetLink = type === "original" ? data[index].originalLink : data[index].shortLink;
//     window.open(targetLink, "_blank"); // Open the link in a new tab
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
//                     handleLinkClick(index, "original");
//                   }}
//                 >
//                   {row.originalLink}
//                 </a>
//               </td>
//               <td>
//                 <a
//                   href="#"
//                   className="link"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     handleLinkClick(index, "short");
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

//       {isPopupOpen && (
//         <div className="popup">
//           <div className="popup-content">
//             <h3>Edit Row</h3>
//             <label>
//               Date:
//               <input
//                 type="text"
//                 name="date"
//                 value={currentRow?.date || ""}
//                 onChange={handleInputChange}
//               />
//             </label>
//             <label>
//               Original Link:
//               <input
//                 type="text"
//                 name="originalLink"
//                 value={currentRow?.originalLink || ""}
//                 onChange={handleInputChange}
//               />
//             </label>
//             <label>
//               Short Link:
//               <input
//                 type="text"
//                 name="shortLink"
//                 value={currentRow?.shortLink || ""}
//                 onChange={handleInputChange}
//               />
//             </label>
//             <label>
//               Remarks:
//               <input
//                 type="text"
//                 name="remarks"
//                 value={currentRow?.remarks || ""}
//                 onChange={handleInputChange}
//               />
//             </label>
//             <label>
//               Status:
//               <select
//                 name="status"
//                 value={currentRow?.status || ""}
//                 onChange={handleInputChange}
//               >
//                 <option value="Active">Active</option>
//                 <option value="Inactive">Inactive</option>
//               </select>
//             </label>
//             <button className="save-button" onClick={handleSave}>
//               Save
//             </button>
//             <button className="close-button" onClick={handleClosePopup}>
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Table;

// import React, { useState, useEffect } from "react";
// import "./Table.css";

// const Table = ({ userId, data, setData }) => {
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const [currentRow, setCurrentRow] = useState(null);

//   useEffect(() => {
//     // Load links for the specific user
//     const savedData = JSON.parse(localStorage.getItem(`linkData_${userId}`)) || [];
//     setData(savedData);
//   }, [userId, setData]);

//   useEffect(() => {
//     // Save links for the specific user
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

//   const handleLinkClick = (index, type) => {
//     const targetLink =
//       type === "original" ? data[index].originalLink : data[index].originalLink;

//     // Open the target link in a new tab
//     window.open(targetLink, "_blank");

//     if (type === "short") {
//       // Increment the click count only for short links
//       setData((prevData) =>
//         prevData.map((row, i) =>
//           i === index ? { ...row, clicks: row.clicks + 1 } : row
//         )
//       );
//     }
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
//                     handleLinkClick(index, "original");
//                   }}
//                 >
//                   {row.originalLink}
//                 </a>
//               </td>
//               <td>
//                 <a
//                   href={row.originalLink} // Open original link when clicking the short link
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="link"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     handleLinkClick(index, "short");
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

//       {isPopupOpen && (
//         <div className="popup">
//           <div className="popup-content">
//             <h3>Edit Row</h3>
//             <label>
//               Date:
//               <input
//                 type="text"
//                 name="date"
//                 value={currentRow?.date || ""}
//                 onChange={handleInputChange}
//               />
//             </label>
//             <label>
//               Original Link:
//               <input
//                 type="text"
//                 name="originalLink"
//                 value={currentRow?.originalLink || ""}
//                 onChange={handleInputChange}
//               />
//             </label>
//             <label>
//               Short Link:
//               <input
//                 type="text"
//                 name="shortLink"
//                 value={currentRow?.shortLink || ""}
//                 onChange={handleInputChange}
//               />
//             </label>
//             <label>
//               Remarks:
//               <input
//                 type="text"
//                 name="remarks"
//                 value={currentRow?.remarks || ""}
//                 onChange={handleInputChange}
//               />
//             </label>
//             <label>
//               Status:
//               <select
//                 name="status"
//                 value={currentRow?.status || ""}
//                 onChange={handleInputChange}
//               >
//                 <option value="Active">Active</option>
//                 <option value="Inactive">Inactive</option>
//               </select>
//             </label>
//             <button className="save-button" onClick={handleSave}>
//               Save
//             </button>
//             <button className="close-button" onClick={handleClosePopup}>
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Table;

import React, { useState, useEffect } from "react";
import "./Table.css";

const Table = ({ userId, data, setData }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentRow, setCurrentRow] = useState(null);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem(`linkData_${userId}`)) || [];
    setData(savedData);
  }, [userId, setData]);

  useEffect(() => {
    localStorage.setItem(`linkData_${userId}`, JSON.stringify(data));
  }, [data, userId]);

  const handleEditClick = (index) => {
    setCurrentRow({ ...data[index], index });
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setCurrentRow(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentRow((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (currentRow !== null) {
      setData((prevData) =>
        prevData.map((row, index) =>
          index === currentRow.index ? { ...currentRow, index: undefined } : row
        )
      );
    }
    handleClosePopup();
  };

  const handleDelete = (index) => {
    setData((prevData) => prevData.filter((_, i) => i !== index));
  };

  const handleLinkClick = (index) => {
    window.open(data[index].originalLink, "_blank");
    
    setData((prevData) =>
      prevData.map((row, i) =>
        i === index ? { ...row, clicks: row.clicks + 1 } : row
      )
    );
  };

  const handleCopyLink = (shortLink) => {
    navigator.clipboard.writeText(shortLink).then(() => {
      alert("Short link copied to clipboard!");
    });
  };

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
    </div>
  );
};

export default Table;
