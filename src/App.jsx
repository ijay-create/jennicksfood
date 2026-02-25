import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import FeaturesGrid from "./components/FeaturesGrid";
import ServiceHighlight from "./components/ServiceHighlight";
import Process from "./components/Process";
import ProductMenu from "./components/ProductMenu";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/root.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <FeaturesGrid />
      <ServiceHighlight />
      <Process />
      <ProductMenu />
      <Testimonials />
      <Blog />
      <Contact/>
      <Footer />
    </>
  );
}

export default App;