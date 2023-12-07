import { FC, useEffect, useState } from "react";

import { mediaConfig } from "../../../api/config/media.config";
import mediaApi from "../../../api/modules/media.api";
import { useReducer } from "../../../hooks/reducer.hook";
import { IResponseMediasListResultSerials } from "../../../types/media.types";
import Button from "../../UI/Button";
import MediaList from "../../model/MediaList";
import { MMediaItem } from "../../model/MediaList/MediaItem";
import MediaLoader from "../../model/MediaLoader";

import "./Serials.scss";

interface ISerials { }

const Serials: FC<ISerials> = () => {
	const [serials, setSerials] = useState<IResponseMediasListResultSerials[]>([]);
	const [page, setPage] = useState<number>(1);
	const [totalResults, setTotalResults] = useState<number>(0);
	const [isMediaLoading, setIsMediaLoading] = useState<boolean>(false);

	const { dispatch, actions } = useReducer();

	const mediaType = mediaConfig.types.tv;
	const mediaCategory = mediaConfig.category.popular;

	const fetchFilms = async () => {
		if (page === 1) dispatch(actions.setIsLoading(true));
		setIsMediaLoading(true);

		const { data } = await mediaApi.getList<IResponseMediasListResultSerials>({
			mediaType,
			mediaCategory,
			page: page
		});

		setIsMediaLoading(false);
		dispatch(actions.setIsLoading(false));

		if (page === 1) {
			setSerials(data.results);
			setTotalResults(data.total_results);
		} else {
			setSerials(prev => [...prev, ...data.results]);
		}
	}

	const showMore = () => {
		if (serials.length < totalResults) {
			setPage(prev => prev + 1);
		}
	}

	useEffect(() => {
		fetchFilms();
	}, [mediaType, mediaCategory, page, dispatch]);

	return (
		<div className="serials">
			<MediaList>
				{serials.map((item, index) => (
					<MMediaItem
						key={item.id + index}
						posterImage={item.poster_path || item.backdrop_path}
						name={item.name || item.original_name}
						year={item.first_air_date.split("-")[0]}
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
			{(serials.length < totalResults) && (
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

export default Serials;