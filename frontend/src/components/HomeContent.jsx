import React from "react";
import WebImage from './images/PersonalImage.jpg';
import Resume from './images/resume.pdf'
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
                    <img src={WebImage} alt="Photo of myself" className="personal-image-container" />
                <div className="centered-buttons">
                    <button className="picture-buttons" onClick={() => window.location.href = 'mailto:christopherarias29@gmail.com'}>EMAIL ME</button>
                    <button
                    className="picture-buttons"
                    onClick={() => {
                        const link = document.createElement('a');
                        link.href = (Resume);
                        link.download = 'resume.pdf';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                    }}
                    >
                    RESUME
                    </button>
                    <a href="https://www.linkedin.com/in/christopher-arias-736a97205/" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 
                            1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 
                            1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 
                            1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                        </svg>
                    </a>
                </div>
                </div>
                <div className="spacer layer1"></div>
            </div>
            <div className="centered-content2">
                <h1><div className="content-headers">About Me:</div>
                    I am currently a Junior studying computer science at California State Channel Islands. 
                    I'm currently looking for an internship for Software Engineering! <br />
                </h1>
            </div>
            <div className="centered-content3">
            <h1><div className="content-headers">Technologies :</div>  
                Python, Java,<br />
                React, Node JS, JavaScript, HTML, CSS,  <br />
                Flask, SQLAlchem<br />
                
            </h1>
         
            <h1><div className="content-headers">Certifcations:</div>  
                <a href ="https://www.coursera.org/account/accomplishments/specialization/U52H673Z4CH8">
                    Google IT Automation with Python</a>
            </h1>
            <div className="spacer blob"></div>
            <div className="spacer blob2"></div>
                </div>
        </>
    );
};

export default HomeContent;
