import React from 'react';
import './styleProject.css';
import {projects} from '../project-data';

const DesktopLayout = (props)=>{
   const {showProject, activeProject, showList, activeButton} = props.state;
   return (
      <div className="projects-wrapper">
            <div className={`active-project ${showProject ? 'show-active' : null}`}>
               <div className="img-wrap"><img src={`./${projects[activeProject].img}`}/></div>
               <div className="desc">
                  <div>{projects[activeProject].desc}</div><br/>
                  <div>Tech used: {projects[activeProject].tech}</div><br/>
                  <div className="buttons">
                     <a href={projects[activeProject].url} target="_blank"><button>Website</button></a>
                     <a href={projects[activeProject].github} target="_blank"><button>Github</button></a>
                  </div>
               </div>
            </div>
            <div className={`project-list ${showList ? 'show-list' : null}`}>
               {projects.map((project, index) => {
                  return (
                     <div className={`each-project ${index === activeButton ? 'each-active' : null}`} onClick={()=>{props.toggleActive(index)}}>
                        <div className="project-name">{project.name}</div>
                        <img src={`./${project.img}`}/>
                     </div>
                  )
               })}
            </div>
			</div>
   )
}

export default DesktopLayout;
