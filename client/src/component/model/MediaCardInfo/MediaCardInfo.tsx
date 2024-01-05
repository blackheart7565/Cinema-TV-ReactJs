import { FC } from 'react';
import Rating from "../Rating/Rating";

import "./MediaCardInfo.scss";

interface IMediaCardInfoProps {
	name?: string | undefined | null;
	year?: string | number | undefined | null;
	rating?: string | number | undefined | null;
	season?: string | number | undefined | null;
	episode?: string | number | undefined | null;
	isIconPlay?: boolean | undefined;
}

const MediaCardInfo: FC<IMediaCardInfoProps> = ({
	name,
	year,
	rating,
	season,
	episode,
	isIconPlay
}) => {
	return (
		<>
			<div className="media-card__info">
				<div className="media-card__content">
					<div className="media-card__season">{season}</div>
					<div className="media-card__episode">{episode}</div>
				</div>
				{isIconPlay && (
					<div className="media-card__play">
						<img className="media-card__play-icon" src="/path/films/play-icon.png" alt="play-icon" />
					</div>
				)}
				<div className="media-card__details">
					<div className="media-card__rating">
						{rating !== undefined && rating !== null && (
							<Rating rating={rating} />
						)}
					</div>
					<p className="media-card__title">{name}</p>
					<p className="media-card__year">{year}</p>
				</div>
			</div>
		</>
	);
};

export default MediaCardInfo;