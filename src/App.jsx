import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Login from './components/Auth/Login.jsx';
import Signup from './components/Auth/Signup.jsx';
// import Dashboard from './components/Dashboard/Dashboard.jsx';
// import Profiles from './components/Dashboard/Profiles.jsx';
import About from './components/About/About.jsx';
 import Contact from './components/Contact/Contact.jsx';
import HelpUs from './components/HelpUs/HelpUs.jsx';
import Services from './components/Services/Services.jsx';
import RecordKeeping from './components/Data/RecordKeeping.jsx';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/*<Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profiles" element={<Profiles />} />*/}
          <Route path="/about" element={<About />} /> 
          <Route path="/Contact" element={<Contact />} /> 
          <Route path="/help" element={<HelpUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/RecordKeeping" element={<RecordKeeping />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;