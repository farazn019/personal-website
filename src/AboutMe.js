import React from "react";

import myPicture from './img/my-picture.jpeg';

import './AboutMe.css';

export function AboutMe() {

    return(
        <div className="about-me-content">
            <div className="about-me-text-content">
                <h2 className="about-me-header">About Me</h2>
                <p className="about-me-text">Hi! My name is Faraz, and I am a Computer Science Student at the University Of Windsor.<br/>
                I have completed 7 internships over the span of my undergraduate degree thus far.<br/>
                My technical interests include front-end development, back-end development, devops,<br/>
                testing, programming embedded systems, Data Analysis, Machine Learning, and much more!<br/><br/>

                I love learning new things. It can be anything, ranging from emerging technologies in the tech industry<br/>
                to topics in non-technical areas such as Finance, Economics, Art, History, and Geography.<br/><br/>
                </p>
            </div>

            <div className="about-me-image">
                <img src={myPicture} alt="A picture of me" className="my_picture"/>
            </div>

        </div>
    );
}