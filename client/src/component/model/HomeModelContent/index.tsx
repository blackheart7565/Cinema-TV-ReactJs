import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { mediaConfig } from "../../../api/config/media.config";
import MediaApi from "../../../api/modules/media.api";
import { useReducer } from "../../../hooks/reducer.hook";
import { IResponseMediasListResult } from "../../../types/media.types";

import "./HomeModelContent.scss";

interface IHomeModelContent {
	title: string;
	classPrefix: string;
	posters: string[];
	mediaType: string;
	mediaCategory: string;
}

const HomeModelContent: FC<IHomeModelContent> = ({
	title,
	classPrefix,
	posters,
	mediaType,
	mediaCategory,
}) => {
	const [mediaList, setMediaList] = useState<IResponseMediasListResult[]>([]);
	const { dispatch, actions } = useReducer();

	const titleLow = title.toLowerCase();
	const classPrefixLow = classPrefix.toLowerCase();
	const className = `${classPrefixLow}__model`;

	const fetchData = async () => {
		dispatch(actions.setIsLoading(true));
		const response = await MediaApi.getList({
			mediaType,
			mediaCategory,
			page: "1",
		});
		dispatch(actions.setIsLoading(false));

		if (response && response.results) setMediaList(response.results);
	}

	useEffect(() => {
		fetchData();
	}, [mediaType, mediaCategory, dispatch]);

	return (
		<div className={`${className}`}>

			<div className={`${className}-title`}>{title}</div>

			<div className={`${className}-content`}>

				<div className={`${className}-section`}>
					<ul className={`${className}-cards`}>
						{
							mediaList.slice(0, 6).map((item) => (
								<Link
									className={`${className}-card`}
									key={item.id}
									to={""}
								>
									<img
										className={`${className}-card-img`}
										src={mediaConfig.methods.poster_path(item.poster_path || item.backdrop_path)}
										alt={`${titleLow}-card-img`}
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
									to={""}
								>
									<img
										className={`${className}-card-img`}
										src={mediaConfig.methods.poster_path(item.poster_path || item.backdrop_path)}
										alt={`${titleLow}-card-img`}
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