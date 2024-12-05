import React from "react";
import "./Footer.scss"; // Include the SCSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      {/* Platform Section */}
      <div className="footer-section">
        <h4>Platform</h4>
        <a href="#wholesale-commerce">Wholesale Commerce</a>
        <a href="#retail-commerce">Retail Commerce</a>
        <a href="#multistore-ecommerce">Multistore Ecommerce</a>
        <a href="#white-label-ecommerce">White Label Ecommerce</a>
        <a href="#company-stores">Company Stores</a>
        <a href="#catalog-service">Catalog as a Service</a>
        <a href="#integrations">Integrations</a>
      </div>

      {/* Industries Section */}
      <div className="footer-section">
        <h4>Industries</h4>
        <a href="#uniforms">Uniforms, Footwear & Gear</a>
        <a href="#medical-equipment">Medical Equipment</a>
        <a href="#promotional-products">Promotional Products</a>
        <a href="#fasteners">Fasteners</a>
      </div>

      {/* Resources Section */}
      <div className="footer-section">
        <h4>Resources</h4>
        <a href="#blog">Blog</a>
        <a href="#release-notes">Release Notes</a>
        <a href="#careers">Careers</a>
        <a href="#contact-us">Contact Us</a>
      </div>

      {/* Follow Us Section */}
      <div className="footer-section">
        <h4>Follow Us</h4>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          YouTube
        </a>
      </div>

      {/* Logo and Address Section */}
      <div className="footer-logo">
        <img src="https://sellerscommerce.com/wp-content/uploads/2023/04/logo104909.png" alt="SellersCommerce Logo" />
        <p>5600 N River Road, Suite 800</p>
        <p>Rosemont, IL 60018</p>
        <div>
          <a href="#about">About</a>
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
        </div>
        <p>© Copyright 2013-2024 SellersCommerce</p>
        <p>All Rights Reserved</p>
      </div>

    
    </footer>
  );
};

export default Footer;
