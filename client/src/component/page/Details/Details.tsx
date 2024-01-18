import { FC, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import { mediaConfig } from "../../../api/config/media.config";
import mediaApi from "../../../api/modules/media.api";
import { ActorDto } from "../../../dtos/actor.dto";
import { RecommendationsDto } from "../../../dtos/recommendations.dto";
import { MediaTopDto } from "../../../dtos/top-media.dto";
import { useReducer } from "../../../hooks/reducer.hook";
import loaderSlice from "../../../store/reducer/loader.slice";
import { IMediaTop, IResponseMediaDetailsValidationRoot, IResponseMediasDetailsValidationType } from "../../../types/media-types/details.type";
import { IResponseMediasList, IResponseMediasListResultMovie, IResponseMediasListResultSerials, IResponseMediasListValidationType } from "../../../types/media.types";
import { IParams } from "../../../types/other.type";
import MediaDetailsHeader from "../../Details/MediaDetailsHeader/MediaDetailsHeader";
import MediaDetailsPanel from "../../Details/MediaDetailsPanel/MediaDetailsPanel";
import MediaDetailsRecommendation from "../../Details/MediaDetailsRecommendation/MediaDetailsRecommendation";
import MediaDetailsSwiperGallery from "../../Details/MediaDetailsSwiperGallery/MediaDetailsSwiperGallery";
import MediaDetailsSwiperListActors from "../../Details/MediaDetailsSwiperListActors/MediaDetailsSwiperListActors";
import MediaDetailsTabsVideo from "../../Details/MediaDetailsVideo/MediaDetailsVideo";

import "./Details.scss";


export type IMediaTypeEnums = "movie" | "tv" | "";

interface IDetailsMediaProps { }

const DetailsMedia: FC<IDetailsMediaProps> = () => {
	const { mediaType, mediaId } = useParams<keyof IParams>();
	const type = mediaType === "movie" ? "movie" : "tv";
	const [details, setDetails] = useState<IResponseMediaDetailsValidationRoot<typeof type>>();
	const [topMedia, setTopMedia] = useState<IMediaTop[]>([]);
	const { dispatch } = useReducer();
	const moveToVideoSectionRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [mediaType, mediaId]);

	useEffect(() => {
		const getDetails = async () => {
			if (!mediaType || !mediaId) return;

			dispatch(loaderSlice.actions.setIsLoading(true));
			const { data } = await mediaApi.getDetails({ mediaType, mediaId });
			dispatch(loaderSlice.actions.setIsLoading(false));

			if (data) {
				setDetails(data);
			}
		}

		getDetails();
	}, [mediaType, mediaId, dispatch]);

	useEffect(() => {
		if (!mediaType) return;

		const fetchData = async () => {
			const { data } = await mediaApi.getList<IResponseMediasListValidationType<typeof mediaType>>({
				mediaType,
				mediaCategory: mediaConfig.category.top_rated,
				page: 1
			});

			setTopMedia(
				(data as IResponseMediasList<IResponseMediasListValidationType<typeof type>>).results
					.map(item => new MediaTopDto({
						id: item.id,
						name: mediaType === "movie"
							? (item as IResponseMediasListResultMovie).title || (item as IResponseMediasListResultMovie).original_title
							: (item as IResponseMediasListResultSerials).name || (item as IResponseMediasListResultSerials).original_name,
						pathImage: mediaConfig.methods.poster_path(item.poster_path || item.backdrop_path)
					}))
			);
		}

		fetchData();
	}, [mediaType]);

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
								mediaId={mediaId}
								mediaType={mediaType === "movie" ? "movie" : "tv"}
								description={details.overview}
								moveToVideoSectionRef={moveToVideoSectionRef}
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

							<MediaDetailsTabsVideo
								className="media-details__videos"
								mediaType={mediaType === "movie" ? "movie" : "tv"}
								posterVideoPath={mediaConfig.methods.poster_path(details.poster_path || details.backdrop_path)}
								mediaId={mediaId}
								ref={moveToVideoSectionRef}
								trailerUtlKey={(
									details.videos.results.filter(video => video.type === "Trailer"
										|| video.type === "Opening Credits"
										|| video.type === "Featurette"
										|| "")[0]?.key
								)}
								topMedia={topMedia}
								mediaName={(
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
							/>

							<MediaDetailsSwiperListActors
								className="media-details__actors"
								title="Actors:"
								actors={(
									details.credits.cast
										.filter(actor => actor.profile_path && actor.profile_path)
										.map(item => (
											new ActorDto({
												id: item.id,
												name: item.name,
												characterName: item.character,
												pathImage: mediaConfig.methods.poster_path(item.profile_path)
											})
										))
								)}
							/>

							<div className="hidden-container">
								<MediaDetailsSwiperGallery
									className={"media-details__gallery"}
									titleBlock="Gallery:"
									images={(
										[
											...details.images.backdrops.map((item) => mediaConfig.methods.poster_path(item.file_path))
										]
									)}
								/>
							</div>

							<MediaDetailsRecommendation
								titleBlock={"Recommendations:"}
								mediaType={mediaType}
								className={"media-details__recommendations"}
								recommendations={(
									(details.recommendation.results as IResponseMediasDetailsValidationType<typeof type>[])
										.filter((item) => item.poster_path && item.poster_path)
										.map((item): RecommendationsDto => (
											new RecommendationsDto({
												id: item.id,
												name: (
													mediaType === "movie" ? (
														(item as IResponseMediasListResultMovie).title
														|| (item as IResponseMediasListResultMovie).original_title
													) : mediaType === "tv" ? (
														(item as IResponseMediasListResultSerials).name
														|| (item as IResponseMediasListResultSerials).original_name
													) : ""
												),
												poster: mediaConfig.methods.poster_path(item.poster_path || item.backdrop_path)
											})
										))
								)}
							/>

						</div >
					</div >
				)
				: null}
		</>
	);
};

export default DetailsMedia;