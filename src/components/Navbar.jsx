import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="logo">JennicksFood</div>

        {/* Desktop Menu */}
        <ul className="nav-links desktop">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#pages">Pages</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#shop" className="cta-btn">Shop Now</a></li>
        </ul>

        {/* Hamburger */}
        <div className="hamburger" onClick={() => setOpen(!open)}>
          {open ? <X size={30} /> : <Menu size={30} />}
        </div>
      </nav>

      {/* Mobile Overlay Menu */}
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <ul>
          <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setOpen(false)}>About Us</a></li>
          <li><a href="#pages" onClick={() => setOpen(false)}>Pages</a></li>
          <li><a href="#products" onClick={() => setOpen(false)}>Products</a></li>
          <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
          <li><a href="#shop" className="cta-btn">Shop Now</a></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;