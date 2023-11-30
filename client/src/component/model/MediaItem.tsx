import { FC } from "react";
import { Link } from "react-router-dom";

import { mediaConfig } from "../../api/config/media.config";

interface IMediaItem {
	posterImage: string | undefined;
}

const MediaItem: FC<IMediaItem> = ({
	posterImage
}) => {
	return (
		<Link to={""} className="films__link">
			<img
				className="films__img"
				src={mediaConfig.methods.poster_path(posterImage)} alt="films-poster"
			/>
			<div className="films__link-details">
				
			</div>
		</Link>
	);
}

export default MediaItem;