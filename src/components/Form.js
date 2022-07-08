const Form = () => {
	return (
		<div className='form__container'>
			<form className='form'>
				<label htmlFor='formName'>Name</label>
				<input className='form__name' id='formName' name='formName' type='text' placeholder='Name' />
				<label htmlFor='formNumber'>Phone Number</label>
				<input className='form__number' id='formNumber' type='tel' placeholder='Phone Number' />
				<label htmlFor='formEmail'>Email Address</label>
				<input className='form__email' id='formEmail' name='formEmail' type='email' placeholder='Email Address' />
				<label htmlFor='formText'>Send A Message To Let Us Know What Service You Need!</label>
				<textarea className='form__text' name='formText' id='formText' placeholder='Message' rows='4' />
				<button className='form__btn'>Submit</button>
			</form>
		</div>
	);
};

export default Form;
