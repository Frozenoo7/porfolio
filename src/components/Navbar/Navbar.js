import React, { useState, useRef, useEffect } from 'react'

function Navbar({ background }) {
    const [nav, setNav] = useState(false);
    const [stickyNav, setstickyNav] = useState(false);
    const navbar = useRef();

    const stickyNavbar = () => {
        if (window.pageYOffset > navbar.current.offsetTop) {
            setstickyNav(true);
        } else {
            setstickyNav(false);
        }
    }

    useEffect(() => {

        window.addEventListener('scroll', stickyNavbar);

    });

    return (
        <nav ref={navbar} className={stickyNav ? "nav sticky" : "nav", background?"nav sticky navbar-darkmode":"nav sticky"}>
            <div className="navbar">
                <div className="navbar-brand">
                    <h3>Portfolio</h3>
                </div>
                <a href="#" className="toggle-button" onClick={() => { setNav(!nav); }}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </a>
                <div className={nav ? 'navbar-links active' : 'navbar-links'}>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar
