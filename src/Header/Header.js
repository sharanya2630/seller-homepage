
import React, { useState,useEffect } from "react";

import "./Header.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = "auto"; 
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="navbar">
      <nav className="navbar-container">
        <div className="logo">
          <img
            src="https://sellerscommerce.com/wp-content/uploads/2023/04/logo104909.png"
            alt="SellersCommerce Logo"
          />
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li className="dropdown">
            <a href="#platform" className="nav-item">
              Platform  <i class="fa-solid fa-chevron-down"></i>
            </a>
            <ul className="dropdown-menu">
            
              <li>
                <a href="#wholesale">Wholesale Commerce</a>
              </li>
              <li>
                <a href="#retail">Retail Commerce</a>
              </li>
              <li>
                <a href="#overview">Multistore Ecommerce</a>
              </li>
              <li>
                <a href="#overview">White Label Ecommerce</a>
              </li>
              <li>
                <a href="#overview">Company Stores</a>
              </li>
              <li>
                <a href="#overview">Catalog as a Service</a>
              </li>
              <li>
                <a href="#overview">Integrations</a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#industries" className="nav-item">
              Industries<i class="fa-solid fa-chevron-down"></i>
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="#overview">Uniforms, Footwear & Gears</a>
              </li>
              <li>
                <a href="#wholesale">Medical Equipment</a>
              </li>
              <li>
                <a href="#overview">Promotional Products</a>
              </li>
              <li>
                <a href="#overview">Fasteners</a>
              </li>
            </ul>
          </li>
          <li >
            <a href="#industries" className="nav-item">
              Integrations
            </a>
           
          </li>
          <li className="dropdown">
            <a href="#industries" className="nav-item">
              Resources<i class="fa-solid fa-chevron-down"></i>
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="#overview">Blog</a>
              </li>
              <li>
                <a href="#wholesale">Release Notes</a>
              </li>
              <li>
                <a href="#overview">Careers</a>
              </li>
              <li>
                <a href="#overview">Contact us</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#contact" className="nav-item contact-link">
              Contact
            </a>
          </li>
          <li className="demo">
            <button className="request-demo">Request Demo</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
