import React from "react";
import { useState } from "react";
import ExperienceData from "./ExperienceData";
const Experience = () => {
  const [data] = useState(ExperienceData);
  return (
    <>
      <div className="main_head">
        <h4>Experience
          <p>What I'M Done?</p>
        </h4>
      </div>
      <div className="col-10 mx-auto">
        <div className="row">
          {
            data.map((elem, index) => {
              return(
                <>
                <div key={index} className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                  <div className="card">
                    <div className="card-head mt-4 mb-5 text-center">
                      <img src={elem.imgsrc} alt="last-work-image" className="w-50" />
                      <h5 className="mt-5">{elem.date}</h5>
                    </div>
                    <div className="card-body">
                      <h3>{elem.field}</h3>
                      <h4>{elem.explain}</h4>
                      <h6>{elem.resp}</h6>
                      <p>{elem.resp1}</p>
                      <p>{elem.resp2}</p>
                      <p>{elem.resp3}</p>
                      <p>{elem.resp4}</p>
                      <p>{elem.resp5}</p>
                    </div>
                  </div>
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

export default Experience;
