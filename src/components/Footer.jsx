// Footer.jsx
// Displays the site-wide footer including quick links, about text, and logo.

import React from "react";
import "./Footer.css";
import Ribbon from "./Ribbon";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer-section">
      {/* Ribbon component */}
      <Ribbon />

      <div className="container py-5">
        <div className="row">
          {/* Quick Links section */}
          <div className="col-md-4 mb-4">
            <h5 className="footer-title">Quick links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Refund Policy</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Contact Information</a>
              </li>
              <li>
                <a href="#">Search</a>
              </li>
            </ul>
          </div>

          {/* About Us section */}
          <div className="col-md-4 mb-4">
            <h5 className="footer-title">About Us</h5>
            <p className="footer-text">
              Blending dermatological expertise with targeted skincare
              innovation — pHformula delivers results-driven formulas for real
              skin concerns. Rooted in science, refined by experience, and
              always cruelty-free.
            </p>
          </div>

          {/* Logo section aligned right */}
          <div className="col-md-4 text-md-end text-center">
            <Link className="navbar-brand" to="/">
              <img
                src="/images/pH-logo.png"
                alt="Logo"
                style={{ height: "35px" }}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
