import React from "react";

function ProjectOverview(props) {
  return (
    <div className="information">
      <h1> {props.ProjectOverview}</h1>
      <p> {props.description}</p>
    </div>
  );
}

export default ProjectOverview;
