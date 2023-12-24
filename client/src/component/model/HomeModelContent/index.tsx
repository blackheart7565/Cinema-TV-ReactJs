import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { mediaConfig } from "../../../api/config/media.config";
import mediaApi from "../../../api/modules/media.api";
import { useReducer } from "../../../hooks/reducer.hook";
import { IResponseMediasListResultMovie, IResponseMediasListResultSerials, IResponseMediasListValidationType } from "../../../types/media.types";

import MediaCardInfo from "../MediaCardInfo";
import "./HomeModelContent.scss";

interface IHomeModelContent {
	title: string;
	classPrefix: string;
	posters: string[];
	mediaType: string;
	mediaCategory: string;
}

const page: number = 1;

const HomeModelContent: FC<IHomeModelContent> = ({
	title,
	classPrefix,
	posters,
	mediaType,
	mediaCategory,
}) => {
	const type = mediaType === "movie" ? "movie" : "tv";
	const [mediaList, setMediaList] = useState<IResponseMediasListValidationType<typeof type>[]>([]);
	const { dispatch, actions } = useReducer();

	const titleLow = title.toLowerCase();
	const classPrefixLow = classPrefix.toLowerCase();
	const className = `${classPrefixLow}__model`;

	useEffect(() => {
		const fetchData = async () => {
			dispatch(actions.setIsLoading(true));

			const { data } = await mediaApi.getList<IResponseMediasListValidationType<typeof type>>({
				mediaType,
				mediaCategory,
				page: page,
			});
			dispatch(actions.setIsLoading(false));

			if (data && data.results) setMediaList(data.results);
		}

		fetchData();
	}, [mediaType, mediaCategory, page, dispatch]);

	return (
		<div className={`${className}`}>

			<div className={`${className}-title`}>{title}</div>

			<div className={`${className}-content`}>

				<div className={`${className}-section`}>
					<ul className={`${className}-cards`}>
						{
							mediaList.slice(0, 6).map((item: IResponseMediasListValidationType<typeof type>) => (
								<Link
									className={`${className}-card`}
									key={item.id}
									to={`/${mediaType && mediaConfig.methods.replaceMovieAndTv_To_FilmsAndSerials(mediaType)}/${mediaType}/${item.id}?name=${(
										mediaType === 'movie'
											? (
												(item as IResponseMediasListResultMovie).title
												|| (item as IResponseMediasListResultMovie).original_title
											)
											: mediaType === "tv"
											&& (
												(item as IResponseMediasListResultSerials).name
												|| (item as IResponseMediasListResultSerials).original_name
											)
									)}`}
								>
									<img
										className={`${className}-card-img`}
										src={mediaConfig.methods.poster_path(item.poster_path || item.backdrop_path)}
										alt={`${titleLow}-card-img`}
									/>
									<MediaCardInfo
										isIconPlay={false}
										name={(
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
										)}
										rating={item.vote_average}
									/>
								</Link>
							))
						}
					</ul>
					<div className={`${className}-poster`}>
						<img
							className={`${className}-poster-img`}
							src={posters[0]}
							alt={`${titleLow}-poster-img`}
						/>
					</div>
				</div>

				<div className={`${className}-section ${className}-content-right`}>
					<ul className={`${className}-cards`}>
						{
							mediaList.slice(6, 12).map(item => (
								<Link
									className={`${className}-card`}
									key={item.id}
									to={`/${mediaType && mediaConfig.methods.replaceMovieAndTv_To_FilmsAndSerials(mediaType)}/${mediaType}/${item.id}?name=${(
										mediaType === 'movie'
											? (
												(item as IResponseMediasListResultMovie).title
												|| (item as IResponseMediasListResultMovie).original_title
											)
											: mediaType === "tv"
											&& (
												(item as IResponseMediasListResultSerials).name
												|| (item as IResponseMediasListResultSerials).original_name
											)
									)}`}
								>
									<img
										className={`${className}-card-img`}
										src={mediaConfig.methods.poster_path(item.poster_path || item.backdrop_path)}
										alt={`${titleLow}-card-img`}
									/>
									<MediaCardInfo
										isIconPlay={false}
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
										rating={item.vote_average}
									/>
								</Link>
							))
						}
					</ul>
					<div className={`${className}-poster`}>
						<img
							className={`${className}-poster-img`}
							src={posters[1]}
							alt={`${titleLow}-poster-img`}
						/>
					</div>
				</div>

			</div>

		</div>
	);
};

export default HomeModelContent;