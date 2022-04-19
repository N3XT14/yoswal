import React, { useState,useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';

import './About.scss';
import images from '../../constants/images.js'

const About = () => {
    const [about, setAbouts] = useState([]);
    console.log(`About ${about}`);
    const abouts = [
        { title: 'Web Development', description: 'I am a good Developer', imgUrl: images.about1},
        { title: 'Web Design', description: 'I am a good Designed', imgUrl: images.about2},
        { title: 'ML Engineer', description: 'ML Enthusiast', imgUrl: images.about3},
        { title: 'Python Developer', description: 'Python Enthusiast', imgUrl: images.about4}
    ];
    useEffect(() => {
      async function getRecords() {        
        const response = await fetch(`http://localhost:3001/record/`);
        
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
      <h2 className="head-text">I Know that <span>Good Design</span> <br />means  <span>Good Business</span></h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt='Hello' />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(About, 'about');
