// ProjectButtons.jsx
import React from "react";

const ProjectButtons = ({ projectbuttons }) => {
  return (
    <div className="project-buttons-container">
      {projectbuttons.map((item) => (
        <a
          href={`https://github.com/ChristopherArias-Hash/${item.link}`}
          target="_blank"
          className="project-buttons"
          key={item.id}
        >
          {item.buttonText}
        </a>
      ))}
    </div>
  );
};

export default ProjectButtons;
