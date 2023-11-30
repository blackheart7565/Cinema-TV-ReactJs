import { useEffect, useState } from "react";

import { mediaConfig } from "../../../api/config/media.config";
import mediaApi from "../../../api/modules/media.api";
import { IResponseMediasListResult } from "../../../types/media.types";
import HomeModelContent from "../../model/HomeModelContent";
import { PopularMediaSwiper } from "../../model/Swiper";

import "./Home.scss";

const Home = () => {
	const postersAnime = [
		'/path/home/anime_1.png',
		'/path/home/anime_2.png'
	];
	const postersFilms = [
		'/path/home/films_1.png',
		'/path/home/films_2.png'
	];
	const postersSerials = [
		'/path/home/serials_1.png',
		'/path/home/serials_2.png'
	];

	const [popularMedia, setPopularMedia] = useState<IResponseMediasListResult[]>([]);
	const [playingNowMovie, setPlayingNowMovie] = useState<IResponseMediasListResult[]>([]);
	const [playingNowSerials, setPlayingNowSerials] = useState<IResponseMediasListResult[]>([]);
	// const { dispatch, state, actions } = useReducer();

	useEffect(() => {
		async function getMediaList() {
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

			setPopularMedia([
				...responseMovie.results,
				...responseSerials.results
			]);
			console.log(popularMedia);
		};
	}, [popularMedia]);

	useEffect(() => {
		(async function () {
			const responseMovie = await mediaApi.getList({
				mediaType: mediaConfig.types.movie,
				mediaCategory: mediaConfig.category.now_playing_movie,
				page: "1"
			});
			const responseSerials = await mediaApi.getList({
				mediaType: mediaConfig.types.tv,
				mediaCategory: mediaConfig.category.airing_today_tv,
				page: "1"
			});

			setPlayingNowMovie(responseMovie.results);
			setPlayingNowSerials(responseSerials.results);
		})()
	}, []);

	return (
		<div className="home">
			<PopularMediaSwiper />
			<HomeModelContent
				title="Anime"
				classPrefix="home"
				posters={postersAnime}
				mediaType={mediaConfig.types.movie}
				mediaCategory={mediaConfig.category.now_playing_movie}
			/>
			<HomeModelContent
				title="Films"
				classPrefix="home"
				posters={postersFilms}
				mediaType={mediaConfig.types.movie}
				mediaCategory={mediaConfig.category.now_playing_movie}
			/>
			<HomeModelContent
				title="Serials"
				classPrefix="home"
				posters={postersSerials}
				mediaType={mediaConfig.types.tv}
				mediaCategory={mediaConfig.category.airing_today_tv}
			/>
		</div>
	);
};

export default Home;
