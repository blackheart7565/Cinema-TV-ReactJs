
import { mediaConfig } from "../../../api/config/media.config";
import HomeModelContent from "../../model/HomeModelContent/HomeModelContent";
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