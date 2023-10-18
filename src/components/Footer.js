import React from "react";
import Logo from "../Assets/Logo.svg";


const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="primary-heading">
          <p>Contact Us</p>
        </div>
      
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Qualtiy</span>
          <span>Help</span>
          <span>Share</span>
          <span>Carrers</span>
          
          <span>Work</span>
        </div>
        <div className="footer-section-columns">
          
        <span>9576349612</span>
          <span>9557845612</span>
          <span>piyush@gmail.com</span>
          <span>contact@classes.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
