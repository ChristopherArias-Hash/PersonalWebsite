import React from 'react';
import Sidebar from './components/SideBar';
import HomeContent from './components/HomeContent';
import "./Home.css";



const sidebarData = [
  { id: 1, welcome: "", home: "HOME", aboutMe: "ABOUT ME", projects: "PROJECTS", gitHub: "GITHUB" },
];

const layer1 = document.querySelector('.layer1');

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) { // Adjust the scroll threshold as needed
    layer1.classList.add('fade-out');
  } else {
    layer1.classList.remove('fade-out');
  }
});

function Home() {
  return (
    <>
    
    <div className="container">
      
    <div className="sidebar">
        <div className="centered-sidebar">
          <Sidebar sidebar={sidebarData} />
        </div>
         </div>
        <HomeContent />
     
      </div>
      
      
      </>
  );
}

export default Home;
