import { FC } from "react";
import { Link } from "react-router-dom";

import { mediaConfig } from "../../api/config/media.config";

interface IMediaItem {
	posterImage: string | undefined;
	name?: string;
	year?: string | number;
	rating?: string | number;
	season?: string | number;
	episode?: string | number;
}

const MediaItem: FC<IMediaItem> = ({
	posterImage,
	name,
	year,
	rating,
	season,
	episode
}) => {
	return (
		<Link to={""} className="films__link">
			<img
				className="films__link-img"
				src={mediaConfig.methods.poster_path(posterImage)} alt="films-poster"
			/>
			<div className="films__link-info">
				<div className="films__link-media-content">
					<div className="films__link-season">{season}</div>
					<div className="films__link-episode">{episode}</div>
				</div>
				<div className="films__link-play">
					<img className="films__link-play-icon" src="/path/films/play-icon.png" alt="play-icon" />
				</div>
				<div className="films__link-details">
					<div className="films__link-rating">{rating}</div>
					<p className="films__link-title">{name}</p>
					<p className="films__link-year">{year}</p>
				</div>
			</div>
		</Link>
	);
}

export default MediaItem;