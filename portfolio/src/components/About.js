import React from 'react'
import homePhoto from '../images/homePhoto.jpeg';
import Jedi from '../images/Jedi.JPG';
import Scotland from '../images/Scotland.jpeg';
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
                <br />
                <p>My skills include:</p>
                <Skills className="skillbar"/>
            </div>
            <hr />
            <div>
                <p>When I'm not coding, I spend my time travelling, listening to music, playing video games, working out, or taking my dogs to the park</p>
                <img src={Jedi} alt="Husky named Jedi" className="about-photos" />
                <img src={Scotland} alt="Lindsay in Scotland" className="about-photos" />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default About;
