// import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Login from "./components/Login.jsx"
// import Signup from './components/Signup.jsx'
// import Dashboard from './components/Dashboard.jsx';
// import Links from './Links.jsx'
// import Analytics from './Analytics.jsx';
// import Settings from './Settings.jsx';


// const App = () => {

  
//   return (
//    <Router>
//     <Routes>
//       <Route path="/" element={<Signup/>}/>
//       <Route path="/login" element={<Login/>}/>
//       <Route path="/dashboard" element={<Dashboard/>}/>
//       <Route path="/links" element={<Links/>}/>
//       <Route path="/dashboard" element={<Dashboard/>}/>
//       <Route path="/analytics" element={<Analytics/>}/>
//       <Route path="/settings" element={<Settings/>}/>


//     </Routes>
//    </Router>
//   )
// }

// export default App


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from "./components/Login.jsx";
import Signup from './components/Signup.jsx';
import Dashboard from './components/Dashboard.jsx';
import Links from './Links.jsx';
import Analytics from './Analytics.jsx';
import Settings from './Settings.jsx';

const App = () => {
  const clearUserData = () => {
    localStorage.removeItem('links');
    localStorage.removeItem('analyticsData');
    localStorage.removeItem('token');
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup clearUserData={clearUserData} />} />
        <Route path="/login" element={<Login clearUserData={clearUserData} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/links" element={<Links />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
};

export default App;

