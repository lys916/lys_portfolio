import React from 'react';
import './styleProject.css';

const Project = (props)=>{
    return (
        <div 
            className={ `project 
            ${props.showProject ? 'show-project' : null}
            ${props.showOverlay === props.name ? 'show-overlay' : null}`} 
            onMouseOver={()=>{props.handleHover(props.index)}} onMouseLeave={props.handleLeave}
        >
            {props.project.name}
            <img src={`./${props.project.img}`}/>
            <div className="tech-used">
                {/* <span>{props.project.desc}</span> */}
            </div>
        </div>
    )
}

export default Project;