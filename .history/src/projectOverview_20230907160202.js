import React from "react";

function ProjectOverview(props) {
  return (
    <div className="information">
      <h1> {props.Title}</h1>
      <p> {props.Description}</p>
    </div>
  );
}

export default ProjectOverview;
