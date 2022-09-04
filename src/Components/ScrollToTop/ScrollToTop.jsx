import React, { useState } from "react";
import "./scroll.scss";
import { BiUpArrowAlt } from "react-icons/bi";
const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 300) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 300) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);
  return (
    <>
      <>
        <BiUpArrowAlt
          className="scrollTop"
          onClick={scrollTop}
          style={{ display: showScroll ? "flex" : "none" }}
        />
      </>
    </>
  );
};

export default ScrollToTop;
