import React from 'react';
import './styleContact.css';

 
	  

class Contact extends React.Component {
	state = {
		name: '',
		email: '',
		message: '',
		forcus: '',
		showForm: false,
		mailSent: false,
		error: false
	}

	componentDidMount(){
		setTimeout(()=>{
			this.setState({showForm: true});
		}, 10);
	}

	handleOnChange = (e)=>{
		
		this.setState({[e.target.name]: e.target.value});
		
	}

	sendEmail = (e)=>{
		e.preventDefault();
	const {name, email, message} = this.state;
		if(name !== '', email !== '', message !== ''){
			
			window.emailjs.send(
			'gmail',
			'template_gKYOZhGz',
			{
				senderEmail: this.state.email,
				receiverEmail: 'lysaephan@gmail.com',
				feedback: this.state.message,
				name: this.state.name
			})
			.then(res => {
				this.setState({mailSent: true, error: false});
			})
			// Handle errors here however you like, or use a React error boundary
			.catch(err => console.error('Failed to send feedback. Error: ', err))
		}else{
			this.setState({error: true});
		}
	
	}

	onFocus = (name)=>{
		this.setState({focus: name});
	}

	onBlur = ()=>{
		this.setState({focus: ''});
	}
	render(){
		return (
			<div>
			{this.state.mailSent ? <div style={{color: 'white', fontSize: 25, paddingTop: 50}}>Your message has been sent. Thanks</div> : 
			
			<form className={`contact' ${this.state.showForm ? 'show-form' : null}`}>
            <div className="form-title">Have a question or want to work together? Shoot me a message!</div><br/>
				{this.state.error ? <div style={{color: 'red'}}>All fields are required</div> : null }
				<input name="name" placeholder="Your name" autocomplete="off" onFocus={()=>{this.onFocus('name')}} onBlur={this.onBlur} onChange={this.handleOnChange}/>
				<input name="email" placeholder="Your email" autocomplete="off" onFocus={()=>{this.onFocus('email')}} onBlur={this.onBlur} onChange={this.handleOnChange}/>
				<textarea name="message" placeholder="Your message" autocomplete="off" onFocus={()=>{this.onFocus('message')}} onBlur={this.onBlur} onChange={this.handleOnChange}/>
				<button className="form-button" onClick={this.sendEmail}>Send</button>
			</form> 
			
			}
			</div>
		)
	}
}

export default Contact;