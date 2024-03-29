import React from "react";

const ProjectButtons = ({ projectbuttons }) => {
  return (
    <div>
      <div>
        {projectbuttons.map((item) => (
          <a href={`https://github.com/ChristopherArias-Hash/Contact-app`} target="_blank" className="project-buttons" key={item.id}>            
            {item.ContactListButton}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectButtons;
