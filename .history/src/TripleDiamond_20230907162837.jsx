import React, { useState } from "react";
import contents from "./data";
import ProjectOverview from "./ProjectOverview";

function TripleDiamond() {
  const [info, setInfo] = useState([]);

  function showInfo() {
    console.log(contents);
    setInfo(contents);
  }
  // const showInfo = () => {

  // }

  return (
    <>
      <div className="text-content">
        Every interaction count, Create Better Experience...
      </div>
      <div className="container">
        <div className="container-triple">
          <div className="text-above">Research</div>
          <div className="triple-diamond" onClick={showInfo}>
            <div className="arrow-left"></div>
            <div className="arrow-right"></div>
          </div>
        </div>

        <div className="container-triple">
          <div className="text-above">Experiment</div>
          <div className="triple-diamond">
            <div className="arrow-left"></div>
            <div className="arrow-right"></div>
          </div>
        </div>

        <div className="container-triple">
          <div className="triple-diamond">
            <div className="text-above">Testing</div>
            <div className="arrow-left"></div>
            <div className="arrow-right"></div>
          </div>
        </div>
        <div className="information">
          {contents.map((info, index) => (
            <ProjectOverview key={index} {...info} />
          ))}
        </div>
      </div>
    </>
  );
}

export default TripleDiamond;
