import React from "react";
import { motion } from "framer-motion";
import "../styles/Blog.css";
import blog1 from "../assets/images/blog1.jpg";
import blog2 from "../assets/images/blog2.jpg";
import blog3 from "../assets/images/blog3.jpg";

const blogs = [
  { 
    img: blog1, 
    title: "5 Secrets to Perfect Donuts",
    desc: "Learn the essential techniques to bake a donuts  with a crispy crust and soft, airy interior every time.",
    link: "#"
  },
  { 
    img: blog2, 
    title: "Decorating meatpies Like a Pro",
    desc: "Step-by-step guide to frosting, piping, and styling pastries that wow your customers and guests.",
    link: "#"
  },
  { 
    img: blog3, 
    title: "Pastry Trends of 2026",
    desc: "Explore the upcoming pastry trends, flavor combinations, and presentation ideas that will dominate next year.",
    link: "#"
  },
];

const Blog = () => (
  <section className="blog-section">
    <h2>Latest Blog</h2>
    <div className="blog-grid">
      {blogs.map((b, i) => (
        <motion.div
          key={i}
          className="blog-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: i * 0.2 }}
        >
          <img src={b.img} alt={b.title} />
          <h4>{b.title}</h4>
          <p>{b.desc}</p>
          <a href={b.link} className="read-more">Read More →</a>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Blog;