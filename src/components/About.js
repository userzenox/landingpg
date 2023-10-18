import React from "react";

import AboutBackgroundImage from "../online-images/cr2.jpg";


const About = () => {
  return (
    <div className="about-section-container">
    
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
        "Discover the Future of Learning"
        </h1>
        <p className="primary-text">
        Dive into a realm of virtual classrooms, where education knows no boundaries. Explore subjects, connect with instructors, and engage with a community of fellow learners—all from the comfort of your home. 
        </p>
        <p className="primary-text">
        Interactive Online Classes for Every Learner
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          
        </div>
      </div>
    </div>
  );
};

export default About;
