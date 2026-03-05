import { motion } from "framer-motion";
import { Croissant, Cake, Coffee, UtensilsCrossed, Soup, Salad } from "lucide-react";
import "../styles/FeaturesGrid.css";

const features = [
  {
    icon: <Croissant size={48} />,
    title: "Fresh Pastries",
    desc: "Our pastries are baked fresh every morning using premium ingredients."
  },
  {
    icon: <Cake size={48} />,
    title: "Custom Cakes",
    desc: "Beautifully crafted cakes designed for birthdays, weddings, and celebrations."
  },
  {
    icon: <Coffee size={48} />,
    title: "Premium Coffee",
    desc: "Enjoy rich, aromatic coffee sourced from the best farms."
  },
  {
    icon: <UtensilsCrossed size={48} />,
    title: "Nigerian Rice Dishes",
    desc: "Delicious plates of Jollof rice, fried rice, and special party rice served hot."
  },
  {
    icon: <Soup size={48} />,
    title: "Fufu & Soup",
    desc: "Traditional Nigerian meals including fufu, egusi, ogbono, and vegetable soup."
  },
  {
    icon: <Salad size={48} />,
    title: "Local & Continental Meals",
    desc: "A variety of Nigerian and continental dishes prepared with authentic flavors."
  }
];

const FeaturesGrid = () => {
  return (
    <section className="features-grid">

      {features.map((item, i) => (
        <motion.div
          key={i}
          className="feature-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.15 }}
          viewport={{ once: true }}
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