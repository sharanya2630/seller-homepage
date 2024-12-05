import React, { useState } from "react";
import "./Header.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
              Platform
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="#overview">Overview</a>
              </li>
              <li>
                <a href="#wholesale">Wholesale Commerce</a>
              </li>
              <li>
                <a href="#retail">Retail Commerce</a>
              </li>
              <li>
                <a href="#multistore">Multistore Ecommerce</a>
              </li>
              <li>
                <a href="#white-label">White Label Ecommerce</a>
              </li>
              <li>
                <a href="#company-stores">Company Stores</a>
              </li>
              <li>
                <a href="#catalog">Catalog as a Service</a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#industries" className="nav-item">
              Industries
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="#overview">Overview</a>
              </li>
              <li>
                <a href="#wholesale">Wholesale Commerce</a>
              </li>
              <li>
                <a href="#retail">Retail Commerce</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#integrations" className="nav-item">
              Integrations
            </a>
          </li>
          <li className="dropdown">
            <a href="#industries" className="nav-item">
              Resources
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="#overview">Overview</a>
              </li>
              <li>
                <a href="#wholesale">Wholesale Commerce</a>
              </li>
              <li>
                <a href="#retail">Retail Commerce</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#contact" className="nav-item">
              Contact
            </a>
          </li>
          <li className="demo">
            <a className="request-demo">Request Demo</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
