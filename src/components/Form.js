import React, { useState } from "react";

const Form = () => {
	const [name, setName] = useState("");
	const [number, setNumber] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const [submitted, setSubmitted] = useState(false);
	const [valid, setValid] = useState(false);

	const handleFormSubmit = (e) => {
		e.preventDefault();
		if (name && number && message) {
			setValid(true);
		}
		setSubmitted(true);
	};

	return (
		<div className='form__container'>
			{submitted && valid ? <div className='form__message--success'>Success! We will get back to you as soon as possible!</div> : null}
			<form className='form' onSubmit={handleFormSubmit} name='contact' netlify>
				<label htmlFor='formName'>Name</label>
				<input
					className='form__name'
					id='formName'
					name='formName'
					type='text'
					value={name}
					onChange={(e) => {
						setName(e.target.value);
					}}
					placeholder='Name'
				/>
				{submitted && !name ? <span className='empty--field'>Please enter a name</span> : null}
				<label htmlFor='formNumber'>Phone Number</label>
				<input
					className='form__number'
					id='formNumber'
					type='tel'
					value={number}
					onChange={(e) => {
						setNumber(e.target.value);
					}}
					pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
					placeholder='123-456-7890'
				/>
				{submitted && !number ? <span className='empty--field'>Please enter a phone number</span> : null}
				<label htmlFor='formEmail'>Email Address</label>
				<input
					className='form__email'
					id='formEmail'
					name='formEmail'
					type='email'
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
					placeholder='Email Address'
				/>
				{/* {submitted && !values.email ? <span className='empty--field'>Please enter an email address</span> : null} */}
				<label htmlFor='formText'>Message To Describe Service Needed</label>
				<textarea
					value={message}
					onChange={(e) => {
						setMessage(e.target.value);
					}}
					className='form__text'
					name='formText'
					id='formText'
					placeholder='Message'
					rows='4'
				/>
				{submitted && !message ? <span className='empty--field'>Please enter a message</span> : null}
				<button className='form__btn'>Submit</button>
			</form>
		</div>
	);
};

export default Form;
