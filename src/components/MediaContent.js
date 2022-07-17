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
			{/* <div className='media__gallery'>
				<div className='gallery__item'>
					<img src='' alt='' srcSet='' className='gallery__img' />
				</div>
				<div className='gallery__item'>
					<img src='' alt='' srcSet='' className='gallery__img' />
				</div>
			</div> */}
			{/* <div className='media__archive'>
			//link to archive with images matching year or topic
				<div className='archive__item'>
					<img src='' alt='' srcSet='' className='archive__img' />
					<p>Best Of 2021</p>
				</div>
				<div className='archive__item'>
					<img src='' alt='' srcSet='' className='archive__img' />
					<p>Best Of Summer</p>
				</div>
			</div> */}
		</div>
	);
};

export default MediaContent;
