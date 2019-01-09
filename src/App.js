import React, { Component } from 'react';
import Button from './button/Button';
import Intro from './intro/Intro';
import Skills from './skills/Skills';
import Contact from './contact/Contact';
import ProjectList from './project/ProjectList';
import './App.css';


const buttons = [
	{name: 'home', color: '#569cd6'},
	{name: 'skills', color: '#4ec9b0'},
	{name: 'projects', color: '#ce9178'},
	{name: 'contact', color: '#dcdc9c'}
]

const skills = [{name: 'React', rating: 95}, {name: 'Redux', rating: 85}]

// showButton - initial state for each button to show (for transition)
// showHeader - initial state for the intro and image to show (for transition)
// activeButton - for toggling active button
// activeComponent - for switching which component to show
// showLine - show line under buttons when home button is not active
// showRating - initial state for skill rating (for transition)

class App extends Component {
	state = {
		height: 400,
		showButton: false,
		showHeader: false,
      activeButton: buttons[0],
      activeComponent: buttons[0],
		showLine: false,
		showRating: false,
		skills: []
	}
	componentDidMount(){
		// css transition needs the initial state before the transition happens
		setTimeout(()=>{
			this.setState({showButton: true, showHeader: true});
		}, 0);
   }
	onButtonClick = (height, index)=>{
      console.log(index);
			if(index != 0){
            this.setState({showHeader: false, showLine: true, activeButton: buttons[index]});
            // set time out so 'active component' doesn't appear until 'buttons' transition is finished
            // preventing the scroll bar to blink due to element over flow or too much height
            setTimeout(()=>{
               this.setState({ height, activeComponent: buttons[index], skills});   
            },300);
				
			}else{
            this.setState({showHeader: true, showLine: false});
            this.setState({ height, activeButton: buttons[index], activeComponent: buttons[index], skills});   
			}
	}
	render() {
		return (
			<div className="App">
				<div className={`container sideline-${this.state.activeButton.name}`}>
					<Intro showHeader={this.state.showHeader} />
					<Button 
						buttons={buttons} 
						showButton={this.state.showButton} 
						activeButton={this.state.activeButton}
						onButtonClick={this.onButtonClick}
						showLine={this.state.showLine}
					/>
					{/* <Skills skills={this.state.skills}/> */}
					{/* Switches */}
					{this.state.activeComponent.name === 'skills' ? <Skills skills={this.state.skills}/> : null}
					{this.state.activeComponent.name === 'projects' ? <ProjectList /> : null}
					{this.state.activeComponent.name === 'contact' ? <Contact /> : null}
				</div>
			</div>
		);
	}
}

export default App;