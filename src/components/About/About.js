import React, { useContext } from 'react';

import './About.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutData } from '../../data/aboutData'



function About() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="about" id="about" style={{backgroundColor: theme.secondary}}>
            <div className="line-styling">
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-line" style={{backgroundColor: theme.primary}}></div>
            </div>
            <div className="about-body">
                <div className="about-description">
                    <h2 style={{color: theme.primary}}>{aboutData.title}</h2>
                    <p style={{color:theme.tertiary80}}>{aboutData.description1}<br/><br/>Dedicated and efficient Full-stack Agile Developer with an Environmental Science degree (focusing on remote sensing data analytical skills) from the University of Washington. Have intermediate experience in Python (panda library). Recently graduated with a Certificate in Full Stack Web Development from Coding Boot Camp from the University of Washington. Well-rounded professional with communication and organizational skills. I really enjoy using my skill sets to support the entrepreneurial culture of startups and big companies.<br/><br/> I recently worked in collaboration with a team of five to develop a single-page MERN stack application using MongoDB, GraphQL API, Express.js, and Node.js server with a React front end, implementing user authentication with JWT to build a user-focused networking hub where different professionals can network to tackle family situations to create more connections to help the foster system. <br/><br/>Past experience in environmental data analysis has taught me current data is key to making informed scientific decisions in an ever-changing world. Led me to focus on object-oriented programming skills to automate and create efficient applications as well as applying my additional HTML, CSS, and JavaScript skills to solve challenging problems and foster growing success.</p>
                </div>
                <div className="about-img">
                    <img 
                        src={aboutData.image === 1 ? theme.aboutimg1 : theme.aboutimg2}  
                        alt="" 
                    />
                </div>
            </div>
        </div>

    )
}

export default About
