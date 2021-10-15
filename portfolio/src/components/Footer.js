import React from 'react'
import { SocialIcon } from 'react-social-icons';



function Footer() {
    
    return (
        <div className="footer">
            <p>Get in Touch</p>
            <SocialIcon url="https://github.com/lindsaywilhelm11" className="github"/>
            <SocialIcon url="https://www.linkedin.com/in/lindsay-wilhelm-abab66183/" className="linkedin"/>
            <SocialIcon url="mailto:lindsaywilhelm11@gmail.com" className="mail"/>

            <p>Copyright &copy; 2021 Lindsay Wilhelm</p>
        </div>
    )
}

export default Footer
