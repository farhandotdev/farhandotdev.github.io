import React from "react";
import Project from "../projectList/Project"
import LatestProjectData from "../../data/LatestProject"

const LatestProject = () => {
  return (
    <div>
        <div className='head'>Latest Projects</div>
      {
        LatestProjectData.map((project)=>(
          <Project
            imgpic={project.imgpic}
            title={project.title}
            desc={project.desc}
            code={project.sourceCode}
            open={project.open}
          />
        ))
      }
    </div>
  );
};

export default LatestProject;
