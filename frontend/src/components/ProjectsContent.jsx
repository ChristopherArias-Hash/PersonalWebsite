import React from "react";
import ProjectImage from './images/Contactproject.png';

const ProjectsContent = () => {
    return (
        <>
 
            <h1 className = "project-headers">Contact Mangement Project</h1>
            <img src={ProjectImage} alt="Photo of myself" className="project-image" />
            <p className="project-texts">I developed a full-stack web application using React and Flask with SQLAlchemy, 
                creating a RESTful API for managing contacts stored in a relational database with HTML/CSS for the UI.</p>
  
        </>
    );
};

export default ProjectsContent;
