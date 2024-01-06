import classNames from "classnames";
import React, { useEffect, useState } from 'react';

import mediaApi from "../../../api/modules/media.api";
import { useReducer } from "../../../hooks/reducer.hook";
import loaderSlice from "../../../store/reducer/loader.slice";
import { IResponseMediasListValidationType } from "../../../types/media.types";
import HomeContentSection from "./HomeContentSection";

import "./HomeContent.scss";

interface IHomeContentProps {
	title?: string | undefined;
	/**
	 *  Массив постеров
	 *  @info Важно! В массиве постеров будут использоваться только первые 2 элемента.
	 */
	posters: string[];
	mediaType: string;
	mediaCategory: string;
}

const page: number = 1;

const HomeContent: React.FC<IHomeContentProps> = ({
	title,
	posters,
	mediaType,
	mediaCategory,
}) => {
	const type = mediaType === "movie" ? "movie" : "tv";
	const [mediaList, setMediaList] = useState<IResponseMediasListValidationType<typeof type>[]>([]);
	const { dispatch } = useReducer();

	useEffect(() => {
		const fetchData = async () => {
			dispatch(loaderSlice.actions.setIsLoading(true));

			const { data } = await mediaApi.getList<IResponseMediasListValidationType<typeof type>>({
				mediaType,
				mediaCategory,
				page: page,
			});
			dispatch(loaderSlice.actions.setIsLoading(false));

			if (data && data.results) setMediaList(data.results);
		}

		fetchData();
	}, [mediaType, mediaCategory, dispatch]);

	return (
		<div className={classNames("home__model")}>
			{title && (
				<div className="home__model-title">{title}</div>
			)}

			<div className="home__model-content">

				<HomeContentSection
					mediaType={mediaType}
					list={mediaList.slice(0, 6)}
					poster={posters[0]}
				/>

				<HomeContentSection
					mediaType={mediaType}
					list={mediaList.slice(6, 12)}
					isRight
					poster={posters[1]}
				/>

			</div>
		</div>
	);
};


export default HomeContent;