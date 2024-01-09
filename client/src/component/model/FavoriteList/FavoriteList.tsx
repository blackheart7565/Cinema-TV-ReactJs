import classNames from "classnames";
import React from 'react';
import FavoriteItem, { IFavoriteItem } from "./FavoriteItem";

import "./FavoriteList.scss";

interface IFavoriteListProps {
	wrapperClass?: string | undefined;
	list: IFavoriteItem[];
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
					list.map((item: IFavoriteItem) => (
						<FavoriteItem
							key={item.id}
							id={item.id}
							poster={item.poster || ""}
							name={item.name || ""}
							rating={item.rating || ""}
							releaseDate={item.releaseDate || ""}
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