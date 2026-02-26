import { motion } from "framer-motion";
import { Croissant, Cake, Coffee } from "lucide-react";
import "../styles/FeaturesGrid.css";

const features = [
  { icon: <Croissant size={48} />, title: "Fresh Pastries", desc: "Baked every morning." },
  { icon: <Cake size={48} />, title: "Custom Cakes", desc: "Designed for every occasion." },
  { icon: <Coffee size={48} />, title: "Premium Coffee", desc: "Sourced from the best farms." },
];

const FeaturesGrid = () => {
  return (
    <section className="features">
      {features.map((item, i) => (
        <motion.div
          key={i}
          className="feature-card"
          whileHover={{ scale: 1.05 }}
        >
          <div className="icon">{item.icon}</div>
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </motion.div>
      ))}
    </section>
  );
};

export default FeaturesGrid;