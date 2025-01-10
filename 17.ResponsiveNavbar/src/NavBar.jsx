import React from "react";
import { useState } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // alert(menuOpen ? "Open" : "Closed");
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <a href="/">React ASMR</a>
      </div>
      <ul className="links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Pricing</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Reviews</a>
        </li>
        <li>
          <a href="/">Gallery</a>
        </li>
      </ul>
      <div className="actions">
        <a href="/" className="btn btn-outline">
          Login
        </a>
        <button className="menu-btn" onClick={toggleMenu}>
          ≡
        </button>
      </div>

      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <div className="close-box">
          <button className="close-btn" onClick={toggleMenu}>
            ✕
          </button>
        </div>
        <ul className="mobile-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Pricing</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Reviews</a>
          </li>
          <li>
            <a href="/">Gallery</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
