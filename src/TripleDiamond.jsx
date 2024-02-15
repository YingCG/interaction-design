import React, { useState } from "react";
import contents from "./informations";
import ProjectOverview from "./ProjectOverview";
import Research from "./Research";
import DesignProcess from "./DesignProcess";

function TripleDiamond() {
  const [info, setInfo] = useState([]);

  function showInfo(index) {
    console.log(contents[index]);
    setInfo(contents[index]);
  }

  return (
    <>
      <div className="text-content">
        <h1>Every interaction count, Create Better Experience...</h1>
        <p>
          A triple diamond makes planning, updating stakeholders on progress and
          working with development teams much clearer. It also bakes into
          interactive design' workflow the need for them to work on the project
          after prototype testing finishes.
        </p>
      </div>
      <div className="container">
        <div className="container-triple">
          <h2 className="text-above">Research</h2>
          <div className="triple-diamond" onClick={() => showInfo("research")}>
            <div className="arrow-left">
              <p className="arrow-text">Problem Discovery</p>
            </div>
            <div className="arrow-right">
              <p className="arrow-text">Opportunity Definition</p>
            </div>
          </div>
        </div>

        <div className="container-triple">
          <h2 className="text-above">Proof of Concept</h2>
          <div
            className="triple-diamond"
            onClick={() => showInfo("experiment")}
          >
            <div className="arrow-left">
              <p className="arrow-text">Solution Discovery</p>
            </div>
            <div className="arrow-right">
              <p className="arrow-text">Solution Define</p>
            </div>
          </div>
        </div>

        <div className="container-triple">
          <h2 className="text-above">Build and test</h2>
          <div className="triple-diamond" onClick={() => showInfo("prototype")}>
            <div className="arrow-left">
              <p className="arrow-text">Design Discovery</p>
            </div>
            <div className="arrow-right">
              <p className="arrow-text">Design Solution</p>
            </div>
          </div>
        </div>
      </div>

      <div className="information">
        {info.map((thing) => (
          <ProjectOverview {...thing} />
        ))}
        {/* {info.map(thing => <Research thing={{...thing}} />)} */}
      </div>
    </>
  );
}

export default TripleDiamond;
