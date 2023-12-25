import classNames from "classnames";
import React from 'react';
import { Link } from "react-router-dom";

import { useReducer } from "../../../hooks/reducer.hook";
import Logo from "../Logo/Logo";

import "./BurgerMenu.scss";

interface IRoutes {
	path: string;
	text: string;
}

interface iBurgerMenuProps {
	routes: IRoutes[],
}

const BurgerMenu: React.FC<iBurgerMenuProps> = ({
	routes
}) => {
	const { dispatch, state, actions } = useReducer();

	function handleCloseMenu() {
		dispatch(actions.setIsActiveMenu(false));
		document.body.classList.remove("scroll-blocker");
	}

	return (
		<div className={classNames("burger-menu", {
			"burger-menu__active": state.burgerMenu.isActiveMenu
		})}>

			<div className="burger-menu__header">
				<Logo
					wrapperClassName="burger-menu__logo"
				/>
				<button
					onClick={handleCloseMenu}
					className="burger-menu__btn"
				>
					<span></span>
				</button>
			</div>

			<ul className="burger-menu__list">
				{routes.map(item => (
					<li
						key={item.path}
						className="burger-menu__item"
						onClick={handleCloseMenu}
					>
						<Link
							to={item.path || ""}
							className="burger-menu__link"
						>
							{item.text || ""}
						</Link>
					</li>
				))}
			</ul>

		</div>
	);
};

export default BurgerMenu;