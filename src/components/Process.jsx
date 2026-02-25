import React from "react";
import "../styles/Process.css";
import { Coffee, Cake, Croissant } from "lucide-react";

const Process = () => {
  return (
    <section className="process">
      <h2>Our Process</h2>

      <div className="process-grid">
        <div className="process-card">
          <Coffee size={40} />
          <h3>Fresh Ingredients</h3>
          <p>We use only premium locally sourced ingredients.</p>
        </div>

        <div className="process-card">
          <Cake size={40} />
          <h3>Handcrafted</h3>
          <p>Every pastry is baked by skilled artisans.</p>
        </div>

        <div className="process-card">
          <Croissant size={40} />
          <h3>Daily Baked</h3>
          <p>Fresh breads and cakes baked every morning.</p>
        </div>
      </div>
    </section>
  );
};

export default Process;