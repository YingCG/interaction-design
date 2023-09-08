import React, { useState } from "react";
import contents from "./data";
import ProjectOverview from "./ProjectOverview";

function TripleDiamond() {
  const [info, setInfo] = useState("");

  function showInfo() {
    console.log(contents);
    setInfo(contents.map((info) => info.ProjectOverview));
  }
  // const showInfo = () => {

  // }

  return (
    <div className="container">
      <div className="text-content">
        Create Better Interactive Experience...
      </div>
      <div className="container-triple">
        <div className="triple-diamond">
          <div className="text-above">Research</div>
          <div className="arrow-left" onClick={showInfo}></div>
          <div className="arrow-right"></div>
        </div>

        <div className="triple-diamond">
          <div className="text-above">Experiment</div>
          <div className="arrow-left"></div>
          <div className="arrow-right"></div>
        </div>

        <div className="triple-diamond">
          <div className="text-above">Testing</div>
          <div className="arrow-left"></div>
          <div className="arrow-right"></div>
        </div>
      </div>
      <div className="information">
        <ProjectOverview props={info} />
      </div>
    </div>
  );
}

export default TripleDiamond;
