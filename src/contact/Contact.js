import React from 'react';
import './styleContact.css';

class Contact extends React.Component {
	state = {
		name: '',
		email: '',
		message: '',
		forcus: '',
		showForm: false
	}

	componentDidMount(){
		setTimeout(()=>{
			this.setState({showForm: true});
		}, 10);
	}

	onFocus = (name)=>{
		this.setState({focus: name});
	}

	onBlur = ()=>{
		this.setState({focus: ''});
	}
	render(){
		return (
			<form className={this.state.showForm ? 'show-form' : null}>
				<div className={this.state.focus === 'name' ? 'focus label' : 'label'}>Name</div>
				<input name="name" autocomplete="off" onFocus={()=>{this.onFocus('name')}} onBlur={this.onBlur}/>

				<div className={this.state.focus === 'email' ? 'focus label' : 'label'}>Email</div>
				<input name="email" autocomplete="off" onFocus={()=>{this.onFocus('email')}} onBlur={this.onBlur}/>

				<div className={this.state.focus === 'message' ? 'focus label' : 'label'}>Message</div>
				<textarea name="message" autocomplete="off" onFocus={()=>{this.onFocus('message')}} onBlur={this.onBlur}/>
				<button>Send</button>
			</form>
		)
	}
}

export default Contact;