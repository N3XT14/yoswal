import React from "react";
import { Fragment } from "react";

import images from "../../constants/images.js";
import Wave from "./Wave/Wave.jsx";
import "./Header.scss";

const Header = () => {
  const space = <Fragment>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Fragment>
  async function getCustomData() {
    const response = await fetch(`https://portfoliobackend-5h51.onrender.com/getCustomData/`);

    if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      window.alert(message);
      return;
    }

    const data = await response.json();      
    console.log(JSON.stringify(data));
  }
  // getCustomData();

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
            <d style={{ fontSize: 20, color: 'orange' }}>while</d> noSuccess:<br />
            {space}<d style={{ fontSize: 20, color: 'blue' }}>code()</d><br />
            {space}<d style={{ fontSize: 20, color: 'pink' }}>coffee()</d><br />
            {space}<d style={{ fontSize: 20, color: 'blue' }}>code()</d><br />
            {space}<d style={{ fontSize: 20, color: 'pink' }}>coffee()</d><br />
            {space}<d style={{ fontSize: 20, color: 'orange' }}>if</d> dead:<br />         
            {space}{space}break<br />
          </code>
          
          <div>
            <a href="https://drive.google.com/file/d/1suz_L0Pyd_L4kWEl3Z7-nQuDYvq2sunS/view?usp=sharing" download="YashOswal's Resume">
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