import React from 'react'
import { Link } from 'react-router-dom';
import morainePhoto from '../images/morainePhoto.jpg';
import Nav from './Nav';
import Footer from './Footer';

function Home() {
    

    return (
        <div className="main-div">
            <div className="home-container">
                <Nav />
                <img src={morainePhoto} alt="Moraine Lake" className="moraine-photo" />
                <h1 className="header-name">Lindsay Wilhelm</h1>
                <h3 className="header-subtitle">Web Development</h3>
                <Link to="/about"  className="home-paragraph">Welcome to my personal site!</Link>
                <Footer />
            </div>
        </div>
       
    )
}

export default Home;
