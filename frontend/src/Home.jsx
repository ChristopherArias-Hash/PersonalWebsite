import React from 'react';
import Sidebar from './components/SideBar';
import HomeContent from './components/HomeContent';
import "./Home.css";



const sidebarData = [
  { id: 1, welcome: "", home: "HOME", aboutMe: "ABOUT ME", projects: "PROJECTS", gitHub: "GITHUB" },
];

function Home() {
  return (
    <>
      
      <div className="sidebar">
        <div className="centered-sidebar">
          <Sidebar sidebar={sidebarData} />
        </div>
      </div>
      
      <div className="container">
      <HomeContent />
      
      </div>

      </>
  );
}

export default Home;
