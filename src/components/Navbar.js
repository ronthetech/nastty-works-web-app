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
						<h1 className='navbar__heading'>Nastty Works</h1>
					</NavLink>
					<FaBars onClick={handleToggle} className='navbar__toggle' />
				</div>
				<ul className={toggle ? "navbar__links" : "navbar__links navbar__links--show"}>
					<li>
						<h3 className='navbar__link'>Shop</h3>
					</li>
					<li>
						<h3 className='navbar__link'>Services</h3>
					</li>
					<li>
						<NavLink to='/Media/'>
							<h3 className='navbar__link'>Media</h3>
						</NavLink>
					</li>
					<li>
						<NavLink to='/Contact/'>
							<h3 className='navbar__link'>Contact</h3>
						</NavLink>
					</li>
				</ul>
				<Socials />
			</div>
		</nav>
	);
};

export default Navbar;
