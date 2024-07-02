// ProjectsContent.jsx
import React from "react";
import ContactAppImage from './images/Contactproject.png';
import WorldWindImage from './images/Earthquake.png';
import WorldWindJSONImage from './images/JSONupload.png';
import ProjectButtons from './ProjectButtons'; // Import ProjectButtons component

const ProjectsContent = () => {
    return (
        <>
            <div className="centered-projects-content">
                <h1 className="project-headers">Contact Management Project</h1>
                <img src={ContactAppImage} alt="Photo of app" className="project-image-contactapp" />
                <p className="project-texts">I developed a full-stack web application using React and Flask with SQLAlchemy, 
                    creating a RESTful API for managing contacts stored in a relational database with HTML/CSS for the UI.</p>
                <div className = "project-buttons">
                <ProjectButtons projectbuttons={[{ id: 1, link: "Contact-app", buttonText: "Open Contact App" }]} />
                </div>
           

                <h1 className="project-headers">Real-Time Earthquake Tracking with NASA WorldWind</h1>
                <img src={WorldWindImage} alt="Photo of app" className="project-image-worldwind" />
                <img src={WorldWindJSONImage} alt="Photo of app" className="project-image-worldwind" />
                <p className="project-texts">A Java application uses NASA's WorldWind SDK to visualize network data and real-time earthquake information from the USGS API. 
                    It provides interactive 3D globe visualization with high-performance rendering for dynamic geospatial data exploration.</p>
                
                
                <div className = "project-buttons">
                <ProjectButtons projectbuttons={[{ id: 2, link: "Java-Earthquake-tracker", buttonText: "Open Earthquake Tracker" }]} />
            </div>
            </div>
        </>
    );
};

export default ProjectsContent;
