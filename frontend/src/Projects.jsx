import React, { useEffect } from 'react';
import Sidebar from './components/SideBar';
import HomeContent from './components/ProjectsContent';
import ProjectButtons from './components/ProjectButtons';
import "./Projects.css";

const sidebarData = [
  { id: 1, welcome: "", home: "HOME", projects: "PROJECTS", gitHub: "GITHUB" },
];

const projectButtonsData = [
  { id: 1, ContactListButton: "Open Project"}
];


function Projects() {
  useEffect(() => {
    const layer1 = document.querySelector('.layer1');
    const sidebar = document.querySelector('.sidebar');

    const handleScroll = () => {
      const scrollThreshold = 10; // Adjust this value as needed
      if (window.scrollY > scrollThreshold || window.innerWidth < 900 || window.innerHeight < 900) {
        layer1.classList.add('fade-out');
        sidebar.style.display = 'none'; // Hide the sidebar
      } else {
        layer1.classList.remove('fade-out');
        sidebar.style.display = 'block'; // Show the sidebar
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="container">
        <div className="sidebar">
          <div className="centered-sidebar">
            <Sidebar sidebar={sidebarData} />
            
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