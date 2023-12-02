import { FC, useEffect, useState } from "react";
import Button from "../../UI/Button";

import { mediaConfig } from "../../../api/config/media.config";
import mediaApi from "../../../api/modules/media.api";
import { useReducer } from "../../../hooks/reducer.hook";
import { IResponseMediasListResultSerials } from "../../../types/media.types";
import MediaList from "../../model/MediaList";
import { MMediaItem } from "../../model/MediaList/MediaItem";
import MediaLoader from "../../model/MediaLoader";

import "./Serials.scss";

interface ISerials { }

const Serials: FC<ISerials> = () => {
	const [films, setFilms] = useState<IResponseMediasListResultSerials[]>([]);
	const [page, setPage] = useState<number>(1);
	const [isMediaLoading, setIsMediaLoading] = useState<boolean>(false);

	const { dispatch, actions } = useReducer();

	const mediaType = mediaConfig.types.tv;
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
		<div className="serials">
			<MediaList>
				{films.map(item => (
					<MMediaItem
						key={item.id}
						posterImage={item.poster_path || item.backdrop_path}
						name={item.name || item.original_name}
						year={item.first_air_date.split("-")[0]}
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

export default Serials;