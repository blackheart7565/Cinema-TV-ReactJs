import { FC } from 'react';
import { FreeMode, Navigation, Pagination, Zoom } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import MediaDetailsSwiperSlideImage from "../MediaDetailsSwiperSlideImage";

import 'swiper/css/zoom';

interface IMediaDetailsSwiperGalleryProps {
	className?: string;
	images: string[];
}

const MediaDetailsSwiperGallery: FC<IMediaDetailsSwiperGalleryProps> = ({
	className,
	images,
}) => {
	const checkClass = (className: string | undefined, classNameSelector: string): string | undefined =>
		className ? `${className}-${classNameSelector}` : undefined

	return (
		<div className={className || undefined}>
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
					Zoom
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
							<div className="swiper-zoom-container">
								<MediaDetailsSwiperSlideImage
									className={checkClass(className, 'img')}
									pathImage={img}
								/>
							</div>
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
		</div>
	);
};

export default MediaDetailsSwiperGallery;