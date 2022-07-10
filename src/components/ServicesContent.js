import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaRegPlusSquare, FaRegMinusSquare } from "react-icons/fa";

const ServicesContent = () => {
	const [toggle, setToggle] = useState(true);

	// // const [faqs, setFAQs] = useState([{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }]);
	// // const [active, setActive] = useState(false);

	const handleToggle = () => {
		toggle ? setToggle(false) : setToggle(true);
		//console.log(toggle);
	};
	return (
		<>
			<div className='services__container'>
				<h3 className='services__heading'>Some of the services we provide:</h3>
				<ul className='services__list'>
					<li>brake jobs</li>
					<li>camber adjustment</li>
					<li>coilovers</li>
					<li>control arms</li>
					<li>tie rods</li>
					<li>serpentine belts</li>
					<li>motor mounts</li>
					<li>fender rolling</li>
					<li>full adjustment</li>
					<li>and more!</li>
				</ul>
				<h4 className='services__message'>
					If we cant handle the job, we know someone who can! Get in touch with us on the{" "}
					<NavLink className='services__link' to='/Contact/'>
						Contact
					</NavLink>{" "}
					page for more info
				</h4>
			</div>
			<div className='faq__container'>
				<h3 className='faq__heading'>Frequently Asked Questions</h3>
				<div className='faq__center'>
					<article className='faq'>
						<div className='faq__title'>
							<p>Do you offer mobile services?</p>
							<button className='faq__btn' onClick={handleToggle} id='1'>
								<FaRegPlusSquare className={toggle ? "faq__btn--plus" : "faq__btn--plus--hide"} />
								<FaRegMinusSquare className={toggle ? "faq__btn--minus" : "faq__btn--minus--show"} />
							</button>
						</div>
						<div className={toggle ? "faq__text" : "faq__text--show"}>
							<p>
								We travel to you! Just call or fill out the contact form and we can set up a service appointment to work on your car at a time and place that's
								convenient.
							</p>
						</div>
					</article>
					<article className='faq'>
						<div className='faq__title'>
							<p>What types of payment do you take?</p>
							<button className='faq__btn' onClick={handleToggle} id='2'>
								<FaRegPlusSquare className={toggle ? "faq__btn--plus" : "faq__btn--plus--hide"} />
								<FaRegMinusSquare className={toggle ? "faq__btn--minus" : "faq__btn--minus--show"} />
							</button>
						</div>
						<div className={toggle ? "faq__text" : "faq__text--show"}>
							<p>We accept Cash, CashApp, Apple Pay, Zelle, Venmo, PayPal, etc. Please indicate if you want to pay in an alternative method.</p>
						</div>
					</article>
				</div>
			</div>
		</>
	);
};

export default ServicesContent;
