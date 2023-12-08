import { FC, ReactNode, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { SwiperSlide } from "swiper/react";

import { mediaConfig } from "../../../api/config/media.config";
import mediaApi from "../../../api/modules/media.api";
import { useReducer } from "../../../hooks/reducer.hook";
import { IVariant, VariantSlideEnum } from "../../../types/component.types";
import { IResponseMediasListResult, IResponseMediasListResultMovie, IResponseMediasListResultSerials } from "../../../types/media.types";
import SwiperModel from "./SwiperModel";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./Swiper.scss";

interface IPopularMediaSwiper {
	variant?: IVariant;
	children?: ReactNode;
}

const page: number = 1;

export const PopularMediaSwiper: FC<IPopularMediaSwiper> = ({
	variant = VariantSlideEnum.TEST,
	children
}) => {
	const [popularMedia, setPopularMedia] = useState<IResponseMediasListResult[]>([]);
	const { dispatch, actions } = useReducer();

	useEffect(() => {
		const fetchData = async () => {
			dispatch(actions.setIsLoading(true));

			const { data: responseMovie } = await mediaApi.getList<IResponseMediasListResultMovie>({
				mediaType: mediaConfig.types.movie,
				mediaCategory: mediaConfig.category.popular,
				page: page,
			});
			const { data: responseSerials } = await mediaApi.getList<IResponseMediasListResultSerials>({
				mediaType: mediaConfig.types.tv,
				mediaCategory: mediaConfig.category.popular,
				page: page,
			});

			dispatch(actions.setIsLoading(false));

			setPopularMedia([
				...responseMovie?.results,
				...responseSerials?.results,
			]);
		}

		fetchData();
	}, [dispatch]);

	const memoizedPopularMedia = useMemo(() => popularMedia, [popularMedia]);

	return (
		<div className="home__header-swiper">
			<SwiperModel
				spaceBetween={40}
				speed={600}
			>
				{(variant === VariantSlideEnum.DYNAMIC_LIST) && (
					memoizedPopularMedia?.map((slide) =>
						<SwiperSlide key={slide.id}>
							<Link to={"/"} className="swiper__link">
								<img
									className="swiper-img"
									src={mediaConfig.methods.poster_path(slide.poster_path || slide.backdrop_path)}
									alt="media-popular-img"
								/>
							</Link>
						</SwiperSlide>
					)
				)}
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
			</SwiperModel>
		</div>
	);
};