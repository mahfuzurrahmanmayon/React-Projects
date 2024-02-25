import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import wegems from "../../src/images/Wegems.svg";
import "./Analyzer.css";

const Analyzer = () => {
  return (
    <div className="Analyzer">
      <div className="hero">
        <div className="container">
          <div className="hero-Wrapper">
            <span>Text Analyser</span>
            <div className="hero-right">
              <a href="https://www.wegems.co/">
                <img src={wegems} alt="" />
              </a>
              <a href="https://www.facebook.com/mahfuzurrahmanmayon">
                <FaFacebook />
              </a>
              <a href="https://www.linkedin.com/in/mahfujurrahmanmayon/">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="small-container">
        <div className="main-app">
          <div className="result-bar">
            <div className="result-box">
              <span className="box-title">Words</span>
              <span className="box=value">5</span>
            </div>
            <div className="result-box">
              <span className="box-title">Characters</span>
              <span className="box=value">5</span>
            </div>
            <div className="result-box">
              <span className="box-title">Sentences</span>
              <span className="box=value">5</span>
            </div>
            <div className="result-box">
              <span className="box-title">Paragraphs</span>
              <span className="box=value">5</span>
            </div>
            <div className="result-box">
              <span className="box-title">Pronouns</span>
              <span className="box=value">5</span>
            </div>
          </div>
          <textarea
            className="text-area"
            placeholder="Paste your text here ..."
          ></textarea>
          <div className="bottom-result-bar">
            <div className="result-box">
              <span className="box-title">Longest word:</span>
              <span className="box-value">-</span>
            </div>
            <div className="result-box">
              <span className="box-title">Average Reading Time:</span>
              <span className="box-value">~</span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="container">
          <div className="footer-wrapper">
            <span>Build by Mahfuz</span>
            <div className="footer-box">
              <a href="https://www.linkedin.com/in/mahfujurrahmanmayon/">
                <span>About Us</span>
              </a>
              <span>|</span>
              <a href="https://www.facebook.com/mahfuzurrahmanmayon">
                <span>Contact Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analyzer;
