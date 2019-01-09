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
			<form className={`contact' ${this.state.showForm ? 'show-form' : null}`}>
            <div className="form-title">Have a question or want to work together? Shoot me a message!</div>
				<input name="name" placeholder="Your name" autocomplete="off" onFocus={()=>{this.onFocus('name')}} onBlur={this.onBlur}/>
				<input name="email" placeholder="Your email" autocomplete="off" onFocus={()=>{this.onFocus('email')}} onBlur={this.onBlur}/>
				<textarea name="message" placeholder="Your message" autocomplete="off" onFocus={()=>{this.onFocus('message')}} onBlur={this.onBlur}/>
				<button className="form-button">Send</button>
			</form>
		)
	}
}

export default Contact;