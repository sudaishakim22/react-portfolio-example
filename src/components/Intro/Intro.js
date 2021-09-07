import React from "react";
import "./intro.scss";

const Intro = () => {
  return (
    <div className="intro" id="intro">
        <div className="intro__left">
          <div className="imgContainer">
            <img src="assets/man.png" alt="" />
          </div>
        </div>
        <div className="intro__right"></div>
    </div>
  );
};

export default Intro;
