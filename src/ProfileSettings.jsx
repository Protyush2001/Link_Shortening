



// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./ProfileSettings.css";

// const ProfileSettings = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     mobile: "",
//   });

//   const [showModal, setShowModal] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch user details on component mount
//   useEffect(() => {
//     const fetchUserDetails = async () => {
//       const token = localStorage.getItem("token");

//       if (token) {
//         try {
//           const response = await axios.get("http://localhost:5009/api/user", {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           });

//           setFormData({
//             name: response.data.name,
//             email: response.data.email,
//             mobile: response.data.mobile || "",
//           });
//           setLoading(false);
//         } catch (err) {
//           setError("Failed to fetch user details. Please try again later.");
//           setLoading(false);
//         }
//       } else {
//         setError("No token found. Please log in.");
//         setLoading(false);
//       }
//     };

//     fetchUserDetails();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSave = async () => {
//     const token = localStorage.getItem("token");

//     if (token) {
//       try {
//         const response = await axios.put(
//           "http://localhost:5009/api/user",
//           formData,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );
//         alert("Changes saved successfully!");
//       } catch (err) {
//         alert("Failed to save changes. Please try again.");
//       }
//     } else {
//       alert("No token found. Please log in.");
//     }
//   };

//   const handleDelete = () => {
//     setShowModal(true);
//   };

//   const handleConfirmDelete = async () => {
//     const token = localStorage.getItem("token");

//     if (token) {
//       try {
//         await axios.delete("http://localhost:5009/api/user", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         setShowModal(false);
//         alert("Account deleted successfully!");
//         localStorage.removeItem("token");
//         window.location.href = "/login"; // Redirect to login page
//       } catch (err) {
//         alert("Failed to delete account. Please try again.");
//       }
//     } else {
//       alert("No token found. Please log in.");
//     }
//   };

//   const handleCancelDelete = () => {
//     setShowModal(false);
//   };

//   if (loading) {
//     return <p>Loading user details...</p>;
//   }

//   if (error) {
//     return <p className="error-message">{error}</p>;
//   }

//   return (
//     <div className="profile-settings">
//       <div className="form-group">
//         <label htmlFor="name">Name</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="email">Email id</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="mobile">Mobile no.</label>
//         <input
//           type="text"
//           id="mobile"
//           name="mobile"
//           value={formData.mobile}
//           onChange={handleChange}
//         />
//       </div>
//       <div className="button-group">
//         <button className="save-button" onClick={handleSave}>
//           Save Changes
//         </button>
//         <button className="delete-button" onClick={handleDelete}>
//           Delete Account
//         </button>
//       </div>

//       {showModal && (
//         <div className="modal-overlay">
//           <div className="modal">
//             <button className="close-button" onClick={handleCancelDelete}>
//               &times;
//             </button>
//             <p>Are you sure, you want to delete the account?</p>
//             <div className="modal-buttons">
//               <button className="cancel-button" onClick={handleCancelDelete}>
//                 NO
//               </button>
//               <button className="confirm-button" onClick={handleConfirmDelete}>
//                 YES
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProfileSettings;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./ProfileSettings.css";

// const ProfileSettings = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     mobile: "",
//   });

//   const [showModal, setShowModal] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchUserDetails = async () => {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         setError("No token found. Please log in.");
//         setLoading(false);
//         return;
//       }
//       try {
//         const response = await axios.get("http://localhost:5009/api/user", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setFormData({
//           name: response.data.name || "",
//           email: response.data.email || "",
//           mobile: response.data.mobile || "",
//         });
//       } catch (err) {
//         setError("Failed to fetch user details. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchUserDetails();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSave = async () => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       alert("No token found. Please log in.");
//       return;
//     }
//     try {
//       await axios.put("http://localhost:5009/api/user", formData, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       alert("Changes saved successfully!");
//     } catch {
//       alert("Failed to save changes. Please try again.");
//     }
//   };

//   const handleDelete = () => setShowModal(true);
//   const handleCancelDelete = () => setShowModal(false);

//   const handleConfirmDelete = async () => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       alert("No token found. Please log in.");
//       return;
//     }
//     try {
//       await axios.delete("http://localhost:5009/api/user", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       localStorage.removeItem("token");
//       alert("Account deleted successfully!");
//       window.location.href = "/login";
//     } catch {
//       alert("Failed to delete account. Please try again.");
//     }
//   };

//   if (loading) return <p>Loading user details...</p>;
//   if (error) return <p className="error-message">{error}</p>;

//   return (
//     <div className="profile-settings">
//       <div className="form-group">
//         <label htmlFor="name">Name</label>
//         <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
//       </div>
//       <div className="form-group">
//         <label htmlFor="email">Email</label>
//         <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
//       </div>
//       <div className="form-group">
//         <label htmlFor="mobile">Mobile</label>
//         <input type="text" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} />
//       </div>
//       <div className="button-group">
//         <button className="save-button" onClick={handleSave}>Save Changes</button>
//         <button className="delete-button" onClick={handleDelete}>Delete Account</button>
//       </div>
//       {showModal && (
//         <div className="modal-overlay">
//           <div className="modal">
//             <button className="close-button" onClick={handleCancelDelete}>&times;</button>
//             <p>Are you sure you want to delete the account?</p>
//             <div className="modal-buttons">
//               <button className="cancel-button" onClick={handleCancelDelete}>NO</button>
//               <button className="confirm-button" onClick={handleConfirmDelete}>YES</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProfileSettings;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ProfileSettings.css";

const ProfileSettings = ({ onClearData }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch user details on component mount
  useEffect(() => {
    const fetchUserDetails = async () => {
      const token = localStorage.getItem("token");

      if (token) {
        try {
          const response = await axios.get("http://localhost:5009/api/user", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          setFormData({
            name: response.data.name,
            email: response.data.email,
            mobile: response.data.mobile || "",
          });
          setLoading(false);
        } catch (err) {
          setError("Failed to fetch user details. Please try again later.");
          setLoading(false);
        }
      } else {
        setError("No token found. Please log in.");
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        await axios.put(
          "http://localhost:5009/api/user",
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        alert("Changes saved successfully!");
      } catch (err) {
        alert("Failed to save changes. Please try again.");
      }
    } else {
      alert("No token found. Please log in.");
    }
  };

  const handleDelete = () => {
    setShowModal(true);
  };

  const handleConfirmDelete = async () => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        await axios.delete("http://localhost:5009/api/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        alert("Account deleted successfully!");
        onClearData(); // Call the parent function to clear all data
        localStorage.removeItem("token");
        window.location.href = "/login"; // Redirect to login page
      } catch (err) {
        alert("Failed to delete account. Please try again.");
      }
    } else {
      alert("No token found. Please log in.");
    }
    setShowModal(false);
  };

  const handleCancelDelete = () => {
    setShowModal(false);
  };

  if (loading) {
    return <p>Loading user details...</p>;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  return (
    <div className="profile-settings">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email id</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="mobile">Mobile no.</label>
        <input
          type="text"
          id="mobile"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
        />
      </div>
      <div className="button-group">
        <button className="save-button" onClick={handleSave}>
          Save Changes
        </button>
        <button className="delete-button" onClick={handleDelete}>
          Delete Account
        </button>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-button" onClick={handleCancelDelete}>
              &times;
            </button>
            <p>Are you sure, you want to delete the account?</p>
            <div className="modal-buttons">
              <button className="cancel-button" onClick={handleCancelDelete}>
                NO
              </button>
              <button className="confirm-button" onClick={handleConfirmDelete}>
                YES
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileSettings;
