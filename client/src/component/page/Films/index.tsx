import { FC, useEffect, useState } from "react";

import { mediaConfig } from "../../../api/config/media.config";
import mediaApi from "../../../api/modules/media.api";
import { useReducer } from "../../../hooks/reducer.hook";
import { IResponseMediasListResultMovie } from "../../../types/media.types";
import Button from "../../UI/Button";
import MediaList from "../../model/MediaList";
import { MMediaItem } from "../../model/MediaList/MediaItem";
import MediaLoader from "../../model/MediaLoader";

import "./Films.scss";

interface IFilms { }

const Films: FC<IFilms> = () => {
	const [films, setFilms] = useState<IResponseMediasListResultMovie[]>([]);
	const [page, setPage] = useState<number>(1);
	const [totalResults, setTotalResults] = useState<number>(0);
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
			setTotalResults(response.total_results);
		} else {
			setFilms(prev => [...prev, ...response.results]);
		}
	}

	const showMore = () => {
		if (films.length < totalResults) {
			setPage(prev => prev + 1);
		}
	}

	useEffect(() => {
		fetchFilms();
	}, [mediaType, mediaCategory, page, dispatch]);

	return (
		<div className="films">
			<MediaList mediaType={""} mediaCategory={""}>
				{films.map((item, index) => (
					<MMediaItem
						key={item.id + index}
						posterImage={item.poster_path || item.backdrop_path}
						name={item.title || item.original_title}
						year={item.release_date.split("-")[0]}
						rating={item.vote_average}
					/>
				))}
			</MediaList>
			{isMediaLoading && (
				<MediaLoader
					isLoading
					width="50"
					height="50"
				/>
			)}
			{(films.length < totalResults) && (
				<Button
					className="films__show-more"
					onClick={showMore}
				>
					{!isMediaLoading && "Show more"}
				</Button>
			)}
		</div>
	);
};

export default Films;