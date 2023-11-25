import { useState } from "react";

import { PopularTVSwiper } from "../../model/Swiper";
import { HomeModelContent } from "./HomeModelContent";

import "./HomeAnime.scss";
import "./HomeSerials.scss";
import "./Home.scss";

export interface ICard {
	pathImg: "",
}

const Home = () => {
	const [anime] = useState<Array<ICard>>([
		{
			pathImg: "",
		},
		{
			pathImg: "",
		},
		{
			pathImg: "",
		},
	]);
	const postersAnime = [
		'/path/home/anime_1.png',
		'/path/home/anime_2.png'
	];
	const postersSerials = [
		'/path/home/serials_1.png',
		'/path/home/serials_2.png'
	];

	return (
		<div className="home">
			<PopularTVSwiper />
			<HomeModelContent
				title="Anime"
				cards={anime}
				posters={postersAnime}
			/>
			<HomeModelContent
				title="Serials"
				cards={anime}
				posters={postersSerials}
			/>
		</div>
	);
};

export default Home;