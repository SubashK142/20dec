import React, { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  const toggleSidePanel = () => {
    setIsSidePanelOpen(!isSidePanelOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <button  className="navbar-togle" onClick={toggleSidePanel}>
          <span className="navbar-toggle-icon" />
        </button>
        <Link className="navbar-logo" to="/home">Insurance Policy Co</Link>
      </div>


      <div className={`navbar-links ${isSidePanelOpen ? 'open' : ''}`}>
       
        
        <Link className="navbar-lik" to="/insurance">Apply Insurance</Link>
        <Link className="navbar-link" to="/policy">Explore Policy</Link>
        <Link  className="navbar-link" to="/claim">Claim Insurance</Link>
        <Link className="navbar-link" to="/claim">Renew</Link>
       
        <Link className="navbar-si" to="/signup">Profile</Link>
      </div>

      <div className={`side-panel ${isSidePanelOpen ? 'open' : ''}`}>
        <a style={{textDecoration:'none'}} className="side-panel-link" >Home</a>
        <a className="side-panel-link" href="/about">About</a>
        <a className="side-panel-link" href="/services">Services</a>
        <a className="side-panel-link" href="/contact">Contact</a>
        <button className="side-panel-but"><Link to='/login'>Logout</Link></button>
      </div>
    </nav>
  );
};

export default Navbar;


// import React, { useState } from 'react';
// import './App.css';
// import { Link, BrowserRouter as Router } from 'react-router-dom';

// const Navbar = () => {
//   const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

//   const toggleSidePanel = () => {
//     setIsSidePanelOpen(!isSidePanelOpen);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-brand">
//         <button className="navbar-toggle" onClick={toggleSidePanel}>
//           <span className="navbar-toggle-icon" />
//         </button>
//         <Link className="navbar-logo" to="/">Insurance Policy Co</Link>
//       </div>

//       <div className={`navbar-links ${isSidePanelOpen ? 'open' : ''}`}>
//         <Link className="navbar-link" to="/">Home</Link>
//         <Link className="navbar-link" to="/about">About</Link>
//         <Link className="navbar-link" to="/services">Services</Link>
//         <Link className="navbar-link" to="/contact">Contact</Link>
//         <a style={{ marginLeft: '32em' }} className="navbar-lo" href="/contact">Login</a>
//         <a className="navbar-si" href="/contact">Signup</a>
//       </div>

//       <div className={`side-panel ${isSidePanelOpen ? 'open' : ''}`}>
//         <Link className="side-panel-link" to="/">Home</Link>
//         <Link className="side-panel-link" to="/about">About</Link>
//         <Link className="side-panel-link" to="/services">Services</Link>
//         <Link className="side-panel-link" to="/contact">Contact</Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;