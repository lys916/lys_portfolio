import React from 'react';
import Project from './Project';
import './styleProject.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselSlider from "react-carousel-slider"
import {projects} from '../project-data';

class ProjectList extends React.Component {
    state = {
        projects,
        showProject: false,
		  showDesc: false,
		  index: null
    }
    componentDidMount(){
        setTimeout(()=>{
			this.setState({showProject: true});
		},1000);
    }

    handleHover = (index)=>{
        this.setState({index, showDesc: true});
	 }

	 handleLeave = ()=>{
		this.setState({index: null, showDesc: false});
  }

    render (){ 
       console.log(this.state.index);
      let projectsCpnts= projects.map((item, index) => 
      <div className={`
         ${this.state.showProject ? 'show-project' : null}
         ${this.state.showOverlay === this.state.name ? 'show-overlay' : null}`
      } key = {index} style={projectStyle}>
          <img src = {item.img} onMouseOver={()=>{this.handleHover(index)}} onMouseLeave={this.handleLeave}></img>
          {/* <p style = {textBoxStyle} >{item.name}</p>
          <p style = {textBoxStyle2} >{item.des}</p> */}
      </div>
  );
        return (
			  	<div className="list">

              <CarouselSlider slideCpnts = {projectsCpnts}
                  sliderBoxStyle={sliderBoxStyle}
                  buttonSetting = {{placeOn: 'middle-outside'}}
                  dotsSetting = {{placeOn: 'top'}}
              />
      
              lksjflkjsdkfj
					{/* <div className="project-list">
						{
							this.state.projects.map((project, index)=>{
									return (
										<Project 
											project={project} 
											showProject={this.state.showProject}
											handleHover={this.handleHover}
											index={index}
											handleLeave={this.handleLeave}
										/>
									)
							})
						}
						
					</div> */}
					
					<div className={`description ${this.state.showDesc ? 'show-desc' : null }`}>
						{projects[this.state.index] ? <div>{projects[this.state.index].desc}</div> : null}
					</div> 
               <div>
						{projects[this.state.index] ? <div>{projects[this.state.index].desc}</div> : null}
					</div> 
               
               
				</div>
        )
    }
}

const sliderBoxStyle = {
   background: 'black',
   width: '70%'
}
const projectStyle = {
   background: 'blue'
}

export default ProjectList;