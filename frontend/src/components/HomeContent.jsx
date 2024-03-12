import React from "react";
import WebImage from './images/PersonalImage.jpg';

const HomeContent = () => {
    return (
        <>
            <div className="centered-content">
                <h1 className="main-text">
                    Hello! <br />
                    My name is Christopher Arias, a full-stack developer. <br />
                    Welcome to my website! <br />
                </h1>
                <img src={WebImage} alt="Photo of myself" className="personal-image-container" />
                <div className="spacer layer1"></div>
            </div>
            
        </>
    );
};

export default HomeContent;
