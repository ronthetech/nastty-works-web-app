import { NavLink } from "react-router-dom";
import { InstagramEmbed } from "react-social-media-embed";

const MainContent = () => {
	return (
		<div className='main'>
			<div className='main__header'>
				<h1 className='main__heading'>Welcome to Nastty Works</h1>
				<h2 className='main__heading'>Mobile Mechanic</h2>
			</div>
			{/* <h4>Merchandise is available for sale on the Shop Page, rep Nastty Works brand in style</h4> */}
			<h4>
				Check us out across our Socials on our{" "}
				<NavLink className='main__link' to='/Media/'>
					Media Page!
				</NavLink>{" "}
				When we're not under the hood or jacking up a car, heres where you can find us! Stay in the Loop{" "}
			</h4>{" "}
			<h4>
				You can find out about the work we do on our{" "}
				<NavLink className='main__link' to='/Services/'>
					Services Page.
				</NavLink>{" "}
				Then you can make an appointment if you know what service or services you need.
			</h4>
			<h4>
				Get in touch with us through the form on our{" "}
				<NavLink className='main__link' to='/Contact/'>
					Contact Page!
				</NavLink>{" "}
				Just give an email or phone number, with your name so we can respond when you send us a message.
			</h4>
			<div className='main__media'>
				<InstagramEmbed url='https://www.instagram.com/tv/CeZ0aORjRf5/' width={328} />
			</div>
		</div>
	);
};

export default MainContent;
