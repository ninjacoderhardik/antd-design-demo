import React from "react";
import "./home.css";
import mancircle from "../../assets/mancircle.png"
export const Home = () => {
  return (
    <div className="home">
      <div className="hleft">
        <h1 className="hparagraph">Hi, I am John,<br/> Creative Technologist</h1>
        <h1 className="hdparagraph">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</h1>
        <button className="btnresume">download resume</button>
      </div>
      <div className="hright">
        <div className="join">
        <div className="john"></div>
        <div className="hcircle"></div>
        </div>
        </div>
      </div>
  );
};
