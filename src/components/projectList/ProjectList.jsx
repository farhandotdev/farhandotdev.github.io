import React from "react";
import Project from "./Project";
import ProjectData from "../../data/ProjectData";

const Projects = () => {
  return (
    <div>
      {
        ProjectData.map((project)=>(
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

export default Projects;
