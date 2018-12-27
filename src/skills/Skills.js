import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './styleSkills.css';

const skills = [
   {name: 'React', rating: 95},
   {name: 'React Native', rating: 85}, 
	{name: 'Redux', rating: 85},
	{name: 'NodeJs', rating: 80}, 
	{name: 'MongoDB', rating: 80},
	{name: 'HTML', rating: 95}, 
	{name: 'CSS', rating: 95},
	{name: 'AngularJs', rating: 70}, 
	{name: 'Angular', rating: 50},
	{name: 'Ionic 1', rating: 50}
]

class Skills extends React.Component {
	// const ratingClass = props.skills.length > 0 ? 'rating
	// const ratingStyle = props.skills.length > 0 ? {} : 'rating';
	state = {
		showRating: false,
		skills
	}
	componentDidMount(){
		setTimeout(()=>{
			this.setState({showRating: true, skills});
		}, 10);
	}
	render(){
		return (
			<div className="skills-con">
				{
					this.state.skills.map(skill=>{
						const ratingClass = this.state.showRating ? 'show-rating' : null;
						const ratingStyle = this.state.showRating ? {width: skill.rating + '%'} : null;
						return (
							<div className="skill">
								<div className={`name ${this.state.showRating ? 'show-name' : null}`}>{skill.name}</div>
								<div className="bar">
									<div className={`rating ${ratingClass}`} style={ratingStyle}></div>
									<div className={`percent ${this.state.showRating ? 'show-percent' : null}`}>{skill.rating}%</div>
								</div>
							</div>
						)
					})
				}
			</div>
		)
	}
}

export default Skills;