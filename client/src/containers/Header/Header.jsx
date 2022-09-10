import React from "react";
import { Fragment } from "react";

import images from "../../constants/images.js";
import Wave from "./Wave/Wave.jsx";
import "./Header.scss";

const Header = () => {
  const space = <Fragment>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Fragment>
  const Greet = (param) => {  
    return <h6 style={param.style}>{space}{param.children}</h6> 
  }
  return (
    <section id="home" className="home">
      <div className="app__header app__flex">
        <div className="app__header-content">
          <h1 className="p-text">
            &nbsp; Hi There!<span>👋🏻</span>
          </h1>
          <span>
            I'm
            <strong className="p-text main-name"> Yash Oswal</strong>
          </span>          
          <code className="main-name">            
            <Greet style={{ fontSize: 20, color: 'orange' }} text='while'>while</Greet> noSuccess:<br />
            {space}<Greet style={{ fontSize: 20, color: 'blue' }}>code()</Greet><br />
            {space}<Greet style={{ fontSize: 20, color: 'pink' }}>coffee()</Greet><br />
            {space}<Greet style={{ fontSize: 20, color: 'blue' }}>code()</Greet><br />
            {space}<Greet style={{ fontSize: 20, color: 'pink' }}>coffee()</Greet><br />
            {space}<Greet style={{ fontSize: 20, color: 'orange' }}>if</Greet> dead:<br />            
            {space}{space}break<br />
          </code>
          
          <div>
            <a href="https://drive.google.com/file/d/1suz_L0Pyd_L4kWEl3Z7-nQuDYvq2sunS/view?usp=sharing" download="YashOswal's Resume" target="_blank">
              <button
                type="button"
                className="app__header-button"
              >
                Download CV
              </button>
            </a>
            <a href="#contact">
              <button
                type="button"
                className="app__header-button1"
                >
                Hire Me
              </button>
            </a>
          </div>
          <br />
        </div>
        <div className="app__header-img">
          <img src={images.profile} alt="" />
        </div>
      </div>
      <Wave />
    </section>
  );
};

export default Header;