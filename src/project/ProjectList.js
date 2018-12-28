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
        this.setState({index, showDesc: true},);
	 }

	 handleLeave = ()=>{
		this.setState({index: null, showDesc: false});
  }

    render (){ 
        let rBtnCpnt = (<div className="material-icons" style={{fontSize: 150, color: 'white'}}>keyboard_arrow_right</div>);
        let lBtnCpnt = (<div className="material-icons" style={{fontSize: 150, color: 'white'}}>keyboard_arrow_left</div>);

      let projectsCpnts= projects.map((item, index) => 
        <div className={`
            ${this.state.showProject ? 'show-project' : null}
            ${this.state.showOverlay === this.state.name ? 'show-overlay' : null}`} 
            key = {index}>
            <p className="title" style={textBoxStyle}>{item.name}</p>
            <a href={item.url} target="_blank"><img className='hover' src = {item.img} onMouseOver={()=>{this.handleHover(index)}} onMouseLeave={this.handleLeave}></img></a>
        </div>

        
  );
        return (
			<div className="list">

              <CarouselSlider slideCpnts = {projectsCpnts}
                  sliderBoxStyle={sliderBoxStyle}
                  buttonSetting = {{placeOn: 'middle-outside'}}
                  dotsSetting = {{placeOn: 'top'}}
                  itemsStyle={itemsStyle}
                  rBtnCpnt = {rBtnCpnt}
                lBtnCpnt = {lBtnCpnt}
              />
      
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
						{projects[this.state.index] ? <div>{projects[this.state.index].desc}<br/><br/>Tech used: {projects[this.state.index].tech}</div> : null}
					</div>         
			</div>
        )
    }
}

let btnStyle = {
    fontSize: "36px",
    color: "white"
}

const sliderBoxStyle = {
   background: 'black',
   width: '75%',
}
const textBoxStyle = {
        color: "white",
        background: "rgba(0, 0, 0, .8)",
        zIndex: 1,
        fontSize: 22,
        width: '93%',
}

const itemsStyle = {
    background: 'black',
    border: '1px solid #ce9178',
    borderRadius: '3px'
}


export default ProjectList;