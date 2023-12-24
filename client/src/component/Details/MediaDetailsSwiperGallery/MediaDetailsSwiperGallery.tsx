import classNames from "classnames";
import { FC } from 'react';
import { FreeMode, Navigation, Pagination, Zoom } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { motionOption, variantsMediaDetailsGallery } from "../../../motion/details.motion";
import concatClasses from "../../../utils/ClassNames";
import { MDiv } from "../../motion/motion.component";
import MediaDetailsSwiperSlideImage from "../MediaDetailsSwiperSlideImage/MediaDetailsSwiperSlideImage";

import 'swiper/css/zoom';
import { useLoadingMotion } from "../../../hooks/motion.hook";
import { useReducer } from "../../../hooks/reducer.hook";

interface IMediaDetailsSwiperGalleryProps {
	className?: string;
	titleBlock?: string | undefined;
	images: string[];
}

const isOnce: boolean = true;
const isViewport: boolean = true;

const MediaDetailsSwiperGallery: FC<IMediaDetailsSwiperGalleryProps> = ({
	className,
	titleBlock,
	images,
}) => {
	const checkClass = (className: string | undefined, classNameSelector: string): string | undefined =>
		className ? `${className}-${classNameSelector}` : undefined;
	const { state } = useReducer();
	const propsMotionOption = useLoadingMotion({
		isLoading: state.loader.isLoading,
		isViewport: isViewport,
	});

	return (
		<>
			{images && images.length > 0 && (
				<MDiv
					{...propsMotionOption}
					viewport={motionOption.viewport({
						isOnce: isOnce,
					})}
					variants={variantsMediaDetailsGallery}
					className={className || undefined}
				>
					{titleBlock && (
						<div className={className && classNames(concatClasses(className, "-header"))}>
							<div className={className && classNames(concatClasses(className, "-title"))}>
								{titleBlock}
							</div>
						</div>
					)}
					<Swiper
						className={checkClass(className, "swiper")}
						grabCursor={true}
						slidesPerView={"auto"}
						centeredSlides={true}
						zoom={true}
						navigation={{
							nextEl: ".swiper-button-next",
							prevEl: ".swiper-button-prev",
						}}
						pagination={{
							dynamicBullets: true,
							clickable: true,
							el: ".swiper-pagination",
						}}
						modules={[
							FreeMode,
							Pagination,
							Navigation,
							Zoom,
						]}
						breakpoints={{
							480: {
								spaceBetween: 0
							},
							320: {
								spaceBetween: 10
							}
						}}
					>
						{images && (
							images.map((img: string, index: number) => (
								<SwiperSlide
									key={index}
									className={checkClass(className, "slide")}
								>
									{/* <div className="swiper-zoom-container"> */}
									<MediaDetailsSwiperSlideImage
										className={checkClass(className, 'img')}
										pathImage={img}
									/>
									{/* </div> */}
								</SwiperSlide>
							))
						)}
						<div className={`swiper-button-prev ${checkClass(className, "btn-prev")}`}>
							<span></span>
						</div>
						<div className={`swiper-button-next ${checkClass(className, "btn-next")}`}>
							<span></span>
						</div>
						<div className={`swiper-pagination ${checkClass(className, "pagination")}`}></div>
					</Swiper>
				</MDiv>
			)}
		</>
	);
};

export default MediaDetailsSwiperGallery;