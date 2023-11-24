import { PopularTVSwiper } from "../../model/Swiper";
import HomeAnime from "./HomeAnime";

import "./Home.scss";

const Home = () => {
	return (
		<div className="home">
			<PopularTVSwiper />
			<HomeAnime />
		</div>
	);
};

export default Home;