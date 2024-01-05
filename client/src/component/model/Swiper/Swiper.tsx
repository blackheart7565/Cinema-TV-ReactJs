import { FC, ReactNode, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { SwiperSlide } from "swiper/react";

import { mediaConfig } from "../../../api/config/media.config";
import mediaApi from "../../../api/modules/media.api";
import { useReducer } from "../../../hooks/reducer.hook";
import loaderSlice from "../../../store/reducer/loader.slice";
import { IResponseMediasListResult, IResponseMediasListResultMovie, IResponseMediasListResultSerials } from "../../../types/media.types";
import SwiperModel from "./SwiperModel/SwiperModel";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface IPopularMediaSwiper {
	children?: ReactNode;
}

const page: number = 1;

export const PopularMediaSwiper: FC<IPopularMediaSwiper> = ({
	children
}) => {
	const [popularMedia, setPopularMedia] = useState<IResponseMediasListResult[]>([]);
	const { dispatch } = useReducer();

	useEffect(() => {
		const fetchData = async () => {
			dispatch(loaderSlice.actions.setIsLoading(true));

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

			dispatch(loaderSlice.actions.setIsLoading(false));

			setPopularMedia([
				...responseMovie?.results,
				...responseSerials?.results,
			]);
		}

		fetchData();
	}, [dispatch]);

	const memoizedPopularMedia = useMemo(() => popularMedia, [popularMedia]);

	return (
		<div className="home__header">
			<SwiperModel
				className={"home__header-swiper"}
				spaceBetween={40}
				speed={600}
			>
				{memoizedPopularMedia?.map((slide) => (
					<SwiperSlide key={slide.id} className={"home__header-slide"}>
						<Link to={"/"} className="home__header-link">
							<img
								className="home__header-img"
								src={mediaConfig.methods.poster_path(slide.poster_path || slide.backdrop_path)}
								alt="media-popular-img"
							/>
						</Link>
					</SwiperSlide>
				))}
			</SwiperModel>
		</div>
	);
};