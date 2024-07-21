import React, { useEffect } from 'react';
import Navbar from '../components/NavBar';
import HomeContent from '../components/HomeContent';
import "./Home.css";

const NavBarData = [
  {home: "HOME", projects: "PROJECTS", gitHub: "GITHUB" },
];

function Home() {
  useEffect(() => {
    const MainWave = document.querySelector('.MainWave');

    const handleScroll = () => {
      const scrollThreshold = 10; // Adjust this value as needed
      if (window.scrollY > scrollThreshold || window.innerWidth < 500 || window.innerHeight < 500) {
        MainWave.classList.add('fade-out');
      } else {
        MainWave.classList.remove('fade-out');
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
    <div className="container">
      <div className="navbar">
        <div className="centered-navbar">
          <Navbar navbar={NavBarData} />
        </div>
      </div>
      <HomeContent />
    </div>
  );
}

export default Home;
