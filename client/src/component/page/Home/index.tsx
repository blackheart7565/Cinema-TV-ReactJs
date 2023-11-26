import { useState } from "react";

import { PopularTVSwiper } from "../../model/Swiper";
import HomeModelContent from "./HomeModelContent";

import "./Home.scss";
import "./HomeModel.scss";

export interface ICard {
	id: number;
	pathImg: string,
}

const Home = () => {
	const [anime] = useState<Array<ICard>>([
		{
			id: 1,
			pathImg: "https://buffer.com/library/content/images/2023/10/free-images.jpg",
		},
		{
			id: 2,
			pathImg: "https://img.freepik.com/free-photo/digital-painting-mountain-with-colorful-tree-foreground_1340-25699.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1700265600&semt=ais",
		},
		{
			id: 3,
			pathImg: "https://img.freepik.com/premium-photo/japan-national-symbol-sightseeing-mount-fuji-representative-landmark-beautiful-mountain_916211-257435.jpg",
		},
		{
			id: 4,
			pathImg: "https://i.pinimg.com/originals/dd/97/3a/dd973ac116a977c8dd5296b0da504b8c.jpg",
		},
		{
			id: 5,
			pathImg: "https://img.freepik.com/photos-premium/jeune-femme-debout-haute-montagne-regardant-au-dessus-lac-pendant-coucher-du-soleil_717440-2792.jpg",
		},
		{
			id: 6,
			pathImg: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
		},
	]);
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
			<PopularTVSwiper />
			<HomeModelContent
				title="Anime"
				classPrefix="home"
				cards={anime}
				posters={postersAnime}
			/>
			<HomeModelContent
				title="Films"
				classPrefix="home"
				cards={anime}
				posters={postersFilms}
			/>
			<HomeModelContent
				title="Serials"
				classPrefix="home"
				cards={anime}
				posters={postersSerials}
			/>
		</div>
	);
};

export default Home;