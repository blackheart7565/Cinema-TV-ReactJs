import { FC, ReactNode } from "react";
import { FreeMode, Navigation } from "swiper/modules";
import { useSwiperNavigation } from "../../../hooks/swiper.hook";
import { motionOption, propsMotionOption, variantsSectionActors } from "../../../motion/details.motion";
import { IActor } from "../../../types/media-types/details.type";
import LinearSwiper from "../../UI/LinearSwiper/LinearSwiper";
import { MDiv } from "../../motion/motion.component";
import MediaDetailsSwiperListItemActors from "../MediaDetailsSwiperListItemActors/MediaDetailsSwiperListItemActors";
import MediaDetailsSwiperNavigation from "../MediaDetailsSwiperNavigation/MediaDetailsSwiperNavigation";

interface IMediaDetailsSwiperListActorsProps {
	title?: string;
	actors: IActor[];
	className?: string;
	children?: ReactNode;
}
const isOnce: boolean = true;
const isViewport: boolean = true;

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
				<MDiv
					{...propsMotionOption({ isViewport: isViewport })}
					viewport={motionOption.viewport({
						isOnce: isOnce,
					})}
					variants={variantsSectionActors}
					className={`${className}`}
				>
					<div className={`${className}-header`}>
						<p className={`${className}-title`}>{title}</p>
						<MediaDetailsSwiperNavigation
							className={className}
							onPrev={onHandlerPrev}
							onNext={onHandlerNext}
						/>
					</div>

					{actors && actors.length > 0 && (
						<LinearSwiper
							wrapperClassName={`${className}-swiper`}
							slideClassName={`${className}-swiper-item`}
							ref={swiperRef}
							options={{
								grabCursor: true,
								slidesPerView: "auto",
								spaceBetween: 10,
								freeMode: true,
								navigation: {
									nextEl: `${className}-btn-next`,
									prevEl: `${className}-btn-prev`,
								},
								speed: 600,
								modules: [Navigation, FreeMode]
							}}
							collection={actors.map((item: IActor, index: number) => ({
								id: item.id,
								element: (
									<MediaDetailsSwiperListItemActors
										className={className}
										actorName={item.name}
										characterName={item.characterName}
										pathImage={item.pathImage}
									/>
								)
							}))}
						/>
					)}
				</MDiv>
			)}
		</>
	);
};

export default MediaDetailsSwiperListActors;