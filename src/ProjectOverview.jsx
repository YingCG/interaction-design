import React from "react";

function ProjectOverview(props) {
  return (
    <div className="information">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
}

export default ProjectOverview;
