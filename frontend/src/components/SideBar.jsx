import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ sidebar }) => {
  return (
    <div>
      {sidebar.map((item) => (
        <h1 className="welcomeSign" key={item.id}>{item.welcome}</h1>
      ))}
      <div>
        {sidebar.map((item) => (
          <Link to="/" className="SBbuttons" key={item.id}>
            {item.home}
          </Link>
        ))}
      </div>
      <div>
        {sidebar.map((item) => (
          <Link to="/AboutMe" className="SBbuttons" key={item.id}>
            {item.aboutMe}
          </Link>
        ))}
      </div>
      <div>
        {sidebar.map((item) => (
          <Link to="/projectApp" className="SBbuttons" key={item.id}>
            {item.projects}
          </Link>
        ))}
      </div>
      <div>
        {sidebar.map((item) => (
          <Link to="https://github.com/ChristopherArias-Hash" target="_blank" className="SBbuttons" key={item.id}>
            {item.gitHub}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
