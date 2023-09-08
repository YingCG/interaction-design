import React from "react";

function ProjectOverview(props) {
  return (
    <div className="information">
      <h1>Project Overview</h1>
      {props.info}
    </div>
  );
}

export default ProjectOverview;
