import React, { useState, useRef, useEffect } from "react";

import './App.css';
import './sass/app.scss';
import Navbar from './components/Navbar/Navbar';
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";


function App() {

  const [loader, setLoader] = useState(true);

  // darkmode
  const [about, setAbout] = useState(false);
  const aboutRef = useRef();

  // darkmode
  const darkMode = () => {
    if (window.pageYOffset > aboutRef.current.offsetTop) {
      setAbout(true);
    }
    else {
      setAbout(false);
    }
  }
  //about animation 

  const [aboutAnimation, setaboutAnimation] = useState(false);

  const aboutAnimationLeft = () => {
    if (aboutRef.current.getBoundingClientRect().top < window.innerHeight / 1.8) {
      setaboutAnimation(true);
    }
  }

  // projects animation

  const projectsOne = useRef();
  const projectsTwo = useRef();
  const projectsThree = useRef();
  const [projectsOneAnimation, setprojectsOneAnimation] = useState(false);
  const [projectsTwoAnimation, setprojectsTwoAnimation] = useState(false);
  const [projectsThreeAnimation, setprojectsThreeAnimation] = useState(false);


  const projectsOneAnimationScroll = () => {
   

    if (projectsOne.current.getBoundingClientRect().top < window.innerHeight / 1.8) {
      setprojectsOneAnimation(true);
    }
  }
  const projectsTwoAnimationScroll = () => {
    if(projectsTwo.current.getBoundingClientRect().top<window.innerHeight/1.8){
      setprojectsTwoAnimation(true);
    }
  }
  const projectsThreeAnimationScroll = () => {
    if(projectsThree.current.getBoundingClientRect().top<window.innerHeight/1.8){
      setprojectsThreeAnimation(true);
    }
  }


  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 4000);

    // darkmode
    window.addEventListener("scroll", darkMode);

    // about animation
    window.addEventListener("scroll", aboutAnimationLeft);

    // projects one animation
    window.addEventListener("scroll", projectsOneAnimationScroll);

    // projects two animation
    window.addEventListener("scroll",projectsTwoAnimationScroll);

     // projects three animation
     window.addEventListener("scroll",projectsThreeAnimationScroll);
    
  });

  return (
    <>
      {loader ? (
        <div className="preloader">
          <h4 className="text">Hold on! All you need is patience</h4>
        </div>
      ) : (
        <>
          <Navbar background={about} />
          <Header />
          <About about={about} aboutRef={aboutRef} aboutAnimation={aboutAnimation} />
          <Projects background={about} projectsOne={projectsOne} projectsOneAnimation={projectsOneAnimation} projectsTwo={projectsTwo} projectsTwoAnimation={projectsTwoAnimation} projectsThree={projectsThree} projectsThreeAnimation={projectsThreeAnimation} />
          <Contact background={about}  />
          <Footer background={about} />
        </>
      )}
    </>
  );
}


export default App;
