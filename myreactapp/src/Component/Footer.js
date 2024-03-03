import React from "react";
import { Link } from 'react-router-dom';
import "../Styles/Footer.css";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer-outerarea">
        <div className="footer-col">
          <div className="footer-row">
            <p className="footer-subtitle">About</p>
            <ul className="footer-list">
              <li>
                <Link to="/about" className="footer-li-item">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-li-item">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/team" className="footer-li-item">
                  Our Team
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-row">
            <p className="footer-subtitle">Help</p>
            <ul className="footer-list">
              <li>
                <Link to="/privacy-policy" className="footer-li-item">
                  Privacy Policy
                </Link>{" "}
              </li>
              <li>
                <Link to="/report" className="footer-li-item">
                  Report
                </Link>{" "}
              </li>
              <li>
                <Link to="/terms-and-conditions" className="footer-li-item">
                  Terms & Conditions
                </Link>{" "}
              </li>
              <li>
                <Link to="/faq" className="footer-li-item">
                  FAQ
                </Link>{" "}
              </li>
            </ul>
          </div>
          <div className="footer-row">
            <p className="footer-subtitle">Connect With us</p>
            <ul className="footer-li-icontainer">
              <li>
                <a
                  className="footer-li-icon"
                  href="https://www.facebook.com/kunal.markam.102"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 <FaFacebook></FaFacebook>
                </a>
              </li>
              <li>
                <a
                  className="footer-li-icon"
                  href="https://www.instagram.com/kunal.markam.15/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 
                </a>{" "}
              </li>
              <li>
                <a
                  className="footer-li-icon"
                  href="https://www.linkedin.com/in/kunal-markam-32a5981b3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 
                </a>{" "}
              </li>
              <li>
                <a
                  className="footer-li-icon"
                  href="mailto:kunal15markam@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p id="cpright">
        &copy; Copyright {new Date().getFullYear()}
        Hotel Booking System
      </p>
    </footer>
  );
};

export default Footer;