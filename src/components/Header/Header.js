import React, { useState } from 'react'
import Button from '../Button';
import { FaBriefcase, FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';
import header from '../../images/header.png';




function Header() {


    const [xAxis, setxAxis] = useState(0);
    const [yAxis, setyAxis] = useState(0);
    const [transition, setTransition] = useState(0);

    const mouseMove = (e) => {

        let random = Math.random() + 1;
        // let x =e.pageX/10;
        // let y =e.pageY/10;
        let x = (window.innerWidth - e.pageX * 1.8) / 10;
        let y = (window.innerHeight - e.pageY * 1.8) / 10;
        // console.log(random);

        setxAxis(x);
        setyAxis(y);
        setTransition(200);

    }
    const mouseLeave = () => {
        setxAxis(0);
        setyAxis(0);
        setTransition(500);

    }


    return (
        <div className="main-header">
            <div className="header">
                <div className="header-title">
                    <h1 className="intro">
                        FRONTEND DEVELOPER AND DESIGNER
                </h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque culpa aliquam unde accusantium enim commodi?</p>
                    <div className="header-button"><Button title={"Projects"} icon={<FaBriefcase className="button-icon"/>} /></div>
                    <div className="icons-list" >
                        <ul>
                            <li><a href=""><FaGithub className="icons" /></a></li>|
                        <li><a href=""><FaFacebook className="icons" /></a></li>|
                        <li><a href=""><FaInstagram className="icons" /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="header-image" onMouseMove={mouseMove} onMouseLeave={mouseLeave}>
                    <img src={header} className="header-image-png" style={{
                        transform: `translateX(${yAxis}px) translateY(${xAxis}px)`, transition: `all ${transition}ms ease`
                    }} alt="" />
                </div>
            </div>
           <div className="animation-box">
           <ul className="box">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
           </div>
        </div>
    )
}

export default Header
