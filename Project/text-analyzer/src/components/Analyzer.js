import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import wegems from '../../src/images/Wegems.svg'
import "./Analyzer.css";

const Analyzer = () => {
  return (
    <div>
      <div className="hero">
        <div className="container">
          <div className="hero-Wrapper">
            <h2>Text Analyser</h2>
            <div className="hero-right">
              <a href="https://www.wegems.co/"><img src={wegems} alt="" /></a>
              <a href="https://www.linkedin.com/in/mahfujurrahmanmayon/">
                <FaFacebook />
              </a>
              <a href="https://www.linkedin.com/in/mahfujurrahmanmayon/">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="main-container">
          <div className="main-wrapper">
            <div className="analyze-text-result">
              <div className="analyze-item">
                <div className="text">Words</div>
                <div className="number">5</div>
              </div>
              <div className="analyze-item">
                <div className="text">Words</div>
                <div className="number">5</div>
              </div>
              <div className="analyze-item">
                <div className="text">Words</div>
                <div className="number">5</div>
              </div>
              <div className="analyze-item">
                <div className="text">Words</div>
                <div className="number">5</div>
              </div>
              <div className="analyze-item">
                <div className="text">Words</div>
                <div className="number">5</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analyzer;
