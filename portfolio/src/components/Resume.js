import React from 'react'
import Nav from './Nav';
import Footer from './Footer';
import code2 from '../images/code2.jpeg';
import study1 from '../images/study1.jpeg';

function Resume() {
    return (
        <div>
            <Nav />
            <img src={code2} alt="Coding" className="code2"/>
            <div className="tech-ed">
                <h3 className="resume-title">Tech Related Education</h3>
                <p><b>Nanda</b> | <i>October 2021 - Present</i></p>
                <p>Nanda is a free digital skills training program with a focus on Indigenous women in the London area offered by Nokee Kwe. It focuses on HTML, CSS, JavaScript, and Python as well as the process of building a freelance business.</p>
                <br />
                <p><b>Certificate in Full-Stack Web Development</b> | <i>September 2020 - August 2021</i></p>
                <p>This program through York University taught the fundamentals of web development such as HTML, CSS, JavaScript, NodeJS, REACT, MySql, Docker, GCP, and more. </p>
            </div>
            <img src={study1} alt="Coding" className="study1"/>
            <div className="other-ed">
                <h3 className="resume-title">Other Education</h3>
                <p><b>Bachelor of Arts</b> | <i>September 2015 - April 2019</i></p>
                <p>Through this program I was able to study a variety of subjects such as landscape architecture, psychology, linguistics, geography, and more. I was also able to study environmental science abroad in Malmo, Sweden.</p>
            </div>
            <Footer />
        </div>
    )
}

export default Resume;
