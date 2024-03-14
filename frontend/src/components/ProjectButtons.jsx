import React from "react";
import { Link } from "react-router-dom";

const ProjectButtons = ({ projectbuttons }) => {
  return (
    <div>
    
      <div>
        {projectbuttons.map((item) => (
          <Link to="/projectapp" className="project-buttons" key={item.id}>
            {item.ContactListButton}
          </Link>
        ))}
    
      </div>
    </div>
  );
};

export default ProjectButtons;