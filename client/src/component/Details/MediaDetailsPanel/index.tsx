import { FC } from "react"

import TimeFormat from "../../../utils/TimeFormat"
import Rating from "../../model/Rating"
import MediaDetailsInfoRow from "../MediaDetailsInfoRow"
import MediaDetailsPost from "../MediaDetailsPost"

interface IMediaDetailsPanelProps {
	src: string;
	title: string | null;
	originalTitle: string | null;
	directors?: string[] | undefined | null;
	released?: string | undefined | null;
	countries?: string[] | undefined | null;
	rating?: string | number | undefined | null;
	duration?: number | number[] | undefined | null;
	voteCount?: number | undefined | null;
	description?: string | undefined | null;
	status?: string | undefined | null;
	genres?: string[] | undefined | null;
}

const MediaDetailsPanel: FC<IMediaDetailsPanelProps> = ({
	src,
	title,
	originalTitle,
	directors,
	released,
	countries,
	rating,
	duration,
	voteCount,
	description,
	status,
	genres,
}) => {
	return (
		<>
			<div className="media-details__film-panel">
				<MediaDetailsPost src={src} />
				<section className="media-details__info">
					<h2 className="media-details__title">{title}</h2>
					<h3 className="media-details__original-title">{originalTitle}</h3>

					<MediaDetailsInfoRow
						className="media-details__genres"
						value={genres}
						title={"Genre"}
					/>

					<div className="media-details__content">
						<div className="media-details__content-left">
							{directors && directors?.length > 0 && (
								<MediaDetailsInfoRow
									className={"media-details__director"}
									value={directors}
									title={"Director"} />
							)}

							<MediaDetailsInfoRow
								className={"media-details__released"}
								value={released}
								title={"Released"} />

							{countries && countries.length > 0 && (
								<MediaDetailsInfoRow
									className={"media-details__countries"}
									value={countries}
									title={"Country"} />
							)}

							<MediaDetailsInfoRow
								className={"media-details__duration"}
								value={(
									(typeof duration === "number")
										? TimeFormat.convertSecondToHourMinutes(duration)
										: (duration instanceof Array && duration.length > 1)
											? `${duration[0]}m-${duration[duration.length - 1]}m`
											: (duration instanceof Array && duration.length === 1)
												? `${duration[0]}m`
												: null
								)}
								title={"Duration"} />

							<MediaDetailsInfoRow
								className={"media-details__vote-count"}
								value={`${voteCount} голосов`}
								title={"Vote count"} />

							<MediaDetailsInfoRow
								className={"media-details__description"}
								value={description}
								title={"Description"} />

						</div>
						<div className="media-details__content-right">
							<div className="media-details__rating-container">
								<div className="media-details__rating">
									{rating && (
										<Rating rating={rating} />
									)}
								</div>
								<div className="media-details__rating-number">
									<span className="media-details__rating-selector-1">{Number(rating).toFixed(1)}</span>
									<span className="media-details__rating-selector-2">/10</span>
								</div>
							</div>
							<MediaDetailsInfoRow
								className={"media-details__status"}
								value={status}
								title={"Status"} />
						</div>
					</div>

				</section>
			</div>
		</>
	)
}

export default MediaDetailsPanel;