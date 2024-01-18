import { FC, forwardRef } from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { title } from "process";
import { mediaConfig } from "../../../api/config/media.config";
import FavoriteIcon from "../../Icon/FavoriteIcon/FavoriteIcon";
import MediaCardInfo from "../MediaCardInfo/MediaCardInfo";

interface IMediaItem {
	posterImage: string | undefined;
	defaultPathPosterImage?: boolean | undefined;
	name?: string | undefined | null;
	year?: string | number | undefined | null;
	rating?: string | number | undefined | null;
	season?: string | number | undefined | null;
	episode?: string | number | undefined | null;
	path?: string | undefined;
	isFavorite?: boolean | undefined;
}

export const MediaItem: FC<IMediaItem> = forwardRef<HTMLAnchorElement, IMediaItem>(({
	posterImage,
	defaultPathPosterImage,
	name,
	year,
	rating,
	season,
	episode,
	path,
	isFavorite,
}, ref) => {
	console.log(title, isFavorite);

	return (
		<Link
			className="media-list__link"
			ref={ref}
			to={path || ""}
		>
			<img
				className="media-list__link-img"
				src={defaultPathPosterImage ? posterImage : mediaConfig.methods.poster_path(posterImage)}
				alt="media-list-poster"
			/>
			{isFavorite && (
				<FavoriteIcon
					wrapperClass="media-list__link-favorite"
				/>
			)}
			<MediaCardInfo
				isIconPlay
				name={name}
				rating={rating}
				year={year}
				season={season}
				episode={episode}
			/>
		</Link>
	);
});

export const MMediaItem = motion(MediaItem);