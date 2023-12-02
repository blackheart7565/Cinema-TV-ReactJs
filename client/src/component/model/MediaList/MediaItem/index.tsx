import { FC, forwardRef } from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { mediaConfig } from "../../../../api/config/media.config";
import MediaCardInfo from "../../MediaCardInfo";
import Rating from "../../Rating";

interface IMediaItem {
	posterImage: string | undefined;
	name?: string | undefined | null;
	year?: string | number | undefined | null;
	rating?: string | number | undefined | null;
	season?: string | number | undefined | null;
	episode?: string | number | undefined | null;
	path?: string | undefined;
}

export const MediaItem: FC<IMediaItem> = forwardRef<HTMLAnchorElement, IMediaItem>(({
	posterImage,
	name,
	year,
	rating,
	season,
	episode,
	path
}, ref) => {
	return (
		<Link
			className="media-list__link"
			ref={ref}
			to={path || ""}
		>
			<img
				className="media-list__link-img"
				src={mediaConfig.methods.poster_path(posterImage)}
				alt="media-list-poster"
			/>
			{/* <FavoriteIcon /> */}
			<MediaCardInfo
				isIconPlay
				name={name}
				rating={rating}
				year={year}
				season={season}
				episode={episode}
			/>
			<div className="media-list__link-info">
				<div className="media-list__link-media-content">
					<div className="films__link-season">{season}</div>
					<div className="films__link-episode">{episode}</div>
				</div>
				<div className="media-list__link-play">
					<img className="media-list__link-play-icon" src="/path/films/play-icon.png" alt="play-icon" />
				</div>
				<div className="films__link-details">
					<div className="films__link-rating">
						{rating && (
							<Rating rating={rating} />
						)}
						<p className="media-list__link-title">{name}</p>
						<p className="media-list__link-year">{year}</p>
					</div>
				</div>
			</div>
		</Link>
	);
});

export const MMediaItem = motion(MediaItem);