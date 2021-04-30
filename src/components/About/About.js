import React from 'react';
import profile from '../../images/aboutme.jpg';
import Button from '../Button';
import { AiOutlineArrowDown } from 'react-icons/ai';



function About({ about, aboutRef, aboutAnimation }) {


    return (
        <div className={about ? "about dark-mode" : "about"} ref={aboutRef}>
            <div className={aboutAnimation ? "about-photo left-animation" : "about-photo"}>
                <img src={profile} alt="" />
            </div>
            <div className={aboutAnimation?"about-content right-animation":"about-content"}>
                <h2 className="about-title">About Me</h2>
                <div className="about-des">
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sit, atque magnam veritatis veniam dicta.</p>
                </div>
                <div>
                    <div className="about-button">
                        <Button title="CV" icon={<AiOutlineArrowDown className="button-icon" />} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
