import classNames from "classnames";
import React from 'react';
import { Link } from "react-router-dom";

export interface IFavoriteItem {
	id: number;
	path?: string | undefined;
	poster?: string | undefined;
	name?: string | undefined;
	rating?: string | undefined;
	releaseDate?: string | undefined;
}

interface IFavoriteItemProps extends IFavoriteItem {
	wrapperClass?: string | undefined;
}

const FavoriteItem: React.FC<IFavoriteItemProps> = ({
	wrapperClass,
	path,
	poster,
	name,
	rating,
	releaseDate,
}) => {
	return (
		<>
			<Link
				to={path || ""}
				className={classNames("favorite-item", wrapperClass)}
			>
				<div className="favorite-poster">
					<img
						src={poster || ""}
						alt="favorite-img"
					/>
				</div>
				<div className="favorite-details">
					<div className="favorite-details-name">{name}</div>
					<div className="favorite-details-releaseDate">{releaseDate}</div>
				</div>
			</Link>
		</>
	);
};

export default FavoriteItem;