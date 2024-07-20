import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ navbar }) => {
  return (
    <div>
      {navbar.map((item) => (
        <div key={item.id}>
          <h1 className="welcomeSign">{item.welcome}</h1>
          <div>
            <Link to="/" className="navbuttons">
              {item.home}
            </Link>
            <Link to="/Projects" className="navbuttons">
              {item.projects}
            </Link>
            <a href="https://github.com/ChristopherArias-Hash" target="_blank" rel="noopener noreferrer" className="navbuttons">
              {item.gitHub}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
