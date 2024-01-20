import classNames from "classnames";
import React from 'react';

import { IResponseFavorite } from "../../../types/user.types";
import FavoriteItem from "./FavoriteItem";

import "./FavoriteList.scss";

interface IFavoriteListProps {
	wrapperClass?: string | undefined;
	list: IResponseFavorite[];
}

const FavoriteList: React.FC<IFavoriteListProps> = ({
	wrapperClass,
	list,
}) => {
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
							path={`/${item.mediaType === "movie" ? "films" : "serials"}/${item.mediaType}/${item.mediaId}?name=${item.mediaTitle}`}
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