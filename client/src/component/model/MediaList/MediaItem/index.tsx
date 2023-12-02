import { FC, forwardRef } from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { mediaConfig } from "../../../../api/config/media.config";
import Rating from "../../Rating";

interface IMediaItem {
	posterImage: string | undefined;
	name?: string;
	year?: string | number;
	rating?: string | number;
	season?: string | number;
	episode?: string | number;
}

export const MediaItem: FC<IMediaItem> = forwardRef<HTMLAnchorElement, IMediaItem>(({
	posterImage,
	name,
	year,
	rating,
	season,
	episode
}, ref) => {
	return (
		<Link to={""} className="media-list__link" ref={ref}>
			<img
				className="media-list__link-img"
				src={mediaConfig.methods.poster_path(posterImage)}
				alt="media-list-poster"
			/>
			{/* <FavoriteIcon /> */}
			<div className="media-list__link-info">
				<div className="media-list__link-media-content">
					<div className="films__link-season">{season}</div>
					<div className="films__link-episode">{episode}</div>
				</div>
				<div className="media-list__link-play">
					<img className="media-list__link-play-icon" src="/path/films/play-icon.png" alt="play-icon" />
				</div>
				<div className="media-list__link-details">
					<div className="media-list__link-rating">
						<Rating rating={rating} />
					</div>
					<p className="media-list__link-title">{name}</p>
					<p className="media-list__link-year">{year}</p>
				</div>
			</div>
		</Link>
	);
});

export const MMediaItem = motion(MediaItem);