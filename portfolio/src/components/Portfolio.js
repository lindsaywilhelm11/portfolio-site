import React from 'react'
import { Link } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';

function Portfolio() {
    return (
        <div>
            <Nav />
            <Link to="../images/Jedi.JPG" target="_blank" download>Download</Link>
            <Footer />
        </div>
    )
}

export default Portfolio
