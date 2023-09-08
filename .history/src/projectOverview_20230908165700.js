import React from "react";

function ProjectOverview(props) {
  const { children } = props;

  return (
    <div className="information">
      <h1> {props.Title}</h1>
      <p> {props.Description}</p>
      {children}
    </div>
  );
}

export default ProjectOverview;
