import React from 'react'
import homePhoto from '../images/homePhoto.jpeg';
import Nav from './Nav';
import Footer from './Footer';

function Contact() {
    return (
        <div>
            <Nav />
        <div className="contact-body">
                <h5>Let's chat!</h5>
                <p className="contact-paragraph">Click the image below</p>
                <a href="mailto:lindsaywilhelm11@gmail.com">
                    <img src={homePhoto} alt="Lindsay Wilhelm" className="contact-img"/>
                </a>
        </div>
            <Footer />
        </div>
    )
}

export default Contact;
