import React from 'react';
import { MdDateRange } from 'react-icons/md';
import Button from '../Button';


function ProjectsDetails({title,projectsAnimation}) {
    return (
        <div className={projectsAnimation?"projects-details projects-details-animation":"projects-details"}>
            <h2>{title}</h2>
            <div className="date">
                <ul>
                    <li><MdDateRange className="icons" /></li>
                    <li><b>April 1,2021</b></li>
                </ul>
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut magni in aspernatur ea beatae necessitatibus aliquid culpa, optio perferendis iure?</p>
            <div className="projects-details-button">
                <Button title="View Project" />
            </div>
        </div>
    )
}

export default ProjectsDetails
