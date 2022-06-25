import React, { useState, useRef } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./Navbar.scss";

const Navbar = () => {
  var linkList = ["home", "about", "work", "skills", "contact"];
  const [toggle, setToggle] = useState(false);
  //const [colorChange, setColorChange] = useState(false);
  // const eRef = useRef(null);
  // console.log(eRef.current?.clientHeight);

  // const changeNavbarColor = () =>{
  //   if((window.scrollY >= 700 && window.scrollY <= 1600) || (window.scrollY >= 2400 && window.scrollY <= 3700)){
  //     setColorChange(true);
  //   }
  //   else{
  //     setColorChange(false);
  //   }
  // };
  // window.addEventListener('scroll', changeNavbarColor);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="Logo" width={40} height={40} />
      </div>
      <ul className="app__navbar-links">
        {linkList.map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`} className="navbar">
              <h4>{item}</h4>
            </a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX className="app__hix" onClick={() => setToggle(false)} />
            <ul>
              {linkList.map((item) => (
                <li className="app__flex p-text" key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
