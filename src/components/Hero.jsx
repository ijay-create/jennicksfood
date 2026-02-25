import React, { useState } from "react";
import "../styles/Hero.css";
import heroVideo from "../assets/videos/hero.mp4"; // <-- your local video
import { Play, X } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 50]);

  const handleVideoOpen = () => setIsVideoOpen(true);
  const handleVideoClose = () => setIsVideoOpen(false);

  return (
    <section className="hero" id="home">
      {/* Video Background */}
      <motion.video
        className="hero-bg"
        style={{ y: y1 }}
        autoPlay
        muted
        loop
        playsInline
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <source src={heroVideo} type="video/mp4" />
      </motion.video>

      {/* Dark Overlay */}
      <div className="hero-overlay"></div>

      {/* Hero Content */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        <h1>Welcome to JennicksFood</h1>
        <p>
          Proudly Nigerian food and pastry outlet dedicated <br />
          to serving delicious, freshly prepared meals and <br />
          handcrafted pastries made with quality ingredients and genuine passion.
        </p>

        <div className="hero-buttons">
          <motion.button
            className="shop-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Shop Now
          </motion.button>

          <motion.button
            className="watch-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleVideoOpen}
          >
            <Play size={20} /> Watch Video
          </motion.button>
        </div>
      </motion.div>

      {/* Video Modal */}
        {isVideoOpen && (
           <div className="video-modal" onClick={handleVideoClose}>
               <div className="video-content" onClick={(e) => e.stopPropagation()}>
                  <button className="close-btn" onClick={handleVideoClose}>
                    <X size={24} />
                  </button>
      <iframe
        src="https://www.youtube.com/embed/TOGeKVcz9_M?autoplay=1"
        title="JennicksFood Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  </div>
)}
    </section>
  );
};

export default Hero;