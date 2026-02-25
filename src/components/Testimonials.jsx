import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Testimonials.css";
import testimonialBg from "../assets/images/testimonial-bg.jpg";
import avatar1 from "../assets/images/avatar1.jpg";
import avatar2 from "../assets/images/avatar2.jpg";
import avatar3 from "../assets/images/avatar3.jpg";

const testimonials = [
  {
    quote: "JennicksFood pastries are simply heavenly! Fresh, handcrafted, and delightful every time.",
    name: "Amaka Johnson",
    role: "Food Blogger",
    avatar: avatar1,
    stats: ["1K+ breads", "12+ years experience", "500+ happy customers"],
  },
  {
    quote: "I ordered a custom cake for my wedding, and it was stunning and delicious. Highly recommend!",
    name: "Tunde Ade",
    role: "Bridegroom",
    avatar: avatar2,
    stats: ["Custom cakes", "Satisfied couples", "Attention to detail"],
  },
  {
    quote: "The aroma of fresh bread every morning is unbeatable. Best artisan bakery in town!",
    name: "Chioma Nwosu",
    role: "Local Resident",
    avatar: avatar3,
    stats: ["Daily fresh production", "Family favorites", "Community love"],
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section
      className="testimonial-section"
      style={{ backgroundImage: `url(${testimonialBg})` }}
    >
      <div className="testimonial-wrapper">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="testimonial-card"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
          >
            <p className="quote">"{testimonials[current].quote}"</p>
            <div className="author">
              <img src={testimonials[current].avatar} alt={testimonials[current].name} />
              <div>
                <h4>{testimonials[current].name}</h4>
                <span>{testimonials[current].role}</span>
              </div>
            </div>
            <div className="stats">
              {testimonials[current].stats.map((s, idx) => (
                <span key={idx}>{s}</span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="testimonial-nav">
          <button onClick={prevTestimonial}>&larr;</button>
          <button onClick={nextTestimonial}>&rarr;</button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;