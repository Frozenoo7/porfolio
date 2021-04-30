import React from 'react'
import Button from '../Button'
import { FaBriefcase, FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';



function Footer() {

    return (
        <div className="footer">
            <div className="footer-title">
                <h2>Nice To Meet You! Let's Work Together</h2>
                <div className="footer-btn">
                    <Button title="Hire Me" />
                </div>
                <ul>
                    <li><a href=""><FaGithub className="icons" /></a></li>|
                        <li><a href=""><FaFacebook className="icons" /></a></li>|
                        <li><a href=""><FaInstagram className="icons" /></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
