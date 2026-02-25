import React from "react";
import { motion } from "framer-motion";
import "../styles/ProductMenu.css";

// Product images
import cupcakeImg from "../assets/products/cupcake.jpg";
import meatpieImg from "../assets/products/meatpie.jpg";
import chocolateImg from "../assets/products/chocolate-pie.jpg";
import tartImg from "../assets/products/chocolate-tart.jpg";
import donutImg from "../assets/products/donut.jpg";
import jennicksImg from "../assets/products/jennicks-pie.jpg";

const products = [
  { name: "Cupcake", price: "N500", desc: "Freshly baked with love", bestSeller: true, img: cupcakeImg },
  { name: "Jennicks Meatpie", price: "N800", desc: "Healthy & wholesome", img: meatpieImg },
  { name: "Chocolate Pie", price: "N300", desc: "Soft and sweet", img: chocolateImg },
  { name: "Chocolate Tart", price: "N700", desc: "Rich chocolate delight", bestSeller: true, img: tartImg },
  { name: "Jennicks Donut", price: "N500", desc: "Bursting with berries", img: donutImg },
  { name: "Jennicks Pie", price: "N900", desc: "Moist & flavorful", img: jennicksImg },
];

const ProductMenu = () => {
  return (
    <section className="product-menu" id="products">
      <h2>Our Products</h2>
      <div className="products-grid">
        {products.map((p, i) => (
          <motion.div
            className="product-card"
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
          >
            {p.bestSeller && <span className="badge">Best Seller</span>}
            <div className="product-img">
              <img src={p.img} alt={p.name} />
            </div>
            <h4>{p.name}</h4>
            <p>{p.desc}</p>
            <span className="price">{p.price}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductMenu;