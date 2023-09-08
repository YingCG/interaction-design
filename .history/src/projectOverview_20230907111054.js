import React from "react";

function ProjectOverview(info) {
  return (
    <div className="information">
      <h1>Project Overview</h1>
      {props.info}
      Memento Media is a creative industry startup that empowers people to save
      life's stories. When a loved one dies, we also sadly loose their stories.
      Memento Media uses storytelling and oral history practices to redefine the
      way families discover, capture and celebrate family history
      withoutmulti-generational living family archives.
    </div>
  );
}

export default ProjectOverview;
