import React from "react";
import "../styles/ProductMenu.css";
import { motion } from "framer-motion";

import cupcakeImg from "../assets/products/cupcake.jpg";
import meatpieImg from "../assets/products/meatpie.jpg";
import abacha from "../assets/images/abacha.jpg";
import bole from "../assets/images/bole.jpg";
import chocolateImg from "../assets/products/chocolate-pie.jpg";
import tartImg from "../assets/products/chocolate-tart.jpg";
import egusi from "../assets/images/egusi-vegetable.jpg";
import jollof from "../assets/images/jollofrice-chicken.jpg";
import donutImg from "../assets/products/donut.jpg";
import jennicksImg from "../assets/products/jennicks-pie.jpg";
import catfish from "../assets/images/catfish.jpg";
import okra from "../assets/images/okra-soup.jpg";
import sharwama from "../assets/images/sharwama.jpg";

const products = [
  {
    img: cupcakeImg,
    name: "Cupcake",
    desc: "Soft vanilla cupcake with creamy frosting.",
    price: "$5",
    badge: "Popular",
  },
  {
    img: meatpieImg,
    name: "Meat Pie",
    desc: "Golden pastry filled with seasoned meat.",
    price: "$4",
    badge: "Hot",
  },
 {
    img: bole,
    name: "Bole",
    desc: "Grilled plantain served with sauce.",
    price: "$3",
    badge: "Best Seller",
  },
  {
    img: catfish,
    name: "Catfish",
    desc: "Fresh catfish prepared with spices.",
    price: "$8",
  },
  {
    img: chocolateImg,
    name: "Chocolate Pie",
    desc: "Soft and sweet chocolate pie.",
    price: "$3",
  },
  {
    img: tartImg,
    name: "Chocolate Tart",
    desc: "Rich chocolate filling in buttery crust.",
    price: "$7",
  },
    {
    img: okra,
    name: "Okra Soup",
    desc: "Fresh okra cooked with spices and meat.",
    price: "$4",
  },
  {
    img: sharwama,
    name: "Shawarma",
    desc: "Flatbread wrap filled with meat and sauce.",
    price: "$6",
  },
  {
    img: donutImg,
    name: "Donut",
    desc: "Sweet fried dough with glaze.",
    price: "$4",
  },
  {
    img: jennicksImg,
    name: "Jennicks Pie",
    desc: "Moist & flavorful Jennicks pie.",
    price: "$9",
    badge: "Best Seller",
  },
  {
    img: abacha,
    name: "Abacha",
    desc: "Traditional Nigerian fermented cassava salad.",
    price: "$4",
  },
  {
    img: egusi,
    name: "Egusi Soup",
    desc: "Rich melon seed soup with vegetables.",
    price: "$5",
  },
  {
    img: jollof,
    name: "Jollof Rice",
    desc: "Spicy one-pot rice dish with chicken.",
    price: "$7",
  },
];

const ProductMenu = () => {
  return (
    <section className="product-menu" id="products">
      <h2>Our Menu</h2>

      <div className="products-grid">
        {products.map((p, i) => (
          <motion.div
            key={i}
            className="product-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ scale: 1.05 }}
          >
            {p.badge && <span className="badge">{p.badge}</span>}

            <div className="product-img">
              <img src={p.img} alt={p.name} loading="lazy" />
            </div>

            <h4>{p.name}</h4>
            <p>{p.desc}</p>

            <span className="price">{p.price}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductMenu;