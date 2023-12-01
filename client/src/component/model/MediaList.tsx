import { FC, ReactNode, useEffect, useState } from "react";

import mediaApi from "../../api/modules/media.api";
import { useReducer } from "../../hooks/reducer.hook";
import { IResponseMediasListResult, IResponseMediasListResultMovie, IResponseMediasListResultSerials } from "../../types/media.types";
import MediaItem from "./MediaItem";

interface IMediaList {
	children: ReactNode;
}

const MediaList: FC<IMediaList> = ({
	children
}) => {
	return (
		<ul className="films__list">
			{films.map(item => (
				<MediaItem
					key={item.id}
					posterImage={item.poster_path || item.backdrop_path}
					name={
						mediaType === "movie"
						? (
							(item as IResponseMediasListResultMovie).title
							|| (item as IResponseMediasListResultMovie).original_title
						)
						: (
							(item as IResponseMediasListResultSerials).name
							|| (item as IResponseMediasListResultSerials).original_name
						)
					}
					year={(
						mediaType === "movie"
						? (
							(item as IResponseMediasListResultMovie).release_date.split("-")[0]
						)
						: (
							(item as IResponseMediasListResultSerials).first_air_date.split("-")[0]
						)
					)}
					rating={item.vote_average}
				/>
			))}
		</ul>
	);
}

export default MediaList;