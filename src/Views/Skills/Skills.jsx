import React from "react";
import { useState } from "react";
import SkillsData from "./SkillsData";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ReactTooltip from 'react-tooltip';

const Skills = () => {
  const [data] = useState(SkillsData)
  return (
    <>
      <div className="main_head">
        <h4>Skills
          <p>What I Have?</p>
        </h4>
      </div>
      <div className="col-10 mx-auto">
        <div className="row">
          {
            data.map((elem, index) => {
              return (
                <>
                  <div
                    key={index}
                    style={{
                      width: "180px",
                      height: "180px",
                      margin: "auto",
                      overflow: "hidden"

                    }}
                    data-tip={elem.tooltip}>
                    <CircularProgressbar value={elem.percent} />
                    <div style={{ position: "relative", top: "-120px", left: "41px" }}>
                      <img className="w-50 h-50" src={elem.imgSrc} />
                    </div>
                    <ReactTooltip place="top" type="dark" effect="float" />
                  </div>

                </>
              )
            })
          }
        </div>
      </div>

    </>
  );
};

export default Skills;
