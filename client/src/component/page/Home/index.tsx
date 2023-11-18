import { PopularTVSwiper } from "../../model/Swiper";

import "./Home.scss";

const Home = () => {
	return (
		<div className="home">
			<div className="home__header-swiper">
				<PopularTVSwiper />
			</div>
		</div>
	);
};

export default Home;