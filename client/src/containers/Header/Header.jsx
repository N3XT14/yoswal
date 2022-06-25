import React from "react";
import { Fragment } from "react";

import images from "../../constants/images.js";
import Wave from "./Wave/Wave.jsx";
import "./Header.scss";

const Header = () => {
  const space = <Fragment>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Fragment>

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
            <d style={{ fontSize: 20, color: 'orange' }}>while()</d> noSuccess:<br />
            {space}<d style={{ fontSize: 20, color: 'blue' }}>code()</d><br />
            {space}<d style={{ fontSize: 20, color: 'blue' }}>drinkCoffee()</d><br />
            {space}<d style={{ fontSize: 20, color: 'blue' }}>code()</d><br />
            {space}<d style={{ fontSize: 20, color: 'blue' }}>drinkCoffee()</d><br />
            {space}<d style={{ fontSize: 20, color: 'orange' }}>if</d> dead:<br />            
            {space}{space}break<br />
          </code>
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