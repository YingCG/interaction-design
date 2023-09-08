import React, { useState } from "react";
import contents from "./data";
import ProjectOverview from "./ProjectOverview";
// import Research from "./Research";

function TripleDiamond() {
  const [info, setInfo] = useState([]);

  function showInfo(contents) {
    console.log(contents);
    setInfo(contents);
  }

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
            onClick={() =>
              showInfo(contents[1].Title + <p>{contents[1].Description}</p>)
            }
          >
            <div className="arrow-left"></div>
            <div className="arrow-right"></div>
          </div>
        </div>

        <div className="container-triple">
          <h2 className="text-above">Experiment</h2>
          <div
            className="triple-diamond"
            onClick={() => showInfo(contents[2].Title)}
          >
            <div className="arrow-left"></div>
            <div className="arrow-right"></div>
          </div>
        </div>

        <div className="container-triple">
          <h2 className="text-above">Testing</h2>
          <div className="triple-diamond" onClick={() => showInfo(contents[3])}>
            <div className="arrow-left"></div>
            <div className="arrow-right"></div>
          </div>
        </div>
      </div>
      <div className="information">{info}</div>
    </>
  );
}

export default TripleDiamond;