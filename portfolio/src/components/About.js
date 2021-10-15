import React from 'react'
import office from '../images/office.jpeg';
import Jedi from '../images/Jedi.JPG';
import Scotland from '../images/Scotland.jpeg';
import banff from '../images/banff.jpeg';
import Nav from './Nav';
import Footer from './Footer';
import Skills from './Skills';

function About() {
    return (
        <div>
            <div className="about-header">
                <Nav />
            </div>
            <br />
            <div className="about-body">
                <div className="about-top">
                    <h4 className="about-heading">I'm Lindsay</h4>
                    <p>I'm a recent graduate of the Full-Stack Web Development certificate from York University.</p>
                </div>
                <div>
                <img src={office} alt="An office" className="office-photo" />
                </div>
                <div className="about-bottom">
                    <h4 className="about-subheading">My skills include:</h4>
                    <Skills className="skillbar"/>
                </div>
            </div>
            <hr />
            <div className="about-images">
                <p>When I'm not coding, I spend my time travelling, listening to music, playing video games, working out, or taking my dog to the park ☺</p>
                <br />
                <img src={banff} alt="Lindsay snowboarding" className="banff-photo" />
                <img src={Jedi} alt="Husky named Jedi" className="jedi-photo" />
                <img src={Scotland} alt="Lindsay in Scotland" className="scotland-photo" />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default About;
