import { NavLink } from "react-router-dom";

const ServicesContent = () => {
	return (
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
	);
};

export default ServicesContent;
