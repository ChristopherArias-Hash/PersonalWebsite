import React from "react";
import PersonalImage from '../images/PersonalImage.jpg';
import Resume from '../images/resume.pdf';
import { ReactComponent as LinkedInLogo } from '../images/LinkedInLogo.svg';

const HomeContent = () => {
    return (
        <>
            <div className="centered-content">
                <h1 className="main-text">
                    <div className="content-headers">Hello!</div>
                    My name is Christopher Arias, a full-stack developer. <br />
                    Welcome to my website! <br />
                </h1>
                <div className="image-container">
                    <img src={PersonalImage} alt="Photo of myself" className="personal-image-container" />
                    <div className="centered-buttons">
                        <button className="picture-buttons" onClick={() => window.location.href = 'mailto:christopherarias29@gmail.com'}>EMAIL ME</button>
                        <button
                            className="picture-buttons"
                            onClick={() => {
                                const link = document.createElement('a');
                                link.href = Resume;
                                link.download = 'resume.pdf';
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                            }}
                        >
                            RESUME
                        </button>
                        <a href="https://www.linkedin.com/in/christopher-arias-736a97205/" target="_blank" rel="noopener noreferrer">
                            <LinkedInLogo className="bi-linkedin" />
                        </a>
                    </div>
                </div>
                <div className="spacer MainWave"></div>
            </div>
            <div className="centered-content2">
                <h1>
                    <div className="content-headers">ABOUT ME:</div>
                    I am currently a Junior studying computer science at California State Channel Islands. 
                    I'm currently looking for an internship for Software Engineering! <br />
                </h1>
            </div>
            <div className="centered-content3">
                <h1>
                    <div className="content-headers">SKILLS:</div>  
                    Python, Java,<br />
                    React, Node JS, JavaScript, HTML, CSS,  <br />
                    Flask, SQLAlchemy<br />
                    Git, Github<br />
                   
                </h1>
                <h1>
                    <div className="content-headers">Certifications:</div>  
                    <a href="https://www.coursera.org/account/accomplishments/specialization/U52H673Z4CH8">
                        Google IT Automation with Python
                    </a>
                </h1>
                <div className="spacer SideWave1"></div>
                <div className="spacer SideWave2"></div>
            </div>
        </>
    );
};

export default HomeContent;
