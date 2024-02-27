import React from "react";

const Sidebar = ({ sidebar }) => {
  return (
    <div>
        {sidebar.map((item) => (
          <h1  className = "welcomeSign" key={item.id}>{item.welcome}</h1>
        ))}
      <div>
        {sidebar.map((item) => (
          <button className = "SBbuttons" key={item.id}>{item.home}</button>
        ))}
      </div>
      <div>
        {sidebar.map((item) => (
          <button  className = "SBbuttons" key={item.id}>{item.aboutMe}</button>
        ))}
      </div>
      <div>
        {sidebar.map((item) => (
          <button className = "SBbuttons" key={item.id}>{item.projects}</button>
        ))}
      </div>
      <div>
        {sidebar.map((item) => (
          <button className = "SBbuttons" key={item.id}>{item.gitHub}</button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;