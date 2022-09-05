import React from "react";
import { TypeAnimation } from 'react-type-animation';
import { Link } from "react-scroll";
import { AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';
import { FaGitSquare } from 'react-icons/fa';
import ReactTooltip from 'react-tooltip';

const Home = () => {
  return (
    <>
      <div className="col-10 mx-auto py-5 mt-5 pt-5">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div className="home_intro px-4">
              <h4>Hi, I'm Hussnain <span className="hand">👋</span></h4>
              <TypeAnimation
                sequence={[
                  'React Js Developer',
                  2000,
                  'React Native Developer',
                  2000,
                  'Front-end Developer',
                  2000,

                ]}
                wrapper="h3"
                cursor={true}
                repeat={Infinity}
              />
              <h6>A passionate React Js Developer
                having a special interest in Frontend technologies
                and experience of building Web & Mobile applications
                with JavaScript / Reactjs / Nextjs and some other
                cool libraries and frameworks.</h6>

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
              <div className="home_icons">
                <span data-tip="Visit Linkedin"><AiFillLinkedin /></span>
              <ReactTooltip place="top" type="dark" effect="float" />
                <span data-tip="Visit Github"><FaGitSquare /></span>
              <ReactTooltip place="top" type="dark" effect="float" />
                <span data-tip="Visit Facebook"><AiFillFacebook /></span>
              <ReactTooltip place="top" type="dark" effect="float" />
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 text-center">
            <div className="home_image px-4 ">
              <img src="https://cdn.pixabay.com/photo/2015/09/16/08/55/online-942408_960_720.jpg" alt="MyImage" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
