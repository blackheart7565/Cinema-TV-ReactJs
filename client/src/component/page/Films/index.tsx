import { FC, useEffect, useState } from "react";

import { mediaConfig } from "../../../api/config/media.config";
import mediaApi from "../../../api/modules/media.api";
import { useReducer } from "../../../hooks/reducer.hook";
import { IResponseMediasListResultMovie } from "../../../types/media.types";
import MediaItem from "../../model/MediaItem";
import MediaList from "../../model/MediaList";
import "./Films.scss";

interface IFilms { }

const Films: FC<IFilms> = () => {
	const [films, setFilms] = useState<IResponseMediasListResultMovie[]>([]);
	const [page, setPage] = useState<number>(1);
	const [isMediaLoading, setIsMediaLoading] = useState<boolean>(false);

	const { dispatch, actions } = useReducer();

	const mediaType = mediaConfig.types.movie;
	const mediaCategory = mediaConfig.category.popular;

	const fetchFilms = async () => {
		if (page === 1) dispatch(actions.setIsLoading(true));

		const response = await mediaApi.getList({
			mediaType,
			mediaCategory,
			page: page
		})

		dispatch(actions.setIsLoading(false));

		setFilms(prev => [...prev, ...response.results]);
	}

	useEffect(() => {
		fetchFilms();
	}, [mediaType, mediaCategory, page, dispatch]);

	return (
		<div className="films">
			<MediaList>
				{films.map(item => (
					<MediaItem
						key={item.id}
						posterImage={item.poster_path || item.backdrop_path}
						name={item.title || item.original_title}
						year={item.release_date.split("-")[0]}
						rating={item.vote_average}
					/>
				))}
			</MediaList>

			<button
				style={{
					width: "100px",
					height: "50px",
					textAlign: "center",
				}}
				onClick={(e) => setPage(prev => prev + 1)}
			>
				NEXT
			</button>
		</div>
	);
};

export default Films;