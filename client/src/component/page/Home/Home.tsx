import { useEffect } from "react";
import { mediaConfig } from "../../../api/config/media.config";
import HomeContent from "../../model/HomeContent/HomeContent";
import { PopularMediaSwiper } from "../../model/PopularMediaSwiper/PopularMediaSwiper";

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

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="home">
			<PopularMediaSwiper />
			<HomeContent
				title="Anime"
				posters={postersAnime}
				mediaType={mediaConfig.types.movie}
				mediaCategory={mediaConfig.category.now_playing_movie}
			/>
			<HomeContent
				title="Films"
				posters={postersFilms}
				mediaType={mediaConfig.types.movie}
				mediaCategory={mediaConfig.category.now_playing_movie}
			/>
			<HomeContent
				title="Serials"
				posters={postersSerials}
				mediaType={mediaConfig.types.tv}
				mediaCategory={mediaConfig.category.airing_today_tv}
			/>
		</div>
	);
};

export default Home;