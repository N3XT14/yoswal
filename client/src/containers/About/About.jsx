import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";

import "./About.scss";

const About = () => {
  const [about, setAbouts] = useState([]);
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    async function getRecords() {
      try {
        const response = await fetch(`https://yoswal-production.up.railway.app/aboutdata/`);
  
        if (!response.ok) {
          const message = `An error occurred: ${response.statusText}`;
          window.alert(message);
          return;
        }
        
        const records = await response.json();
        setAbouts(records);
        setIsFetched(true);
      } catch (error) {
        window.alert("Unexpected Error Occurred, please refresh the page again");
      }

    }

    getRecords();
    return;
  }, [about.length]);

  return (
    <div>
      {!isFetched ? (
        <h1>Loading...</h1>
        ) : (
          <>
            <h2 className="head-text">
              I Know, A <span className="about-span">Good Business</span> <br />
              requires <span className="about-span">Great Knowledge</span>
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
        )
      }
    </div>
  );
};

export default AppWrap(About, "about");