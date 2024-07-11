// ProjectsContent.jsx
import React from "react";
import ContactMainImage from '../images/ContactMain.png';
import ContactEditImage from '../images/ContactEdit.png';
import ContactCreateImage from '../images/ContactCreate.png';
import ContactSearchImage from '../images/ContactSearch.png';
import ContactViewImage from '../images/ContactView.png';
import WorldWindImage from '../images/Earthquake.png';
import WorldWindJSONImage from '../images/JSONupload.png';
import ProjectButtons from './ProjectButtons'; // Import ProjectButtons component

const ProjectsContent = () => {
    return (
        <>
            <div className="centered-projects-content">
                <h1 className="project-headers">Contact Manager Project</h1>
          
                    <img src={ContactMainImage} alt="Photo of app" className="contact-app-photos"/>
                    <img src={ContactSearchImage} alt="Photo of search" className="contact-app-photos" />
                    <img src={ContactCreateImage} alt="Photo of create" className="contact-app-photos"/>
                    <img src={ContactViewImage} alt="Photo of view"   className="contact-app-photos"/>
                    <img src={ContactEditImage} alt="Photo of edit"   className="contact-app-photos"/>
          
                    <p className="project-texts">
                    I developed a full-stack web application using React and Spring Boot, integrated with a SQL database. This application features a RESTful API for managing contacts. 
                    The user interface is built with HTML and CSS, providing a seamless experience for creating, viewing, editing, and deleting contacts. 
                    Each contact entry includes a name, last name, email, notes, and an option to upload a profile picture.
                    </p>
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
