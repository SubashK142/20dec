

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from './login';
import Signup from './signup';
import ColorSchemesExample from "./navbar";
import Home from "./pages/home";
import Insurance from "./insurance";
import Policy from "./pages/policy";
import Claim from "./pages/claim";
import YourComponent from "./container";

function App() {
  return (
  
    
    
    // <ColorSchemesExample/>
    <Router>
      <Routes>
      <Route path="/" element={<YourComponent />} />
     
     
      <Route path="/home" element={<Home />} />
      <Route path="/insurance" element={<Insurance />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="/claim" element={<Claim />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        

      </Routes>
    </Router>
    
  );
}

export default App;

