import React, { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import images from "../../constants/images.js";
import "./Skills.scss";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [experiences, setExperience] = useState([]);

  useEffect(() => {
    async function getSkillData() {
      const sResponse = await fetch(`https://portfoliobackend-5h51.onrender.com/skillsdata/`);
      const eResponse = await fetch(`https://portfoliobackend-5h51.onrender.com/experiences`);

      if (!sResponse.ok) {
        const message = `An error occurred: ${sResponse.statusText}`;
        window.alert(message);
        return;
      }

      if (!eResponse.ok) {
        const message = `An error occurred: ${eResponse.statusText}`;
        window.alert(message);
        return;
      }

      const sData = await sResponse.json();
      const eData = await eResponse.json();

      setSkills(sData);
      setExperience(eData);
    }

    getSkillData();
    return;
  }, [skills.length, experiences.length]);

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={images[skill.name]} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="app__skills-exp-work"
                    data-tip
                    data-for={work.name}
                    key={work.name}
                  >
                    <h4 className="bold-text">{work.name}</h4>
                    <p className="p-text">{work.company}</p>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__skillsbg"
);
