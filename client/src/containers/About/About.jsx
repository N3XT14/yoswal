import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";

import "./About.scss";

const About = () => {
  const staticData = [
    {
        "_id": "626abdf34ca40f3ef04c86c7",
        "title": "Python Developer",
        "description": "Python Enthusiast",
        "imgUrl": "https://github.com/N3XT14/yoswal/blob/main/client/src/assets/pythonBg.png?raw=true"
    },
    {
        "_id": "626abed24ca40f3ef04c86d2",
        "title": "Full Stack Engineer",
        "description": "I am a good Developer",
        "imgUrl": "https://github.com/N3XT14/yoswal/blob/main/client/src/assets/fullstackBg.jpg?raw=true"
    },
    {
        "_id": "626abf314ca40f3ef04c86d4",
        "title": "Machine Learning Engineer",
        "description": "ML Enthusiast",
        "imgUrl": "https://github.com/N3XT14/yoswal/blob/main/client/src/assets/MLbg.jpg?raw=true"
    },
    {
        "_id": "626abf774ca40f3ef04c86d5",
        "title": "AI Enthusiast",
        "description": "I am a good Designed",
        "imgUrl": "https://github.com/N3XT14/yoswal/blob/main/client/src/assets/AIbg3.jpg?raw=true"
    }
  ]
  const [about, setAbout] = useState(staticData);
  const [isFetched, setIsFetched] = useState(true);
  
  useEffect(() => {
    async function getRecords() {
      let records;
      try {
        const response = await fetch(`https://portfolio-vzex.onrender.com/aboutdata/`);

        if (!response.ok) {          
          return;
        };
        
        records = await response.json();
        
        setAbout(records);
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
      {isFetched ? 
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
        : 
        <h1>Loading...</h1>
      }
    </div>
  );
};

export default AppWrap(About, "about");