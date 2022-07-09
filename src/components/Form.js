import React, { useState } from "react";

const Form = () => {
	const [values, setValues] = useState({
		name: "",
		number: "",
		email: "",
		message: "",
	});
	const [submitted, setSubmitted] = useState(false);
	const [valid, setValid] = useState(false);

	const handleNameInputChange = (e) => {
		setValues({ ...values, name: e.target.value });
	};
	const handleNumberInputChange = (e) => {
		setValues({ ...values, number: e.target.value });
	};
	const handleEmailInputChange = (e) => {
		setValues({ ...values, email: e.target.value });
	};
	const handleMessageInputChange = (e) => {
		setValues({ ...values, message: e.target.value });
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		if (values.name && values.number && values.message) {
			setValid(true);
		}
		setSubmitted(true);
	};

	return (
		<div className='form__container'>
			{submitted && valid ? <div className='form__message--success'>Success! We will get back to you as soon as possible!</div> : null}
			<form className='form' onSubmit={handleFormSubmit}>
				<label htmlFor='formName'>Name</label>
				<input className='form__name' id='formName' name='formName' type='text' value={values.name} onChange={handleNameInputChange} placeholder='Name' />
				{submitted && !values.name ? <span className='empty--field'>Please enter a name</span> : null}
				<label htmlFor='formNumber'>Phone Number</label>
				<input
					className='form__number'
					id='formNumber'
					type='tel'
					value={values.number}
					onChange={handleNumberInputChange}
					pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
					placeholder='123-456-7890'
				/>
				{submitted && !values.number ? <span className='empty--field'>Please enter a phone number</span> : null}
				<label htmlFor='formEmail'>Email Address</label>
				<input
					className='form__email'
					id='formEmail'
					name='formEmail'
					type='email'
					value={values.email}
					onChange={handleEmailInputChange}
					placeholder='Email Address'
				/>
				{/* {submitted && !values.email ? <span className='empty--field'>Please enter an email address</span> : null} */}
				<label htmlFor='formText'>Message To Describe Service Needed</label>
				<textarea
					value={values.message}
					onChange={handleMessageInputChange}
					className='form__text'
					name='formText'
					id='formText'
					placeholder='Message'
					rows='4'
				/>
				{submitted && !values.message ? <span className='empty--field'>Please enter a message</span> : null}
				<button className='form__btn'>Submit</button>
			</form>
		</div>
	);
};

export default Form;
