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
		index: null,
        width: null,
        height: null
    }
    componentDidMount(){
         window.addEventListener('resize', this.updateDem);
        setTimeout(()=>{
			this.setState({showProject: true});
		}, 10);
       
    }

    componentWillMount(){
        this.setState({width: window.innerWidth, height: window.innerHeight})
    };

    updateDem = ()=>{
        this.setState({width: window.innerWidth, height: window.innerHeight})
    }

    handleHover = (index)=>{
        this.setState({index, showDesc: true},);
	 }

	 handleLeave = ()=>{
		this.setState({index: null, showDesc: false});
    }

    render (){ 
        let rBtnCpnt = (<div className="material-icons" style={{
            fontSize: 150, color: 'white', 
            marginRight: '130px',
            marginBottom: '90px'
            }}>keyboard_arrow_right</div>);

        let lBtnCpnt = (<div className="material-icons" style={{fontSize: 150, color: 'white', marginLeft: '130px', marginBottom: '90px'}}>keyboard_arrow_left</div>);

      let projectsCpnts= projects.map((item, index) => 
        <div key = {index}>
            <p className="title" style={textBoxStyle}>{this.state.width}</p>
            <a href={item.url} target="_blank"><img className='img' style={itemsStyle} src = {item.img} onMouseOver={()=>{this.handleHover(index)}} onMouseLeave={this.handleLeave}></img></a>
        </div>

        
    );
        return (
			<div className="list">

              <CarouselSlider slideCpnts = {projectsCpnts}
                    sliderBoxStyle={this.state.showProject ? showSlider : sliderBoxStyle}
                    buttonSetting = {{placeOn: 'middle-outside'}}
                    dotsSetting = {{placeOn: 'top', style: {marginTop: '-4px'}}}
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
                    <p style={{color: 'white'}}>{this.state.width}</p>      
			</div>
        )
    }
}

// let btnStyle = {
//     fontSize: "36px",
//     color: "white"
// }

const imageStyle = {
    border: '4px solid blue'
}

const sliderBoxStyle = {
   background: 'black',
   width: '69%',
   opacity: 0,
   transform: 'translate(0px, -60px)'
}

const showSlider = {
    background: 'black',
    border: '2px solid red',
    height: 360,
    opacity: 1,
    marginTop: 20,
    transform: 'translate(0px , 0px)',
    transition: 'opacity .7s, transform .7s',
    width: '69%',
}

const textBoxStyle = {
    color: "white",
    background: "rgba(0, 0, 0, .8)",
    zIndex: 1,
    fontSize: 22,
}

const itemsStyle = {
    background: 'red',
    borderRadius: '3px',
    minWidth: '-10%',
    padding: '0px'
}

export default ProjectList;