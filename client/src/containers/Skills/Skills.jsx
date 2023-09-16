import React, { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import images from "../../constants/images.js";
import "./Skills.scss";

const Skills = () => {
  const staticData = {
    "skills": [
      {          
          "name": "python",
          "bgColor": "python"
      },
      {          
          "name": "git",
          "bgColor": "#fff3e0"
      },
      {          
          "name": "javascript",
          "bgColor": "#fffff2"
      },
      {          
          "name": "typescript",
          "bgColor": "#fffff2"
      },
      {          
          "name": "cpp",
          "bgColor": "#bbdefb"
      },
      {          
          "name": "react",
          "bgColor": "#fffff2"
      },
      {          
          "name": "github",
          "bgColor": "#ffffff"
      },
      {          
          "name": "node",
          "bgColor": "node"
      },
      {          
          "name": "flutter",
          "bgColor": "flutter"
      },
      {          
          "name": "extjs",
          "bgColor": "extjs"
      },
      {          
          "name": "oracle",
          "bgColor": "oracle"
      },
      {          
          "name": "mongodb",
          "bgColor": "mongodb"
      }
    ],
    "experiences": [
      {
        "year": "2023/05 - Present",
        "works": [
            {
                "name": "Software Developer & AI Intern",
                "company": "EMPEQ",
                "desc": "• Driving an evolving AI and Web 3.0 fusion project. Guiding AI-driven feature design for enhanced user engagement, exemplifying proactive innovation leadership.\n• Engineered an AI powerhouse, uniting Computer Vision, OCR, and NLP NER to precisely extract manufacturer names and model-serial numbers from equipment nameplates, resulting in a remarkable 25% surge in user subscriptions and a 70% boost in data quality.\n• Leading ongoing Web 3.0 transformation. Overseeing optimization, schema redesign, backend improvements, and security fortification for substantial efficiency gains and heightened user satisfaction.\n• Implemented an ETL process, resulting in a 25% improvement in data quality and usability within the Equipment Libraries.\n• Implemented the ELK stack, leveraging rule-based transformations to overcome the challenge of non-straightforward data linkage with SQL databases and significantly improving search output by 50% over a REST API endpoint.\n• Initiated the development of an AI pipeline, incorporating key algorithms and techniques to enhance the project outcome."
            }
        ]
      },
      {          
        "year": "2020/08 - 2023/01",
        "works": [
            {
                "name": "Software Engineer",
                "company": "Vistaar Technologies",
                "desc": "•Great at code base understanding, debugging logs, enhancement implementation, and peer code review.\n•Streamlined deployment tasks on Dev-Dev, Client-Dev, and Client-QA servers by creating customized Bash scripts, resulting in 2 hours of\nsaved manual effort and monitoring per day.\n•Worked in an Agile model including scrum meeting, ticketing framework, and, SVN version control.\n•Collaborated in comprehending project specifications and engaging in technical discussions, proactively raising inquiries and offering\nalternative suggestions backed by extensive research and development.\nFord GMCF\n•Resolved global customers' solution-specific queries with a Non-Technical explanation.\n•Handled a variety of tickets, with a focus on 20% enhancements, and addressed 80% of tickets (20% bug fixes and 60% As Designed tickets).\n•Created HLD(High-Level Design) and LLD(Low-Level Design) for a \"Ford-Feed To IMPRS\" system(UI-DB-BE).\nTFM\n•Implemented MViews, MView logs, and batch jobs to reduce the query time by 80% and automate overnight data processing.\n•Developed production-level codebase (with future enhancement) and UTP files which passed the QA-Testing by 94%.\nCanopy Growth\n•Utilized Vega Charts to replace Custom Charts and improved customer satisfaction based on customer feedback\n•Conducted peer sessions to share insights on implementing, integrating, and troubleshooting Vega Charts."
            }
        ]
      },
      {          
        "year": "2020/01 – 2020/06",
        "works": [
            {
                "name": "Software Developer Intern",
                "company": "The Small Big Idea",
                "desc": "Developed a solution to examine the social media activities of their clients such as posts, videos, comments, etc., which reduced the manual work\nby 60% by importing social media data through API's authorization token (read-only).\n•Integrated API endpoints of Twitter, Facebook, and Instagram for importing data.\n•Implemented visualization tools, including pie charts, graphs, and percentage distributions, resulting in a 28.8% improvement in analysis by\nenabling a better understanding of patterns and trends within the data, leading to more informed decision-making.\n•Implemented machine learning capabilities such as Image recognition, character recognition, and sentimental analysis and categorized them\ninto appropriate groups"
            }
        ]
      },
      {          
        "year": "2018/02 - 2019/02",
        "works": [
            {
                "name": "Web Developer Intern",
                "company": "Indian Development Foundation",
                "desc": "Revamped the existing static website to a dynamic one with an Admin Panel. Increased traffic by 70% by helping them provide the tool to dynamically post/create-event, organize/manage them, etc. Within 6 months after deployment the website replaced the old domain."
            }
        ]
      }
    ],
  };
  const [skills, setSkills] = useState(staticData["skills"]);
  const [experiences, setExperience] = useState(staticData["experiences"]);

  useEffect(() => {
    async function getSkillData() {
      const sResponse = await fetch(`https://portfolio-vzex.onrender.com/skillsdata/`);
      const eResponse = await fetch(`https://portfolio-vzex.onrender.com/experiences`);

      if (!sResponse.ok) {
        return;
      }

      if (!eResponse.ok) {
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
                      {work.desc.split("\n").map((line, index) => (
                        <div key={index}>{line} <br /></div>
                      ))}
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
