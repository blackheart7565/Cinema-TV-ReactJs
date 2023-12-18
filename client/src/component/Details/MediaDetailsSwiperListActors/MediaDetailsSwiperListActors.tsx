import { FC, ReactNode } from "react";
import { A11y, FreeMode, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiperNavigation } from "../../../hooks/swiper.hook";
import { IActor } from "../../../types/media-types/details.type";
import MediaDetailsSwiperListItemActors from "../MediaDetailsSwiperListItemActors/MediaDetailsSwiperListItemActors";
import MediaDetailsSwiperNavigation from "../MediaDetailsSwiperNavigation/MediaDetailsSwiperNavigation";

interface IMediaDetailsSwiperListActorsProps {
	title?: string;
	actors: IActor[];
	className?: string;
	children?: ReactNode;
}

const MediaDetailsSwiperListActors: FC<IMediaDetailsSwiperListActorsProps> = ({
	title,
	className,
	actors,
	children,
}) => {
	const { swiperRef, onHandlerNext, onHandlerPrev } = useSwiperNavigation();

	return (
		<>
			{actors && actors.length > 0 && (
				<div className={`${className}`}>
					<div className={`${className}-header`}>
						<p className={`${className}-title`}>{title}</p>
						<MediaDetailsSwiperNavigation
							className={className}
							onPrev={onHandlerPrev}
							onNext={onHandlerNext}
						/>
					</div>

					<Swiper
						className={`swiper ${className}-swiper`}
						ref={swiperRef}
						grabCursor={true}
						slidesPerView={"auto"}
						spaceBetween={10}
						freeMode={true}
						navigation={{
							nextEl: `${className}-btn-next`,
							prevEl: `${className}-btn-prev`,
						}}
						speed={600}
						modules={[Navigation, FreeMode, A11y]}
					>
						{actors && actors.length > 0
							? (
								actors.map((item: IActor) => (
									<SwiperSlide
										key={item.id}
										className={`${className}-swiper-item`}
									>
										<MediaDetailsSwiperListItemActors
											className={className}
											actorName={item.name}
											pathImage={item.pathImage}
										/>
									</SwiperSlide>
								))
							)
							: (
								children
							)}
					</Swiper>
				</div>
			)}
		</>
	);
};

export default MediaDetailsSwiperListActors;

