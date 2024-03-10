import React from "react";
import WebImage from './images/PersonalImage.jpg';

const HomeContent = ({}) => {
    return (
        
        <div className="centered-content">
            <table>
                <tr>
                <th className="home-table"><h1 className = "main-text">
                Hello! 
                <br />
                My name is Christopher Arias a full-stack developer. 
                <br />
                Welcome to my website!
                <br />
                </h1></th>
                <th><img src={WebImage} alt="Description of the image" className= "personal-image-container"/></th>
                </tr>
            </table>
            
        </div>
    );
};

export default HomeContent;
