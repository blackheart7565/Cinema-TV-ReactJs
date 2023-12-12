import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { mediaConfig } from "../../../api/config/media.config";
import mediaApi from "../../../api/modules/media.api";
import { useReducer } from "../../../hooks/reducer.hook";
import { IResponseMediaDetailsValidationRoot } from "../../../types/media-types/details.type";
import { IParams } from "../../../types/other.type";
import MediaDetailsHeader from "../../Details/MediaDetailsHeader";
import MediaDetailsPanel from "../../Details/MediaDetailsPanel";

import { ActorDto } from "../../../dtos/actor.dto";
import MediaDetailsSwiperListActors from "../../Details/MediaDetailsSwiperListActors/inidex";
import "./Details.scss";

interface IDetailsMediaProps { }

const DetailsMedia: FC<IDetailsMediaProps> = () => {
	const { mediaType, mediaId } = useParams<keyof IParams>();
	const type = mediaType === "movie" ? "movie" : "tv";
	const [details, setDetails] = useState<IResponseMediaDetailsValidationRoot<typeof type>>();
	const { dispatch, actions } = useReducer();

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	useEffect(() => {
		const getDetails = async () => {
			if (!mediaType || !mediaId) return;

			dispatch(actions.setIsLoading(true));
			const { data } = await mediaApi.getDetails({ mediaType, mediaId });
			dispatch(actions.setIsLoading(false));

			if (data) {
				setDetails(data);
			}
		}

		getDetails();
	}, [mediaType, mediaId]);

	console.log(details);

	return (
		<>
			{details
				? (
					<div className="media-details">
						<MediaDetailsHeader src={mediaConfig.methods.poster_path(details?.backdrop_path || details?.poster_path)} />
						<div className="media-details__body">
							<MediaDetailsPanel
								src={mediaConfig.methods.poster_path(details.poster_path) || ""}
								genres={details.genres.map(item => item.name)}
								countries={details?.production_countries.map(item => item.name)}
								rating={details.vote_average}
								voteCount={details.vote_count}
								status={details.status}
								description={details.overview}
								title={(
									mediaType === "movie"
										? (
											(details as IResponseMediaDetailsValidationRoot<"movie">).title
											|| (details as IResponseMediaDetailsValidationRoot<"movie">).original_title
										)
										: mediaType === "tv"
											? (
												(details as IResponseMediaDetailsValidationRoot<"tv">).name
												|| (details as IResponseMediaDetailsValidationRoot<"tv">).original_name
											)
											: null
								)}
								originalTitle={(
									mediaType === "movie"
										? (
											(details as IResponseMediaDetailsValidationRoot<"movie">).original_title
										)
										: mediaType === "tv"
											? (
												(details as IResponseMediaDetailsValidationRoot<"tv">).original_name
											)
											: null
								)}
								directors={(
									details?.credits.crew.filter(item => item.job === "Director").map(item => item.name || item.original_name)
								)}
								released={(
									mediaType === "movie"
										? (
											(details as IResponseMediaDetailsValidationRoot<"movie">).release_date.split("-")[0]
										)
										: mediaType === "tv"
											? (
												(details as IResponseMediaDetailsValidationRoot<"tv">).first_air_date.split("-")[0]
											)
											: null
								)}
								duration={(
									mediaType === "movie"
										? (
											(details as IResponseMediaDetailsValidationRoot<"movie">).runtime
										)
										: mediaType === "tv"
											? (
												(details as IResponseMediaDetailsValidationRoot<"tv">).episode_run_time
											)
											: null
								)}
							/>

							<MediaDetailsSwiperListActors
								className="media-details__actors"
								title="Actors:"
								actors={(
									details.credits.cast
										.filter(actor => actor.profile_path && actor.profile_path)
										.map(item => (
											new ActorDto(
												item.id,
												item.name,
												mediaConfig.methods.poster_path(item.profile_path)
											)
										))
								)}
							/>

						</div>
					</div>
				)
				: null}
		</>
	);
};

export default DetailsMedia;