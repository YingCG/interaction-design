import React from "react";

function ProjectOverview(props) {
  return (
    <div className="information">
      {props.info}
      <h1>Project Overview</h1>
      <p>
        Memento Media is a creative industry startup that empowers people to
        save life's stories. When a loved one dies, we also sadly loose their
        stories. Memento Media uses storytelling and oral history practices to
        redefine the way families discover, capture and celebrate family history
        withoutmulti-generational living family archives.
      </p>
    </div>
  );
}

export default ProjectOverview;
