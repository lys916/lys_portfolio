import React from 'react';
import Project from './Project';
import './styleProject.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {projects} from '../project-data';
import DesktopLayout from './desktopLayout';
import MobileLayout from './mobileLayout';

class ProjectList extends React.Component {
    state = {
      projects,
      showProject: false,
      showList: false,
		showDesc: false,
		index: null,
      activeButton: 0,
      activeProject: 0,
      width: null,
      height: null
    }
    componentDidMount(){
      window.addEventListener('resize', ()=>{
         this.updateDem();
      });
        setTimeout(()=>{
			this.setState({showProject: true, showList: true});
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

    toggleActive = (index)=>{
      this.setState({activeButton: index, showProject: false}, ()=>{
         setTimeout(()=>{
            this.setState({showProject: true, activeProject: index});
         }, 700);   
      });
    }

    render (){ 

        return (
			<div>
            {this.state.width > 770 ? <DesktopLayout state={this.state} toggleActive={this.toggleActive}/> : <MobileLayout state={this.state} />}
            
         </div>
        )
    }
}

export default ProjectList;