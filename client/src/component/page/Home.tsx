import { PopularTVSwiper } from "../model/Swiper";

const Home = () => {
	return (
		<div className="home">
			<div style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "end",
				height: "100vh"
			}}>
				<PopularTVSwiper />
			</div>
		</div>
	);
};

export default Home;