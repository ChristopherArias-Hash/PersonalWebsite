import React from 'react';
import Sidebar from './components/SideBar';

const sidebarData = [
  { id: 1, welcome: "", home: "HOME", aboutMe: "ABOUT ME", projects: "PROJECTS", gitHub: "GITHUB" },
];

function AboutMe() {
  return (
    <div>
      <div className="sidebar">
        <div className="centered-sidebar">
          <Sidebar sidebar={sidebarData} />
        </div>
      </div>
      <p>Main Page</p>
      {/* Your main page content */}
    </div>
  );
}

export default AboutMe;
