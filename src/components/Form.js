import React, { useState } from "react";

const Form = () => {
	const [values, setValues] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [submitted, setSubmitted] = useState(false);
	const [valid, setValid] = useState(false);

	const handleNameInputChange = (e) => {
		setValues({ ...values, name: e.target.value });
	};
	const handleEmailInputChange = (e) => {
		setValues({ ...values, email: e.target.value });
	};
	const handleMessageInputChange = (e) => {
		setValues({ ...values, message: e.target.value });
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		if (values.name && values.email && values.message) {
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
				<label htmlFor='formNumber'>Phone Number</label>
				<input className='form__number' id='formNumber' type='tel' placeholder='Phone Number' />
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
				<label htmlFor='formText'>Send A Message To Let Us Know What Service You Need!</label>
				<textarea
					value={values.message}
					onChange={handleMessageInputChange}
					className='form__text'
					name='formText'
					id='formText'
					placeholder='Message'
					rows='4'
				/>
				<button className='form__btn'>Submit</button>
			</form>
		</div>
	);
};

export default Form;
