import React from "react";
import WebImage from './images/PersonalImage.jpg';

const HomeContent = ({}) => {
    return (
        <div className="centered-content">
            <h1>Hello, my name is Christopher Arias a full-stack developer. Welcome to my website!</h1>
            <img src={WebImage} alt="Description of the image" className= "personal-image-container"/>
        </div>
    );
};

export default HomeContent;
