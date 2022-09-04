import React, { useEffect, useState } from "react";
import Loading from "./Components/LoadingIcon/Loading";
import Main from "./Main";
import Cursor from "./Components/Cursor/Cursor";
const DataCollector = () => {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 2500);
  });
  return (
    <div>
      <Cursor />
      {load ? <Loading /> : <Main />}
    </div>
  );
};

export default DataCollector;
