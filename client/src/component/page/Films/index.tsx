import { FC, useEffect, useState } from "react";

import { mediaConfig } from "../../../api/config/media.config";
import mediaApi from "../../../api/modules/media.api";
import { useReducer } from "../../../hooks/reducer.hook";
import { IResponseMediasListResultMovie } from "../../../types/media.types";
import Button from "../../UI/Button";
import { MMediaItem } from "../../model/MediaItem";
import MediaList from "../../model/MediaList";
import MediaLoader from "../../model/MediaLoader";

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
		setIsMediaLoading(true);

		const response = await mediaApi.getList({
			mediaType,
			mediaCategory,
			page: page
		});

		setIsMediaLoading(false);
		dispatch(actions.setIsLoading(false));

		if (page === 1) {
			setFilms(response.results);
		} else {
			setFilms(prev => [...prev, ...response.results]);
		}
	}

	const showMore = () => {
		setPage(prev => prev + 1);
	}

	useEffect(() => {
		fetchFilms();
	}, [mediaType, mediaCategory, page, dispatch]);

	return (
		<div className="films">
			<MediaList>
				{films.map(item => (
					<MMediaItem
						key={item.id}
						posterImage={item.poster_path || item.backdrop_path}
						name={item.title || item.original_title}
						year={item.release_date.split("-")[0]}
						rating={item.vote_average}
					/>
				))}
			</MediaList>
			<Button
				className="films__show-more"
				onClick={showMore}
			>
				{isMediaLoading && (
					<MediaLoader
						isLoading
						width="30"
						height="30"
					/>
				)}
				{!isMediaLoading && "Show more"}
			</Button>
		</div>
	);
};

export default Films;