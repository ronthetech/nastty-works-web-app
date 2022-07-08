import { FaInstagram, FaYoutubeSquare, FaFacebookSquare } from "react-icons/fa";

const Socials = () => {
	return (
		<ul className='socials'>
			<li>
				<a href='https://instagram.com/'>
					<span className='socials__icon'>
						<FaInstagram />
					</span>
				</a>
			</li>
			<li>
				<a href='https://youtube.com/'>
					<span className='socials__icon'>
						<FaYoutubeSquare />
					</span>
				</a>
			</li>
			<li>
				<a href='https://facebook.com/'>
					<span className='socials__icon'>
						<FaFacebookSquare />
					</span>
				</a>
			</li>
		</ul>
	);
};
export default Socials;
