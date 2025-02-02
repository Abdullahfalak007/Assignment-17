import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="left">
          <h1 className="h1">
            Hi, I'm <b>Julia Walker</b>.
            <br />
            Web Developer
          </h1>
          <p className="h3">
            Specialized in <abbr title="Accessibility">a11y</abbr> and Core Web
            Vitals
          </p>
          <div className="btn-group">
            <a href="#" className="btn btn-primary">
              Contact Me
            </a>
            <a href="#" className="btn btn-secondary">
              About Me
            </a>
          </div>
        </div>
        <div className="right">
          <div className="pattern-bg"></div>
          <div className="img-box">
            <img src="/hero.png" alt="Julia Walker" className="hero-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
