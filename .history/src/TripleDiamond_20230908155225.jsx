import React, { useState } from "react";
import contents from "./data";
import ProjectOverview from "./ProjectOverview";
// import Research from "./Research";

function TripleDiamond() {
  const [info, setInfo] = useState([]);

  function showInfo(index) {
    console.log(contents[index]);
    setInfo(contents[index]);
  }

  return (
    <>
      <div className="text-content">
        Every interaction count, Create Better Experience...
      </div>
      <div className="container">
        <div className="container-triple">
          <h2 className="text-above">Research</h2>
          <div className="triple-diamond" onClick={() => showInfo("research")}>
            <div className="arrow-left"></div>
            <div className="arrow-right"></div>
          </div>
        </div>

        <div className="container-triple">
          <h2 className="text-above">Experiment</h2>
          <div
            className="triple-diamond"
            onClick={() => showInfo("experiment")}
          >
            <div className="arrow-left"></div>
            <div className="arrow-right"></div>
          </div>
        </div>

        <div className="container-triple">
          <h2 className="text-above">Testing</h2>
          <div className="triple-diamond" onClick={() => showInfo("prototype")}>
            <div className="arrow-left"></div>
            <div className="arrow-right"></div>
          </div>
        </div>
      </div>
      <div className="information">
        {info}
        {/* {info.map((thing) => (
          <ProjectOverview thing={{ ...thing }} />
        ))} */}
      </div>
    </>
  );
}

export default TripleDiamond;
