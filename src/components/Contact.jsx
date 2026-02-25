import React, { useState } from "react";
import "../styles/Contact.css";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    const whatsappNumber = "2348077870463";

    const text = `
Hello, my name is ${formData.name}
Email: ${formData.email}
Message: ${formData.message}
    `;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    // Show success toast
    toast.success("Redirecting to WhatsApp...");

    // Open WhatsApp
    window.open(whatsappURL, "_blank", "noopener,noreferrer");

    // Reset form with animation delay
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setLoading(false);
    }, 1500);
  };

  return (
    <>
      <section className="contact" id="contact">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Get in Touch
        </motion.h2>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: loading ? 1 : 1.05 }}
            whileTap={{ scale: loading ? 1 : 0.95 }}
            className={`submit-btn ${loading ? "disabled" : ""}`}
          >
            {loading ? (
              <span className="spinner"></span>
            ) : (
              <>
                <FaWhatsapp /> Send via WhatsApp
              </>
            )}
          </motion.button>
        </motion.form>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/2348077870463"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
      >
        <FaWhatsapp />
      </a>
    </>
  );
};

export default Contact;