import React, { useState } from "react";
import { Link } from "react-scroll";
const Header = () => {
  const [main, setMain] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setMain(true);
    } else {
      setMain(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <>
      <div className={main ? "main scrolled" : "main"}>
        <nav className="navbar col-10 mx-auto navbar-expand-lg pt-4 mt-3">
          <div className="container-fluid mx-5">
            <Link className="navbar-brand fs-3" to="home">
              Hussnain
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span>.</span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="whatDo"
                    spy={true}
                    smooth={true}
                  >
                    What I Do?
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                  >
                    Skills
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="experience"
                    spy={true}
                    smooth={true}
                  >
                    Experience
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
