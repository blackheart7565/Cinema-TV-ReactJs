import { FC, ReactNode, useEffect, useState } from "react";

import mediaApi from "../../../api/modules/media.api";
import { useReducer } from "../../../hooks/reducer.hook";
import { IResponseMediasListResultMovie, IResponseMediasListResultSerials, IResponseMediasListValidationType } from "../../../types/media.types";
import LoadMore from "../LoadMore";
import { MMediaItem } from "./MediaItem";
import "./MediaList.scss";

interface IMediaList {
	children?: ReactNode;
	mediaType: string;
	mediaCategory: string;
}

const MediaList: FC<IMediaList> = ({
	mediaType,
	mediaCategory,
}) => {
	// =========>Hooks<=========
	const type = mediaType === "movie" ? "movie" : "tv";
	const [media, setMedia] = useState<IResponseMediasListValidationType<typeof type>[]>([]);
	const [page, setPage] = useState<number>(1);
	const [isMediaLoading, setIsMediaLoading] = useState<boolean>(false);
	const [totalResults, setTotalResults] = useState<number>(0);
	const { dispatch, actions } = useReducer();

	// =========>Function<=========

	useEffect(() => {
		const fetchMedia = async () => {
			if (page === 1) dispatch(actions.setIsLoading(true));
			setIsMediaLoading(true);

			const { data } = await mediaApi.getList<IResponseMediasListValidationType<typeof type>>({
				mediaType,
				mediaCategory,
				page: page
			});

			setIsMediaLoading(false);
			dispatch(actions.setIsLoading(false));

			if (page === 1) {
				setMedia(data.results);
				setTotalResults(data.total_results);
			} else {
				setMedia(prev => [...prev, ...data.results]);
			}
		}

		fetchMedia();
	}, [mediaType, mediaCategory, page, dispatch]);

	return (
		<>
			<ul className="media-list">
				{media.map((item: IResponseMediasListValidationType<typeof type>, index: number) => (
					<MMediaItem
						key={item.id + index * 2}
						path={`${mediaType}/${item.id}`}
						posterImage={item.poster_path || item.backdrop_path}
						name={
							mediaType === 'movie'
								? (
									(item as IResponseMediasListResultMovie).title
									|| (item as IResponseMediasListResultMovie).original_title
								)
								: mediaType === "tv"
									? (
										(item as IResponseMediasListResultSerials).name
										|| (item as IResponseMediasListResultSerials).original_name
									)
									: null
						}
						year={
							mediaType === "movie"
								? (
									(item as IResponseMediasListResultMovie).release_date.split("-")[0]
								)
								: mediaType === "tv"
									? (
										(item as IResponseMediasListResultSerials).first_air_date.split("-")[0]
									)
									: null
						}
						rating={item.vote_average}
					/>
				))}
			</ul>
			<LoadMore
				currentLengthMedia={media.length}
				totalResultsMedia={totalResults}
				isMediaLoading={isMediaLoading}
				setPage={setPage}
			/>
		</>
	);
}

export default MediaList;