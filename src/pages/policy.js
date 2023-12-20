
    import React, { Component } from 'react'
    import { useState, useRef } from 'react';

import { Link } from 'react-router-dom'
import Navbar from '../navbar'
import '../style.css'
import Insurance from './../insurance';

const Policy = () => {
    const [showDiv, setShowDiv] = useState(false);
    const [showDivs, setShowDivs] = useState(false);
  const divRef = useRef(null);

  const handleClick = () => {
    setShowDiv(!showDiv);
  };
  const handleClicks = () => {
    setShowDivs(!showDivs);
  };

    return (
        <>
       <div>
       <Navbar/>
       </div>

        <div className="policy" style={{width:'100vw',height:'704px'}}>

        <div style={{width:700,marginLeft:400}}>
        <h1  style={{color:'white',paddingTop:40,marginLeft:-800}}>Automobile Insurance Policies</h1>
        <p style={{fontSize:20}}>An automobile insurance policy, also known as auto insurance or car insurance, is a 
        contract between an individual and an insurance company. It provides financial protection in the event of accidents,
         theft, or damage to the insured vehicle, as well as liability coverage for injuries or damages caused to others.</p>
        <p style={{paddingTop:100}} className="div1">Insurance</p>
        <button onClick={handleClick}>Click Me</button>
        {showDiv &&( <div  className={showDiv ? 'visible' : 'hidden'}>
        In India, there are three types of car insurance policies offered by 
        the general insurance companies i.e. third-party car insurance, comprehensive 
        insurance, and stand-alone insurance. You can choose a car insurance plan according 
        to your budget and need.
        
        </div>)}
          <div>
        <p>In India, there are three types of car insurance policies o
        ffered by the general insurance companies i.e. third-party car insurance, 
        comprehensive insurance, and stand-alone insurance. You can choose a car insurance plan according to your budget and need.</p>
        <button onClick={handleClicks}>Click Me</button>
      
      
      {showDivs &&(<div ref={divRef} className={showDivs ? 'visible' : 'hidden'} style={{marginTop:'-50'}}>
        In India, there are three types of car insurance policies offered by 
        the general insurance companies i.e. third-party car insurance, comprehensive 
        insurance, and stand-alone insurance. You can choose a car insurance plan according 
        to your budget and need.
          </div>
     ) }
          </div>
      </div>
    </div>
    </>
    )
  }
  export default Policy;