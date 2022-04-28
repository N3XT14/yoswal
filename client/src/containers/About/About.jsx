import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";

import "./About.scss";

const About = () => {
  const [about, setAbouts] = useState([]);

  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`https://n3xt.herokuapp.com/aboutdata/`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setAbouts(records);
    }

    getRecords();
    return;
  }, [about.length]);

  return (
    <>
      <h2 className="head-text">
        I Know that <span className="about-span">God Design</span> <br />
        means <span className="about-span">Good Business</span>
      </h2>
      <div className="app__profiles">
        {about.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(About, "about");