import React, { useEffect } from 'react';
import Navbar from './components/NavBar';
import HomeContent from './components/ProjectsContent';
import ProjectButtons from './components/ProjectButtons';
import "./Projects.css";

const NavBarData = [
  { id: 1, welcome: "", home: "HOME", projects: "PROJECTS", gitHub: "GITHUB" },
];

const projectButtonsData = [
  { id: 1, ContactListButton: "Open Project"}
];


function Projects() {
 
  return (
    <>
      <div className="container">
        <div className="navbar">
          <div className="centered-navbar">
            <Navbar navbar={NavBarData} />
            
          </div>
        </div>
        <div className="centered-projects-content">
        <HomeContent />
        <ProjectButtons projectbuttons = {projectButtonsData} />
        </div>
      </div>
    </>
  );
}


export default Projects;