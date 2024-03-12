import React from "react";
import WebImage from './images/PersonalImage.jpg';

const HomeContent = ({}) => {
    return (
        <>
            <div className="centered-content">
                <table>
                    <tr>
                        <th className="home-table">
                            <h1 className="main-text">
                                Hello! 
                                <br />
                                My name is Christopher Arias, a full-stack developer. 
                                <br />
                                Welcome to my website!
                                <br />
                            </h1>
                        </th>
                        <th>
                            <img src={WebImage} alt="Photo of myself" className="personal-image-container" />
                        </th>
                    </tr>
                </table>
                <div class ="spacer layer1"> </div>

            </div>
          
        </>
    );
};

export default HomeContent;
