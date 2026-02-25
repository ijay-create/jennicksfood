import React from "react";
import "../styles/ServiceHighlight.css";
import { motion } from "framer-motion";

const services = [
  "Custom Cake Order",
  "Dessert Catering",
  "Online Ordering",
  "Baking Workshops",
];

const ServiceHighlight = () => (
  <section className="services-section">
    <h2>Delicious service that brings joy to every table</h2>
    <div className="service-cards">
       {services.map((s, i) => (
          <motion.div
               className="service-card"
               key={i}
               whileHover={{ scale: 1.05 }}
               whileInView={{ x: [50, 0], opacity: [0, 1] }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: i * 0.2 }}
            >
               <p>{s}</p>
           </motion.div>
        ))}
   </div>
  </section>
);

export default ServiceHighlight;