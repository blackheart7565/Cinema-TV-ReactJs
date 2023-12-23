import classNames from "classnames";
import { FC, ReactNode, forwardRef } from "react";
import { Link } from "react-router-dom";
import { FreeMode, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { IMediaTop } from "../../../types/media-types/details.type";

import { mediaConfig } from "../../../api/config/media.config";
import "./MediaDetailsTop.scss";

interface IMediaDetailsTopProps {
	mediaType?: string | undefined;
	className?: string;
	title?: string | ReactNode;
	topList?: IMediaTop[];
}

const MediaDetailsTop: FC<IMediaDetailsTopProps> = forwardRef<HTMLDivElement, IMediaDetailsTopProps>(({
	className,
	title,
	topList,
	mediaType,
}, ref) => {
	return (
		<>
			{topList && (
				<div
					className={classNames("section-top")}
					ref={ref}
				>
					{title && (
						<div className={classNames("section-top__header")}>
							<div className={classNames("section-top__title")}>
								{title}
							</div>
						</div>
					)}
					<div className={classNames("section-top__content")}>
						<Swiper
							className={classNames("swiper", "section-top__list")}
							direction="vertical"
							grabCursor={true}
							slidesPerView={"auto"}
							freeMode={true}
							modules={[Mousewheel, FreeMode]}
							mousewheel={true}
						>
							{topList.map((item: IMediaTop) => (
								<SwiperSlide
									key={item.id}
									className={classNames("swiper-slide", "section-top__slide")}
								>
									<Link
										to={`/${mediaType && mediaConfig.methods.replaceMovieAndTv_To_FilmsAndSerials(mediaType)}/${mediaType}/${item.id}`}
										className={classNames("section-top__item")}
									>
										<div className="section-top__image">
											<img className="section-top__img" src={item.pathImage} alt="top-img" />
										</div>
										<div className="section-top__content">
											{item.name}
										</div>
									</Link>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div >
			)}
		</>
	);
});

export default MediaDetailsTop;