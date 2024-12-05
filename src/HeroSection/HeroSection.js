import React from "react";
import { motion } from "framer-motion";
import "./HeroSection.scss";

const HeroSection = () => (
  <section className="hero">
    <motion.div
      className="hero-content"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <p>Put your B2B eCommerce on the fast track.Success without the need for an implementation army.</p>
      <button className="learn-more">Learn More</button>
    </motion.div>
    <motion.div
      className="hero-image"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <img
        src="https://www.sellerscommerce.com/wp-content/uploads/2023/09/Hero-Image.webp"
        alt="Hero Section Illustration"
      />
    </motion.div>
  </section>
);

export default HeroSection;
