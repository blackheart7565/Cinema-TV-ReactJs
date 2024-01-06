import classNames from "classnames";
import React from 'react';
import { Link } from "react-router-dom";

import { RxExit } from "react-icons/rx";
import { useReducer } from "../../../hooks/reducer.hook";
import burgerMenuSlice from "../../../store/reducer/burger-menu.slice";
import Button from "../../UI/Button";
import AuthButton from "../../UI/Button/AuthButton/AuthButton";
import Login from "../Login/Login";
import Logo from "../Logo/Logo";

import { userLogout } from "../../../store/reducer/user-slice/thunk/user.slice.thunk";
import "./BurgerMenu.scss";

interface IRoutes {
	path: string;
	body: string;
	icon?: (size?: string | number) => React.ReactNode | undefined;
}

interface iBurgerMenuProps {
	routes: IRoutes[],
}

const BurgerMenu: React.FC<iBurgerMenuProps> = ({
	routes
}) => {
	const { dispatch, state } = useReducer();

	function handleCloseMenu() {
		dispatch(burgerMenuSlice.actions.setIsActiveMenu(false));
		document.body.classList.remove("scroll-blocker");
	}

	const handleUserLogout = () => {
		dispatch(userLogout());
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
							<div className="burger-menu__link-inner">
								{item.icon && (
									<div className={"burger-menu__link-icon"}>
										{item.icon("25px")}
									</div>
								)}
								<div className="burger-menu__link-text">
									{item.body || ""}
								</div>
							</div>
						</Link>
					</li>
				))}
			</ul>

			{state.user.isAuth
				? (
					<div
						className="burger-menu__login-container"
					>
						<Login
							avatar=""
							path={`/profile?name=${state.user.user?.username}`}
							username={state.user.user?.username || "Anonymous"}
							onClick={handleCloseMenu}
						/>
						<Button
							className="burger-menu__login-container-exit"
							onClick={handleUserLogout}
						>
							<RxExit />
						</Button>
					</div>
				)
				: (
					<AuthButton
						wrapperClass="burger-menu__login-btn"
						isLink
						fullWidth
						pathLink={"/auth"}
						onClick={handleCloseMenu}
					>
						Login
					</AuthButton>
				)}
		</div>
	);
};

export default BurgerMenu;