import React from 'react';

function ProjectImage({image,title}) {
    return (
        <div className="projects-image">
            <div className="image">
                <img src={image} alt="" />
            </div>
            <div className="text">
                <h2>{title}</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas exercitationem doloribus repellendus, modi iure repellat.</p>
            </div>
        </div>
    )
}

export default ProjectImage
