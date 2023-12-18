import classNames from "classnames";
import React from 'react';
import { Link } from "react-router-dom";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import concatClasses from "../../../utils/ClassNames";

interface IRecommendations {
	id: string | number;
	name?: string | undefined;
	poster: string;
}

interface IMediaDetailsRecommendationProps {
	className?: string | undefined;
	titleBlock?: string | undefined;
	mediaType?: string | undefined;
	recommendations: IRecommendations[];
}

const MediaDetailsRecommendation: React.FC<IMediaDetailsRecommendationProps> = ({
	className,
	titleBlock,
	mediaType,
	recommendations,
}) => {
	return (
		<div className={classNames(className)}>
			{titleBlock && (
				<div className={classNames(className && concatClasses(className, "-header"))}>
					<div className={classNames(className && concatClasses(className, "-title"))}>
						{titleBlock}
					</div>
				</div>
			)}
			<div className={classNames(className && concatClasses(className, "-content"))}>
				<Swiper
					className={classNames("swiper", className && concatClasses(className, "-list"))}
					// ref={swiperRef}
					grabCursor={true}
					slidesPerView={"auto"}
					spaceBetween={10}
					freeMode={true}
					speed={600}
					modules={[FreeMode]}
				>
					{recommendations.map(item => (
						<SwiperSlide
							key={item.id}
							className={classNames("swiper-slide", className && concatClasses(className, "-item"))}
						>
							<Link
								to={`/${mediaType}/${item.id}`}
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
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default MediaDetailsRecommendation;