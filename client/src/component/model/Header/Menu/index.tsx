import { Link } from "react-router-dom";

import "./Menu.scss";

const Menu = () => {
	return (
		<div className="menu">
			<div className="menu__wrapper container">

				<Link to={"/"} className="menu__logo">
					<div className="menu__img">
						<img src="/path/header/header-logo.png" alt="logo" />
					</div>
					<p className="menu__text">
						cinema tv
					</p>
				</Link>

				<ul className="menu__list">
					<li className="menu__item">
						<Link className="menu__link" to="/">Home</Link>
					</li>
					<li className="menu__item">
						<Link className="menu__link" to="/сartoons">Cartoons</Link>
					</li>
					<li className="menu__item">
						<Link className="menu__link" to="/anime">Anime</Link>
					</li>
					<li className="menu__item">
						<Link className="menu__link" to="/films">Films</Link>
					</li>
					<li className="menu__item">
						<Link className="menu__link" to="/serials">Serials</Link>
					</li>
					<li className="menu__item">
						<Link className="menu__link" to="/random">Random</Link>
					</li>
				</ul>

			</div>
		</div>
	);
};

export { Menu };

