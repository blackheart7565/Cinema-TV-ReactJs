import { FC, ReactNode, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import { mediaConfig } from "../../../api/config/media.config";
import mediaApi from "../../../api/modules/media.api";
import { useReducer } from "../../../hooks/reducer.hook";
import loaderSlice from "../../../store/reducer/loader.slice";
import { IResponseMediasListResult, IResponseMediasListResultMovie, IResponseMediasListResultSerials } from "../../../types/media.types";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { EffectCoverflow } from "swiper/modules";
import LinearSwiper from "../../UI/LinearSwiper/LinearSwiper";

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
			<LinearSwiper
				wrapperClassName={"home__header-swiper"}
				slideClassName={"home__header-slide"}
				options={{
					spaceBetween: 40,
					speed: 600,
					grabCursor: true,
					centeredSlides: true,
					lazyPreloadPrevNext: 5,
					loopAdditionalSlides: 5,
					loopAddBlankSlides: true,
					effect: 'coverflow',
					loop: true,
					modules: [EffectCoverflow],
					coverflowEffect: {
						rotate: 20,
						stretch: 0,
						depth: 200,
						modifier: 1,
						slideShadows: true,
					},
					breakpoints: {
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
					}
				}}
				collection={memoizedPopularMedia.map(slide => ({
					id: slide.id,
					element: (
						<Link to={"/"} className="home__header-link">
							<img
								className="home__header-img"
								src={mediaConfig.methods.poster_path(slide.poster_path || slide.backdrop_path)}
								alt="media-popular-img"
							/>
						</Link>
					)
				}))}
			/>
		</div>
	);
};