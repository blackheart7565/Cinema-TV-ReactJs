import { motion } from "framer-motion";
import { FC, useState } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";
import { useFavorite } from "../../../hooks/favorite.hook";
import { useLoadingMotion } from "../../../hooks/motion.hook";
import { useReducer } from "../../../hooks/reducer.hook";
import { motionOption, variantMediaDetailsPanelOriginTitle, variantMediaDetailsPanelTitle, variantsMediaDetailsRatingNumber } from "../../../motion/details.motion";
import { IFavorite } from "../../../types/user.types";
import favoriteUtils from "../../../utils/FavoriteUtils";
import TimeFormat from "../../../utils/TimeFormat";
import Button from "../../UI/Button";
import Rating from "../../model/Rating/Rating";
import { MDiv } from "../../motion/motion.component";
import { IMediaTypeEnums } from "../../page/Details/Details";
import MediaDetailsInfoRow from "../MediaDetailsInfoRow/MediaDetailsInfoRow";
import MediaDetailsPost from "../MediaDetailsPost/MediaDetailsPost";

interface IMediaDetailsPanelProps {
	src: string;
	title?: string | undefined;
	originalTitle?: string | undefined;
	directors?: string[] | undefined | null;
	released?: string | undefined;
	countries?: string[] | undefined | null;
	rating?: string | number | undefined | null;
	duration?: number | number[] | undefined | null;
	voteCount?: number | undefined | null;
	description?: string | undefined | null;

	mediaType?: IMediaTypeEnums | undefined;
	mediaId?: string | undefined;

	status?: string | undefined | null;
	genres?: string[] | undefined | null;
	moveToVideoSectionRef?: React.RefObject<HTMLDivElement> | undefined;
}

const isOnce: boolean = true;
const isViewport: boolean = false;

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
	mediaId,
	mediaType,
	status,
	genres,
	moveToVideoSectionRef,
}) => {
	const navigate = useNavigate();
	const { state } = useReducer();
	const { onAddFavorite, onRemoveFavorite } = useFavorite();

	const favoriteCheck = favoriteUtils.check({
		listFavorites: state.user.user?.favorite,
		mediaId,
		mediaType,
	});
	const [isFavorite, setIsFavorite] = useState<boolean>(favoriteCheck || false);

	const propsMotionOption = useLoadingMotion({
		isLoading: state.loader.isLoading,
		isViewport: isViewport,
	});

	const handelScrollToWatchOnline = (): void => {
		if (moveToVideoSectionRef?.current) {
			moveToVideoSectionRef.current.scrollIntoView({
				behavior: 'auto'
				, block: "start"
			})
		}
	}

	const handleToggleFavorite = async () => {
		try {
			if (Object.keys(state.user.user).length < 1) {
				return navigate("/auth");
			}


			if (isFavorite && mediaId) {
				onRemoveFavorite(mediaId);
				setIsFavorite(false);

				toast.success("Successfully removed from favorites!");
				return;
			}

			if (!isFavorite && mediaId && released && title && originalTitle && mediaType) {
				const favorite: IFavorite = {
					userId: state.user.user.id,
					mediaId,
					mediaPosterPath: src,
					mediaRating: Number(rating),
					mediaReleaseDate: released,
					mediaTitle: title || originalTitle,
					mediaType,
				}
				onAddFavorite(favorite);
				setIsFavorite(true);

				toast.success("Successfully added to favorites!");
			}
		} catch (error: any) {
			toast.error(error);
		}
	}

	return (
		<>
			<div className="media-details__film-panel"
			>
				<MediaDetailsPost src={src} />
				<section className="media-details__info">
					<motion.h2
						custom={2}
						{...propsMotionOption}
						viewport={motionOption.viewport({
							isOnce: isOnce,
						})}
						variants={variantMediaDetailsPanelTitle}
						className="media-details__title"
					>
						{title}
					</motion.h2>
					<motion.h3
						custom={2.3}
						{...propsMotionOption}

						viewport={motionOption.viewport({
							isOnce: isOnce,
						})}
						variants={variantMediaDetailsPanelOriginTitle}
						className="media-details__original-title"
					>
						{originalTitle}
					</motion.h3>

					<MediaDetailsInfoRow
						className="media-details__genres"
						isLink
						value={genres}
						title={"Genre"}
					/>

					<div className="media-details__content">
						<div className="media-details__content-left">

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
								className={"media-details__director"}
								value={directors}
								title={"Director"} />

							<MediaDetailsInfoRow
								className={"media-details__countries"}
								value={countries}
								title={"Country"} />

							<MediaDetailsInfoRow
								className={"media-details__status"}
								value={status}
								title={"Status"} />

							<MediaDetailsInfoRow
								className={"media-details__description"}
								value={description}
								title={"Description"} />

						</div>
						<div className="media-details__content-right">
							<div className="media-details__rating-container">
								<div className="media-details__rating">
									{rating !== undefined && rating !== null && (
										<Rating rating={rating} />
									)}
								</div>
								<MDiv
									custom={6}
									{...propsMotionOption}
									viewport={motionOption.viewport({
										isOnce: true,
									})}
									variants={variantsMediaDetailsRatingNumber}
									className="media-details__rating-number"
								>
									<span className="media-details__rating-selector-1">{Number(rating).toFixed(1)}</span>
									<span className="media-details__rating-selector-2">/10</span>
								</MDiv>
							</div>
							<MediaDetailsInfoRow
								className={"media-details__vote-count"}
								value={(
									voteCount === 1
										? `${voteCount} голос`
										: (voteCount && (voteCount > 1 || voteCount <= 4))
											? `${voteCount} голосa`
											: `${voteCount} голосов`
								)}
								title={"Vote count"} />

							<MediaDetailsInfoRow
								className={"media-details__released"}
								value={released}
								title={"Released"} />

							<div className="media-details__btns">

								<div
									className="media-details__btns-favorite"
									onClick={handleToggleFavorite}
								>
									{isFavorite
										? (
											<MdFavorite size={"30px"} color="#DA0027" />
										)
										: (
											<MdFavoriteBorder size={"30px"} color="#DA0027" />
										)}
								</div>
								<div className="media-details__btns-watch-online">
									<Button onClick={handelScrollToWatchOnline}> Watch online </Button>
								</div>
							</div>

						</div>
					</div>
				</section>
			</div>
		</>
	)
};

export default MediaDetailsPanel;