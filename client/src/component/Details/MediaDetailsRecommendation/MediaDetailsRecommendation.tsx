import classNames from "classnames";
import React from 'react';
import { Link } from "react-router-dom";
import { FreeMode } from "swiper/modules";
import { mediaConfig } from "../../../api/config/media.config";
import { motionOption, propsMotionOption, variantsMediaDetailsRecommendation } from "../../../motion/details.motion";
import concatClasses from "../../../utils/ClassNames";
import LinearSwiper from "../../UI/LinearSwiper/LinearSwiper";
import { MDiv } from "../../motion/motion.component";

interface IRecommendations {
	id: string | number;
	name?: string | undefined;
	poster: string;
}

interface IMediaDetailsRecommendationProps {
	className?: string | undefined;
	titleBlock?: string | undefined;
	mediaType?: string | undefined;
	recommendations?: IRecommendations[];
}

const isOnce: boolean = true;
const isViewport: boolean = true;

const MediaDetailsRecommendation: React.FC<IMediaDetailsRecommendationProps> = ({
	className,
	titleBlock,
	mediaType,
	recommendations,
}) => {
	return (
		<>
			{recommendations && recommendations.length > 0 && (
				<MDiv
					{...propsMotionOption({ isViewport: isViewport })}
					viewport={motionOption.viewport({
						amount: "all",
						isOnce: isOnce,
					})}
					variants={variantsMediaDetailsRecommendation}
					className={classNames(className)}
				>
					{titleBlock && (
						<div className={classNames(className && concatClasses(className, "-header"))}>
							<div className={classNames(className && concatClasses(className, "-title"))}>
								{titleBlock}
							</div>
						</div>
					)}
					<div className={classNames(className && concatClasses(className, "-content"))}>
						<LinearSwiper
							wrapperClassName={className && concatClasses(className, "-list")}
							slideClassName={className && concatClasses(className, "-item")}
							options={{
								grabCursor: true,
								slidesPerView: "auto",
								spaceBetween: 10,
								freeMode: true,
								speed: 600,
								modules: [FreeMode]
							}}
							collection={recommendations.map((item: IRecommendations) => ({
								id: item.id,
								element: (
									<Link
										to={`/${mediaType && mediaConfig.methods.replaceMovieAndTv_To_FilmsAndSerials(mediaType)}/${mediaType}/${item.id}`}
										className={classNames(className && concatClasses(className, "-link"))}
									>
										<img
											className={classNames(className && concatClasses(className, "-poster"))}
											src={item.poster}
											alt="recommendation-poster"
										/>
										<div className={classNames(className && concatClasses(className, "-info"))}>
											<div className={classNames(className && concatClasses(className, "-name"))}>
												{item.name}
											</div>
										</div>
									</Link>
								)
							}))}
						/>
					</div>
				</MDiv>
			)}
		</>
	);
};

export default MediaDetailsRecommendation;