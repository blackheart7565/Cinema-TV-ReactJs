import { FC, ReactNode, useEffect, useState } from "react";
import { EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

import { mediaConfig } from "../../../api/config/media.config";
import mediaApi from "../../../api/modules/media.api";
import { useReducer } from "../../../hooks/reducer.hook";
import { IVariant, VariantSlideEnum } from "../../../types/component.types";
import { IResponseMediasListResult } from "../../../types/media.types";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./Swiper.scss";

interface IPopularMediaSwiper {
	children?: ReactNode;
	variant?: IVariant;
}

export const PopularMediaSwiper: FC<IPopularMediaSwiper> = ({
	variant,
	children
}) => {
	const [popularMedia, setPopularMedia] = useState<IResponseMediasListResult[]>([]);
	const { dispatch, actions } = useReducer();

	const fetchData = async () => {
		dispatch(actions.setIsLoading(true));
		const responseMovie = await mediaApi.getList({
			mediaType: mediaConfig.types.movie,
			mediaCategory: mediaConfig.category.popular,
			page: "1",
		});
		const responseSerials = await mediaApi.getList({
			mediaType: mediaConfig.types.tv,
			mediaCategory: mediaConfig.category.popular,
			page: "1",
		});
		dispatch(actions.setIsLoading(false));

		if (responseMovie.results || responseSerials.results) {
			setPopularMedia([
				...responseMovie.results,
				...responseSerials.results,
			]);
		}
	}

	useEffect(() => {
		fetchData();
	}, [mediaConfig.types.movie, mediaConfig.category.popular, dispatch]);

	if (!variant) variant = VariantSlideEnum.TEST;

	return (
		<div className="home__header-swiper">
			<Swiper
				className="swiper"
				grabCursor={true}
				centeredSlides={true}
				lazyPreloadPrevNext={5}
				loopAdditionalSlides={5}
				loopAddBlankSlides={true}
				effect={'coverflow'}
				loop={true}
				// freeMode={true}
				spaceBetween={40}
				speed={600}
				coverflowEffect={{
					rotate: 20,
					stretch: 0,
					depth: 200,
					modifier: 1,
					slideShadows: true,
				}}
				modules={[EffectCoverflow]}
				breakpoints={{
					1400: {
						slidesPerView: 5,
					},
					1100: {
						slidesPerView: 4,
					},
					900: {
						slidesPerView: 3,
					},
					500: {
						slidesPerView: 2,
					},
					320: {
						slidesPerView: 1,
					},
				}}
			>
				{(variant === VariantSlideEnum.DYNAMIC_LIST) && (
					popularMedia?.map((slide) =>
						<SwiperSlide key={slide.id}>
							<img
								className="swiper-img"
								src={mediaConfig.methods.poster_path(slide.poster_path || slide.backdrop_path)}
								alt="media-popular-img"
							/>
						</SwiperSlide>
					)
				)}
				{(variant === VariantSlideEnum.CHILDREN) && children}
				{(variant === VariantSlideEnum.TEST) && (
					<>
						<SwiperSlide>
							<img className="swiper-img" src="/path/header/slide-1.jpg" alt="" />
						</SwiperSlide>
						<SwiperSlide>
							<img className="swiper-img" src="/path/header/slide-2.jpg" alt="" />
						</SwiperSlide>
						<SwiperSlide>
							<img className="swiper-img" src="/path/header/slide-3.jpg" alt="" />
						</SwiperSlide>
						<SwiperSlide>
							<img className="swiper-img" src="/path/header/slide-4.jpg" alt="" />
						</SwiperSlide>
						<SwiperSlide>
							<img className="swiper-img" src="/path/header/slide-5.jpg" alt="" />
						</SwiperSlide>
						<SwiperSlide>
							<img className="swiper-img" src="/path/header/slide-1.jpg" alt="" />
						</SwiperSlide>
						<SwiperSlide>
							<img className="swiper-img" src="/path/header/slide-2.jpg" alt="" />
						</SwiperSlide>
						<SwiperSlide>
							<img className="swiper-img" src="/path/header/slide-3.jpg" alt="" />
						</SwiperSlide>
						<SwiperSlide>
							<img className="swiper-img" src="/path/header/slide-4.jpg" alt="" />
						</SwiperSlide>
						<SwiperSlide>
							<img className="swiper-img" src="/path/header/slide-5.jpg" alt="" />
						</SwiperSlide>
						<SwiperSlide>
							<img className="swiper-img" src="/path/header/slide-1.jpg" alt="" />
						</SwiperSlide>
						<SwiperSlide>
							<img className="swiper-img" src="/path/header/slide-2.jpg" alt="" />
						</SwiperSlide>
						<SwiperSlide>
							<img className="swiper-img" src="/path/header/slide-3.jpg" alt="" />
						</SwiperSlide>
						<SwiperSlide>
							<img className="swiper-img" src="/path/header/slide-4.jpg" alt="" />
						</SwiperSlide>
						<SwiperSlide>
							<img className="swiper-img" src="/path/header/slide-5.jpg" alt="" />
						</SwiperSlide>
						<SwiperSlide>
							<img className="swiper-img" src="/path/header/slide-1.jpg" alt="" />
						</SwiperSlide>
						<SwiperSlide>
							<img className="swiper-img" src="/path/header/slide-2.jpg" alt="" />
						</SwiperSlide>
						<SwiperSlide>
							<img className="swiper-img" src="/path/header/slide-3.jpg" alt="" />
						</SwiperSlide>
						<SwiperSlide>
							<img className="swiper-img" src="/path/header/slide-4.jpg" alt="" />
						</SwiperSlide>
						<SwiperSlide>
							<img className="swiper-img" src="/path/header/slide-5.jpg" alt="" />
						</SwiperSlide>
					</>
				)}
			</Swiper>
		</div>
	);
};