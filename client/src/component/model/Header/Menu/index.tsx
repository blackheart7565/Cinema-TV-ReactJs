import { Link } from "react-router-dom";

import classNames from "classnames";
import { useState } from "react";
import { useReducer } from "../../../../hooks/reducer.hook";
import { routNav } from "../../../../utils/routNav";
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
					{routNav.map(item => (
						<li
							key={item.path}
							className="menu__item"
						>
							<Link
								className="menu__link"
								to={item.path || ""}
							>
								{item.text}
							</Link>
						</li>
					))}
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

