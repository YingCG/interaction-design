import React from "react";

function ProjectOverview({ info }) {
  return (
    <div className="information">
      <h1> {info.Title}</h1>
      <p> {info.Description}</p>
    </div>
  );
}

export default ProjectOverview;
