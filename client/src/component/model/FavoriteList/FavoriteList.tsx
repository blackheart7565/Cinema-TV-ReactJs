import classNames from "classnames";
import React from 'react';

import FavoriteItem from "./FavoriteItem";
import { IResponseFavorite } from "../../../types/user.types";

import "./FavoriteList.scss";

interface IFavoriteListProps {
	wrapperClass?: string | undefined;
	list: IResponseFavorite[];
}

const FavoriteList: React.FC<IFavoriteListProps> = ({
	wrapperClass,
	list,
}) => {

	console.log("list", list);

	return (
		<div
			className={classNames("favorite-list", wrapperClass)}
		>
			{list && list.length > 0
				? (
					list.map((item: IResponseFavorite) => (
						<FavoriteItem
							key={item.id}
							id={item.id}
							poster={item.mediaPosterPath || ""}
							name={item.mediaTitle || ""}
							rating={item.mediaRating.toString() || ""}
							releaseDate={item.mediaReleaseDate || ""}
						/>
					))
				)
				: (
					<h2 style={{
						textAlign: "center",
						padding: "5px"
					}}>
						Favorites list is empty
					</h2>
				)}
		</div>
	);
};

export default FavoriteList;