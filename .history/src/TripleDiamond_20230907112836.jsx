import React, { useState } from "react";
import ProjectOverview from "./ProjectOverview";

function TripleDiamond() {
  const [info, setInfo] = useState("");

  const content = [
    {
      Title: "",
      description:
        "Memento Media is a creative industry startup that empowers people to save life's stories. When a loved one dies, we also sadly loose their stories. Memento Media uses storytelling and oral history practices to redefine the way families discover, capture and celebrate family history withoutmulti-generational living family archives.",
    },
  ];

  function showInfo() {
    setInfo(content.Title, content.description);
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
