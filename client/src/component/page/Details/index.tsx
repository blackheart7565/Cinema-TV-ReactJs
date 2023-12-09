import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { mediaConfig } from "../../../api/config/media.config";
import mediaApi from "../../../api/modules/media.api";
import { useReducer } from "../../../hooks/reducer.hook";
import { Crew, IActor, IMediaDetailsPanelProps, IResponseMediaDetailsValidationRoot, ProductionCountry } from "../../../types/media-types/details.type";
import { IParams } from "../../../types/other.type";
import MediaDetailsHeader from "../../Details/MediaDetailsHeader";
import MediaDetailsPanel from "../../Details/MediaDetailsPanel";

import TimeFormat from "../../../utils/TimeFormat";
import MediaDetailsSwiperListActors from "../../Details/MediaDetailsSwiperListActors/inidex";
import Rating from "../../model/Rating";
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
								actors={
									details.credits.cast.map(item => {
										return {
											id: item.id,
											name: item.name,
											pathImage: mediaConfig.methods.poster_path(item.profile_path),
										} as IActor
									})
								}
							/>

						</div>
					</div>
				)
				: null}
		</>
	);
};

const MediaDetailsPanel: FC<IMediaDetailsPanelProps> = ({
	src,
	title,
	originalTitle,
	directors,
	released,
	countries,
	rating,
	duration
}) => {

	return (
		<>
			<div className="media-details__film-panel">
				<div className="media-details__post">
					<img className="media-details__post-img" src={src || ""} alt="" />
				</div>

				<section className="media-details__info">
					<h2 className="media-details__title">{title}</h2>
					<h3 className="media-details__original-title">{originalTitle}</h3>

					<div className="media-details__content">
						<div className="media-details__content-left">
							{directors && directors?.length > 0 && (
								<div className="media-details__directors">
									<div className="media-details__directors-title">Director:</div>
									<div className="media-details__directors-list">
										{directors?.map((item: Crew) => (
											<div key={item.id} className="media-details__director">
												{item.name || item.original_name}
											</div>
										))}
										{directors?.map((item: Crew) => (
											<div key={item.id} className="media-details__director">
												{item.name || item.original_name}
											</div>
										))}
										{directors?.map((item: Crew) => (
											<div key={item.id} className="media-details__director">
												{item.name || item.original_name}
											</div>
										))}
										{directors?.map((item: Crew) => (
											<div key={item.id} className="media-details__director">
												{item.name || item.original_name}
											</div>
										))}
									</div>
								</div>
							)}
							<div className="media-details__released">
								<div className="media-details__released-title">Released:</div>
								<div className="media-details__released-text">{released}</div>
							</div>
							{countries && countries.length > 0 && (
								<div className="media-details__countries">
									<div className="media-details__countries-title">Country: </div>
									<div className="media-details__countries-list">
										{countries?.map((item: ProductionCountry) => (
											<div key={item.iso_3166_1} className="media-details__country">
												{item.name}
											</div>
										))}
									</div>
								</div>
							)}
							<div className="media-details__duration">
								<div className="media-details__duration-title">Duration: </div>
								<div className="media-details__duration-text">
									{
										(typeof duration === "number")
											? TimeFormat.convertSecondToHourMinutes(duration)
											: (duration instanceof Array && duration.length > 1)
												? `${duration[0]}m-${duration[duration.length - 1]}m`
												: (duration instanceof Array && duration.length === 1)
													? `${duration[0]}m`
													: null
									}
								</div>
							</div>
						</div>
						<div className="media-details__content-right">
							<div className="media-details__rating">
								{rating && (
									<Rating rating={rating} />
								)}
							</div>
						</div>
					</div>

					<div className="media-details__actors">
						<p className="media-details__actors-title"></p>
						<div className="media-details__actors-list"></div>
					</div>

				</section>
			</div>
		</>
	)
}

export default DetailsMedia;