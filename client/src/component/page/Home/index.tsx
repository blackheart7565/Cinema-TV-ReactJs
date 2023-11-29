import { useEffect, useState } from "react";

import { mediaConfig } from "../../../api/config/media.config";
import MediaApi from "../../../api/modules/media.api";
import HomeModelContent from "./HomeModelContent";

import { IResponseMediasListResult } from "../../../types/media.types";
import { PopularTVSwiper } from "../../model/Swiper";
import "./Home.scss";
import "./HomeModel.scss";


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
		(async function () {
			const responseMovie = await MediaApi.getList({
				mediaType: mediaConfig.types.movie,
				mediaCategory: mediaConfig.category.popular,
				page: "1",
			});
			const responseSerials = await MediaApi.getList({
				mediaType: mediaConfig.types.tv,
				mediaCategory: mediaConfig.category.popular,
				page: "1",
			});

			setPopularMedia([
				...responseMovie.results,
				...responseSerials.results
			]);
			console.log(popularMedia);
		})();
	}, [popularMedia]);

	useEffect(() => {
		(async function () {
			const responseMovie = await MediaApi.getList({
				mediaType: mediaConfig.types.movie,
				mediaCategory: mediaConfig.category.now_playing_movie,
				page: "1"
			});
			const responseSerials = await MediaApi.getList({
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
			{/* <PopularTVSwiper slides={popularMedia} /> */}
			<PopularTVSwiper />
			<HomeModelContent
				title="Anime"
				classPrefix="home"
				cards={playingNowMovie}
				posters={postersAnime}
			/>
			<HomeModelContent
				title="Films"
				classPrefix="home"
				cards={playingNowMovie}
				posters={postersFilms}
			/>
			<HomeModelContent
				title="Serials"
				classPrefix="home"
				cards={playingNowSerials}
				posters={postersSerials}
			/>
		</div>
	);
};

export default Home;