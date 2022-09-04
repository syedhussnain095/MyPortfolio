import React from "react";
import Home from "../../Views/Home/Home";
import About from "../../Views/About/About";
import WhatDo from "../../Views/WhatDo/WhatDo";
import Skills from "../../Views/Skills/Skills";
import Experience from "../../Views/Experience/Experience";
import Contact from "../../Views/Contact/Contact";
import "./middle.scss";
const MiddleSection = () => {
  return (
    <>
      <div id="home" className="mx-5 home_main_div">
        <Home />
      </div>
      <div id="about" className="mx-5 home_main_div">
        <About />
      </div>
      <div id="whatDo" className="mx-5 home_main_div">
        <WhatDo />
      </div>
      <div id="skills" className="mx-5 home_main_div">
        <Skills />
      </div>
      <div id="experience" className="mx-5 home_main_div">
        <Experience />
      </div>
      <div id="contact" className="mx-5 home_main_div">
        <Contact />
      </div>
    </>
  );
};

export default MiddleSection;
