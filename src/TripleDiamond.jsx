import React, { useState } from "react";
import contents from "./data";
import ProjectOverview from "./ProjectOverview";
// import Research from "./Research";

function TripleDiamond() {
  const [info, setInfo] = useState({
    Title: 'default value',
    Description: 'default value',
    hide: true
  });

  return (
    <>
      <div className="text-content">
        Every interaction count, Create Better Experience...
      </div>
      <div className="container">
        <div className="container-triple">
          <h2 className="text-above">Research</h2>
          <div
            className="triple-diamond"
            onClick={() => setInfo(contents[1])}
          >
            <div className="arrow-left"></div>
            <div className="arrow-right"></div>
          </div>
        </div>

        <div className="container-triple">
          <h2 className="text-above">Experiment</h2>
          <div
            className="triple-diamond"
            onClick={() => setInfo(contents[2])}
          >
            <div className="arrow-left"></div>
            <div className="arrow-right"></div>
          </div>
        </div>

        <div className="container-triple">
          <h2 className="text-above">Testing</h2>
          <div
            className="triple-diamond"
            onClick={() => setInfo(contents[3])}
          >
            <div className="arrow-left"></div>
            <div className="arrow-right"></div>
          </div>
        </div>
      </div>
      {!info.hide && <div className="information">
        <p>{info.Title}</p>
        <p>{info.Description}</p>
      </div>}
    </>
  );
}

export default TripleDiamond;
