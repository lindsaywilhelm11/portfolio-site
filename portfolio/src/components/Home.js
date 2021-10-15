import React from 'react'
// import morainePhoto from '../images/morainePhoto.jpg';
import main from '../images/main.jpeg';
import Nav from './Nav';
import Footer from './Footer';

function Home() {
    

    return (
        <div className="main-div">
            <div className="home-container">
                <Nav />
                <img src={main} alt="Laptop and Coffee" className="home-photo" />
                <h1 className="header-name">Lindsay Wilhelm</h1>
                <h3 className="header-subtitle">Web Developer</h3>
                <Footer />
            </div>
        </div>
       
    )
}

export default Home;
