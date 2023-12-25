import { Link } from "react-router-dom";

import classNames from "classnames";
import { useState } from "react";
import { useReducer } from "../../../../hooks/reducer.hook";
import Logo from "../../Logo/Logo";
import "./Menu.scss";

const Menu = () => {
	const [isActiveMenu, setIsActiveMenu] = useState<boolean>(false);
	const { dispatch, actions } = useReducer();

	function handleOpenMenu() {
		setIsActiveMenu(!isActiveMenu);
		dispatch(actions.setIsActiveMenu(true));
		document.body.classList.add("scroll-blocker");
	}

	return (
		<div className="menu">
			<div className="menu__wrapper container">
				<Logo />

				<ul className="menu__list">
					<li className="menu__item">
						<Link className="menu__link" to="/">Home</Link>
					</li>
					<li className="menu__item">
						<Link className="menu__link" to="/cartoons">Cartoons</Link>
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

				<button
					onClick={handleOpenMenu}
					className={classNames("menu__btn", {
						// "menu__btn-active": isActiveMenu,
					})}
				>
					<span></span>
				</button>
			</div>
		</div>
	);
};

export { Menu };

