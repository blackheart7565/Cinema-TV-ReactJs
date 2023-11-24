
import { useState } from "react";
import "./HomeAnime.scss";

interface IAnime {
	pathImg: "",
}

const HomeAnime = () => {
	const [anime] = useState<Array<IAnime>>([
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

	return (
		<div className="home__anime">
			<section
				className="home__anime-title"
			>
				<h2>Anime</h2>
			</section>
			<div className="home__anime-top" >
				<div className="home__anime-cards">
					{
						anime.map((item, idx) => (
							<div
								key={idx}
								className="home__anime-card"
							>
								<img src={item.pathImg} alt="" className="home__anime-card-img" />
							</div>
						))
					}
				</div>
				<div className="home__anime-avatar-right">
					<img className="home__anime-img" src="/path/home/anime_1.png" alt="home-anime-avatar-1" />
				</div>
			</div>
			<div className="home__anime-bottom">
				<div className="home__anime-avatar-left">
					<img className="home__anime-img" src="/path/home/anime_2.png" alt="home-anime-avatar-2" />
				</div>
				<div className="home__anime-cards">
					<div className="home__anime-card">
						<img src="" alt="" className="home__anime-card-img" />
					</div>
					<div className="home__anime-card">
						<img src="" alt="" className="home__anime-card-img" />
					</div>
					<div className="home__anime-card">
						<img src="" alt="" className="home__anime-card-img" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeAnime;