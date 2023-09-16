import React, { useState, useEffect, useMemo } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./Work.scss";

const Work = () => {
  const staticData = useMemo(() => [
    {        
        "imgUrl": "https://github.com/N3XT14/yoswal/blob/main/client/src/assets/portfolioReact.jpg?raw=true",
        "codeLink": "https://github.com/N3XT14/yoswal",
        "description": "Personalized portfolio of my skills, projects and ability to connect",
        "name": "Portfolio",
        "projectLink": "https://n3xt14.github.io/yoswal/",
        "tags": [
            "JavaScript"
        ],
        "title": "N3XT"
    },
    {        
        "imgUrl": "https://raw.githubusercontent.com/N3XT14/yoswal/main/client/src/assets/chatBot.jpg",
        "codeLink": "https://github.com/N3XT14/Chatbot",
        "description": "Edu consultation chatbot for students of Secondary and HSC",
        "name": "Python",
        "projectLink": "https://github.com/N3XT14/Chatbot/tree/master/Result",
        "tags": [
            "AI/ML",
            "Python"
        ],
        "title": "EDUBot"
    },
    {        
        "imgUrl": "https://github.com/N3XT14/yoswal/blob/main/client/src/assets/myAccountant.jpg?raw=true",
        "codeLink": "https://github.com/N3XT14/Financial-Dashboard",
        "description": "Personalized Financial Dashboard - A smart way to visualize and manage your finances.",
        "name": "Python",
        "projectLink": "https://next-myaccountant.herokuapp.com/",
        "tags": [
            "Flask",
            "Python"
        ],
        "title": "My Accountant"
    },
    {        
        "imgUrl": "https://raw.githubusercontent.com/N3XT14/Instagram-clone/main/assets/instagram_img.jpg",
        "codeLink": "https://github.com/N3XT14/Instagram-clone",
        "description": "Instagram Clone",
        "name": "UI/UX",
        "projectLink": "https://github.com/N3XT14/Instagram-clone/blob/main/Result.md",
        "tags": [
            "Flutter"
        ],
        "title": "Instagram Clone"
    }
  ],[]) 
  
  const [workArr, setWorkArr] = useState([]);
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const processWorkData = (data) => {
    let arr = ["All"];
      for (let idx in data) {
        for (let item of data[idx]["tags"]) {
          if (arr.includes(item) === false) {
            arr.push(item);
          };
        };
      };

      setWorkArr(arr)
      setWorks(data);
      setFilterWork(data);
  };

  useEffect(() => {
    async function getWorkData() {
      const response = await fetch(`https://portfolio-vzex.onrender.com/workdata/`);

      let data;
      if (!response.ok) {        
        data = staticData;
      }
      else {
        data = await response.json();
      }
      processWorkData(data);
    }
    getWorkData();
    return;
  }, [staticData, works.length]);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };
  return (
    <>
      <h2 className="head-text app__work-head">
        My Creative Portfolio Section
      </h2>

      <div className="app__work-filter">
        {workArr.map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={work.imgUrl} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.tags.join(', ')}</h4>              
              <p className="p-text p-desc" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.title}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__secondarybg"
);
