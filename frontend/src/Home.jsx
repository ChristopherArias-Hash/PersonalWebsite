import React, { useEffect } from 'react';
import Sidebar from './components/SideBar';
import HomeContent from './components/HomeContent';
import "./Home.css";

const sidebarData = [
  { id: 1, welcome: "", home: "HOME", aboutMe: "ABOUT ME", projects: "PROJECTS", gitHub: "GITHUB" },
];

function Home() {
  useEffect(() => {
    const layer1 = document.querySelector('.layer1');

    const handleScroll = () => {
      if (window.scrollY > 10 || window.innerWidth < 900) {
        layer1.classList.add('fade-out');
      } else {
        layer1.classList.remove('fade-out');
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
        <HomeContent />
      </div>
    </>
  );
}

export default Home;