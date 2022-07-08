const Form = () => {
	return (
		<div className='form__container'>
			<form className='form'>
				<input className='form__name' id='formName' type='text' placeholder='Name' /*value='name'*/ />
				<input className='formNumber' id='formNumber' type='number' placeholder='Phone Number' />
				<input className='form__email' id='formEmail' type='email' placeholder='Email Address' />
				<input className='form__text' id='formText' type='textarea' placeholder='Message' />
				<button></button>
			</form>
		</div>
	);
};

export default Form;
