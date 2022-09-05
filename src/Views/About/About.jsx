import React from "react";
import { Link } from "react-scroll";
import ReactTooltip from 'react-tooltip';

const About = () => {
  return (
    <>
      <div className="main_head">
        <h4>About Me
          <p>Why Choose Me?</p>
        </h4>
      </div>
      <div className="col-10 mx-auto border py-5 mt-5 pt-5">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div className="home_image px-4 mt-4">
              <img src="https://cdn.pixabay.com/photo/2015/09/16/08/55/online-942408_960_720.jpg" alt="MyImage" />
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div className="about_info px-4">
              <h6>
                I am a Computer Scientist graduated
                from Lahore Leads University Lahore in Computer Science Majors.
                I am a highly skilled professional developer who loves to take on
                the challenges and then solve them.
              </h6>
              <h6 className="mt-4 highlights">Here are a few highlights what I am doing now:</h6>
              <div className="dots">
                <span>Website & Mobile Application Developer</span>
                <span>Interactive Front End as per the design</span>
                <span>React and React Native</span>
                <span>Redux or Redux-Toolkit for State Management</span>
                <span>Create Project Structure</span>
              </div>
              <div className="home_intro mt-5">
                <button className="btn1" data-tip="Contact Me">
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                  >
                    Contact Me
                  </Link>
                </button>
                <ReactTooltip place="top" type="dark" effect="float" />
                <button className="btn2" data-tip="Download My CV">Download CV</button>
                <ReactTooltip place="top" type="dark" effect="float" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
