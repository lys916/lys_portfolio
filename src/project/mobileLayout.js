import React from 'react';
import './styleProject.css';
import {projects} from '../project-data';

const MobileLayout = (props)=>{
   const {showProject, activeProject, showList, activeButton, width} = props.state;
   return (
      <div className="mb-wrapper">
         {projects.map((project, index) => {
            return (
               <div className='mb-project'>
                  <div className='name'>{project.name}</div>
                  <img src={`./${project.img}`}/>
                  <div>{projects[activeProject].desc}</div><br/>
                  <div>Tech used: {projects[activeProject].tech}</div><br/>
                  <div className="buttons">
                     <button>Website</button>
                     <button>Github</button>
                  </div>
               </div>
            )
         })}
      </div>
   )
}

export default MobileLayout;
