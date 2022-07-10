import { InstagramEmbed } from "react-social-media-embed";

const MediaContent = () => {
	return (
		<div className='media__container'>
			<div className='media__item'>
				<InstagramEmbed url='https://www.instagram.com/tv/CeZ0aORjRf5/' width={328} />
			</div>
			<div className='media__item'>
				<InstagramEmbed url='https://www.instagram.com/reel/CfwXs-tgqX_/' width={328} />
			</div>
			<div className='media__item'>
				<InstagramEmbed url='https://www.instagram.com/reel/Cd3hVM7Asng/' width={328} />
			</div>
			<div className='media__item'>
				<InstagramEmbed url='https://www.instagram.com/reel/CdqMfRDls4O/' width={328} />
			</div>
		</div>
	);
};

export default MediaContent;
