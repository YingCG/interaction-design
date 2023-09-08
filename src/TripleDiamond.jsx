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
        {
          contents.map((content, i) => i !== 0 && 
              (<div className="container-triple">
              <h2 className="text-above">{content.MenuItem}</h2>
              <div
                className="triple-diamond"
                onClick={() => setInfo(content)}
              >
                <div className="arrow-left"></div>
                <div className="arrow-right"></div>
              </div>
            </div>)
          )
        }
      </div>
      {!info.hide && <div className="information">
        <p>{info.Title}</p>
        <p>{info.Description}</p>
      </div>}
    </>
  );
}

export default TripleDiamond;
