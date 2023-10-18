import React from "react";
import { Outlet, NavLink } from "react-router-dom";

import BannerImage from "../online-images/cr4.jpg";


function Home() {
    
  
  return (

    <div className="home-container">
      
      <div className="home-banner-container">
       
        <div className="home-text-section">
          <h1 className="primary-heading">
             Unlock Your Potential
          </h1>
          <p className="primary-text">
          Join Our Virtual Classroom for Interactive Online Learning. Explore a New World of Knowledge through Online Classes. 
          </p>
          <div className="about-buttons-container">
          <button className="secondary-button">Explore More</button>
          
        </div>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
        
      </div>
      
 
    </div>

    
  );
};

export default Home;
