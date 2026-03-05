import React from "react";
import { motion } from "framer-motion";
import "../styles/Process.css";
import { Coffee, Cake, Croissant, UtensilsCrossed, Soup, Drumstick } from "lucide-react";

const processItems = [
  {
    icon: <Croissant size={40} />,
    title: "Fresh Pastries",
    desc: "Croissants, buns, and sweet pastries baked fresh every morning."
  },
  {
    icon: <Cake size={40} />,
    title: "Custom Cakes",
    desc: "Beautiful cakes crafted for birthdays, weddings, and celebrations."
  },
  {
    icon: <Coffee size={40} />,
    title: "Premium Coffee",
    desc: "Rich coffee brewed from carefully selected beans."
  },
  {
    icon: <UtensilsCrossed size={40} />,
    title: "Rice Dishes",
    desc: "Enjoy delicious Nigerian classics like jollof rice and fried rice."
  },
  {
    icon: <Soup size={40} />,
    title: "Fufu & Soups",
    desc: "Traditional meals including fufu with egusi, ogbono, and vegetable soup."
  },
  {
    icon: <Drumstick size={40} />,
    title: "Grilled Delights",
    desc: "Tasty grilled chicken and meat served hot and flavorful."
  }
];

const Process = () => {
  return (
    <section className="process">
      <h2>Our Process</h2>

      <div className="process-grid">
        {processItems.map((item, index) => (
          <motion.div
            key={index}
            className="process-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {item.icon}
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Process;