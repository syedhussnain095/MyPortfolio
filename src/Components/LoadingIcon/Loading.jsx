import React from "react";
import { BounceLoader } from "react-spinners";
import "./Loading.scss";
const Loading = () => {
  return (
    <>
      <div className="loadIcon">
        <BounceLoader color="#2f3191f3" size={120} speedMultiplier={1.5} />
      </div>
    </>
  );
};

export default Loading;
