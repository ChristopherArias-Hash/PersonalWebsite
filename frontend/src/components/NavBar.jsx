import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ navbar }) => {
  return (
    <div>
      {navbar.map((item) => (
        <h1 className="welcomeSign" key={item.id}>{item.welcome}</h1>
      ))}
      <div>
        {navbar.map((item) => (
          <Link to="/" className="navbuttons" key={item.id}>
            {item.home}
          </Link>
        ))}
        {navbar.map((item) => (
          <Link to="/Projects" className="navbuttons" key={item.id}>
            {item.projects}
          </Link>
        ))}
        {navbar.map((item) => (
          <a href="https://github.com/ChristopherArias-Hash" target="_blank" className="navbuttons" key={item.id}>
            {item.gitHub}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;