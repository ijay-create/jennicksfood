import React from "react";
import "../styles/About.css";
import aboutImg from "../assets/images/about.jpg"; // replace with your image
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        {/* Image */}
        <motion.div 
          className="about-image"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={aboutImg} alt="JennicksFood artisan bakery" loading="lazy"/>
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2>About JennicksFood</h2>
          <p>
              At Jennicksfood, we bring flavor, freshness, and happiness together in every bite.
              We are a proudly Nigerian food and pastry outlet dedicated to serving delicious, freshly prepared meals and handcrafted 
              pastries made with quality ingredients and genuine passion.
          </p>
          <p>
               From hot, satisfying local dishes to soft breads, flaky meat pies, creamy cakes, chin chin, doughnuts, and irresistible desserts — everything is made fresh daily to give you that unforgettable homemade taste.
               Whether you’re stopping by for breakfast, grabbing lunch on the go, ordering small chops for an event, or satisfying your sweet cravings, we’re here to serve you excellence — always fresh, always tasty.
               What Makes Us Special:
                 *Freshly baked pastries daily
                 *Authentic Nigerian meals
                 *Affordable luxury treats
                 *Clean, cozy, and welcoming environment.
          </p>
          <a href="#products" className="about-btn">Shop Now</a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;