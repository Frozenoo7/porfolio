import React from 'react'
import Button from '../Button'
import ProjectImage from './ProjectImage'
import ProjectsDetails from './ProjectsDetails'
import projectone from '../../images/projectone.jfif';
import projecttwo from '../../images/projecttwo.jfif';
import projectthree from '../../images/projectthree.jfif';




function Projects({ background, projectsOne, projectsTwo, projectsThree, projectsOneAnimation, projectsTwoAnimation,projectsThreeAnimation }) {
    return (
        <div className={background ? "projects dark-mode" : "projects"} >
            <div className="projects-header">
                <div className="projects-title">
                    <h2>Some Of My Works</h2>
                    <p>Projects that i have done yet</p>
                </div>
                <div className="tools-used">
                    <h2>Tools Used</h2>
                    <div className="tools-used-button">
                        <ul>
                            <li>
                                <Button title="HTML" />
                            </li>
                            <li>
                                <Button title="CSS" />
                            </li>
                            <li>
                                <Button title="Javascript" />
                            </li>
                            <li>
                                <Button title="React" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className="projects-lists">
                <div className="project-one" ref={projectsOne}>
                    <div className={projectsOneAnimation ? "one-left left-animation" : "one-left"}>
                        <ProjectImage image={projectone} title="Title One" />
                    </div>
                    <div className="one-right">
                        <ProjectsDetails title="Title One" projectsAnimation={projectsOneAnimation} />
                    </div>
                </div>
                <div className="project-two" ref={projectsTwo}>
                    <div className="two-left">
                        <ProjectsDetails title="Title One" projectsAnimation={projectsTwoAnimation} />
                    </div>
                    <div className={projectsTwoAnimation ? "two-right left-animation" : "two-right"}>
                        <ProjectImage image={projecttwo} title="Title One" />
                    </div>
                </div>
                <div className="project-three" ref={projectsThree}>
                    <div className={projectsThreeAnimation ? "three-left left-animation" : "three-left"}>
                        <ProjectImage image={projectthree} title="Title One" />
                    </div>
                    <div className="three-right">
                        <ProjectsDetails title="Title One" projectsAnimation={projectsThreeAnimation} />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Projects
