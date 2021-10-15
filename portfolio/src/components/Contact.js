import React from 'react'
import social from '../images/social.jpeg';
import Nav from './Nav';
import Footer from './Footer';

function Contact() {
    return (
        <div>
            <Nav />
        <div>
            <h2>The best way to reach me is through email</h2>
                <p>Let's chat! Click the image below</p>
                <a href="mailto:lindsaywilhelm11@gmail.com">
                    <img src={social} alt="Social icons" className="contact-img" />
                </a>
        </div>
            <Footer />
        </div>
    )
}

export default Contact;
