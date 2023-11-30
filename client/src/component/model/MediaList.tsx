import { FC, useEffect, useState } from "react";

import mediaApi from "../../api/modules/media.api";
import { useReducer } from "../../hooks/reducer.hook";
import { IResponseMediasListResult } from "../../types/media.types";
import MediaItem from "./MediaItem";

interface IMediaList {
	mediaType: string;
	mediaCategory: string;
	page?: string | number;
}

const MediaList: FC<IMediaList> = ({
	mediaType,
	mediaCategory,
	page,
}) => {
	const [films, setFilms] = useState<IResponseMediasListResult[]>([]);
	const { dispatch, actions } = useReducer();

	const fetchFilms = async () => {
		dispatch(actions.setIsLoading(true));
		const response = await mediaApi.getList({
			mediaType,
			mediaCategory,
			page: page || "1"
		})
		dispatch(actions.setIsLoading(false));

		setFilms(response.results);
	}

	useEffect(() => {
		fetchFilms();
	}, [mediaType, mediaCategory, dispatch]);

	return (
		<ul className="films__list">
			{films.map(item => (
				<MediaItem
					key={item.id}
					posterImage={item.poster_path || item.backdrop_path}
				/>
			))}
		</ul>
	);
}

export default MediaList;