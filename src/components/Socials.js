import { FaInstagram, FaYoutubeSquare, FaFacebookSquare } from "react-icons/fa";

const Socials = () => {
	return (
		<ul className='socials'>
			<li>
				<a href='https://www.instagram.com/nasttyworks/' rel='noreferrer noopener' target='_blank'>
					<span className='socials__icon'>
						<FaInstagram />
					</span>
				</a>
			</li>
			<li>
				<a href='https://youtube.com/' rel='noreferrer noopener' target='_blank'>
					<span className='socials__icon'>
						<FaYoutubeSquare />
					</span>
				</a>
			</li>
			<li>
				<a href='https://facebook.com/' rel='noreferrer noopener' target='_blank'>
					<span className='socials__icon'>
						<FaFacebookSquare />
					</span>
				</a>
			</li>
		</ul>
	);
};
export default Socials;
