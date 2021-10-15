import React from 'react'
import homePhoto from '../images/homePhoto.jpeg';
import Nav from './Nav';
import Footer from './Footer';
import Skills from './Skills';

function About() {
    return (
        <div>
            <div className="about-header">
            <Nav />
            </div>
            <div className="about-body">
            <img src={homePhoto} alt="Lindsay Wilhelm" className="home-photo"/>
            <h4>I'm Lindsay</h4>
            <p>I'm a recent graduate of the Full-Stack Web Development certificate from York University.</p>
            <Skills className="skillbar"/>
            </div>
            <div>
            <Footer />
            </div>
        </div>
    )
}

export default About;
