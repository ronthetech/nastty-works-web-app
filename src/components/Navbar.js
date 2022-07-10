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
					<NavLink to='/' className='navbar__heading'>
						Nastty Works
					</NavLink>
					<FaBars onClick={handleToggle} className='navbar__toggle' />
				</div>
				<ul className={toggle ? "navbar__links" : "navbar__links navbar__links--show"}>
					<li>
						<NavLink to='/' className='navbar__link'>
							Shop
						</NavLink>
					</li>
					<li>
						<NavLink to='/Services/' className='navbar__link'>
							Services
						</NavLink>
					</li>
					<li>
						<NavLink to='/Media/' className='navbar__link'>
							Media
						</NavLink>
					</li>
					<li>
						<NavLink to='/Contact/' className='navbar__link'>
							Contact
						</NavLink>
					</li>
				</ul>
				<Socials />
			</div>
		</nav>
	);
};

export default Navbar;
