import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Socials from "./Socials";

const Navbar = () => {
	const [toggle, setToggle] = useState(true);

	const handleToggle = () => {
		toggle ? setToggle(false) : setToggle(true);
		//console.log(toggle);
	};
	return (
		<nav>
			<div className='navbar'>
				<div className='navbar__header'>
					<NavLink to='/'>
						<h2 className='navbar__heading'>Nastty Works</h2>
					</NavLink>
					<FaBars onClick={handleToggle} className='navbar__toggle' />
				</div>
				<ul className={toggle ? "navbar__links" : "navbar__links navbar__links--show"}>
					<li>
						<h4 className='navbar__link'>Shop</h4>
					</li>
					<li>
						<h4 className='navbar__link'>Services</h4>
					</li>
					<li>
						<NavLink to='/Media/'>
							<h4 className='navbar__link'>Media</h4>
						</NavLink>
					</li>
					<li>
						<NavLink to='/Contact/'>
							<h4 className='navbar__link'>Contact</h4>
						</NavLink>
					</li>
				</ul>
				<Socials />
			</div>
		</nav>
	);
};

export default Navbar;
