import React from "react";
import "../styles/Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { MessageCircle } from "lucide-react";

const Footer = () => (
  <footer className="footer">
    <div className="footer-top">
      <div className="logo">JennicksFood</div>

      <div className="socials">
        <a
          href="https://facebook.com/jennicksfood"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF size={28} />
        </a>

        <a
          href="https://www.instagram.com/jennicksfood"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={28} />
        </a>

        <a
          href="https://twitter.com/jennicksfood"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter size={28} />
        </a>

        <a
          href="https://wa.me/2348077870463?text=Hello%20JennicksFood!"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={28} />
        </a>
      </div>
    </div>

    <div className="footer-bottom">
      <p>© 2026 JennicksFood. All rights reserved.</p>

      <form className="newsletter">
        <input type="email" placeholder="Subscribe to Newsletter" />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  </footer>
);

export default Footer;