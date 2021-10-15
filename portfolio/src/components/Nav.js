import React from 'react'
import { Link } from 'react-router-dom';

function Nav() {
    

    return (
        <div className='navLink'>
            <ul>    
                <Link className="navbar" to="/">Home</Link>
                <Link className="navbar" to="/about">About</Link>
                <Link className="navbar" to="/resume">Resume</Link>
                <Link className="navbar" to="/contact">Contact</Link>
            </ul>
        </div>
    )
}

export default Nav;
