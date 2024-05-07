import React from "react";
import "./navbar.css"

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo-box">
        <p className="logo">
          <span className="bra">Bra</span>Van
        </p>
      </div>
      <div className="links-nav">
        <ul className="nav-links">
          <li>Home</li>
          <li>Service</li>
          <li>About Us</li>
          <li>Faq</li>
        </ul>
      </div>
      <div className="button-box">
        <p>Login</p>
        <button className="contact-btn">Contact</button>
      </div>
    </div>
  );
}

export default Navbar;
