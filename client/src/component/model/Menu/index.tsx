import classNames from "classnames";
import { useState } from "react";
import { Link } from "react-router-dom";

import { useReducer } from "../../../hooks/reducer.hook";
import burgerMenuSlice from "../../../store/reducer/burger-menu.slice";
import { routNav } from "../../../utils/routNav";
import Login from "../Login/Login";
import LoginContainer from "../LoginContainer/LoginContainer";
import LoginPopup from "../LoginPopup/LoginPopup";
import Logo from "../Logo/Logo";

import AuthButton from "../../UI/Button/AuthButton/AuthButton";
import "./Menu.scss";
import { IPopupItem, popupItem } from "./listItemMenu";

const Menu = () => {
	const [isActiveMenu, setIsActiveMenu] = useState<boolean>(false);
	const [isOpenLoginPopup, setIsOpenLoginPopup] = useState<boolean>(false);
	const { dispatch, state } = useReducer();

	function handleOpenMenu() {
		setIsActiveMenu(!isActiveMenu);
		dispatch(burgerMenuSlice.actions.setIsActiveMenu(true));
		document.body.classList.add("scroll-blocker");
	}

	const handlerOpenPopup = () => {
		setIsOpenLoginPopup(!isOpenLoginPopup);
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

				{state.user.isAuth
					? (
						<LoginContainer>
							<Login
								avatar=""
								username={state.user.user?.username || "username"}
								onClick={handlerOpenPopup}
							/>
							<LoginPopup isActive={isOpenLoginPopup}>
								{popupItem.map((item: IPopupItem) => (
									<Link
										key={item.id}
										to={""}
										className="login-popup__link"
										onClick={() => item.onClick && item.onClick(dispatch)}
									>
										{item.body}
									</Link>
								))}
							</LoginPopup>
						</LoginContainer>
					)
					: (
						<AuthButton
							isLink
							pathLink={"/auth"}
						>
							Login
						</AuthButton>
					)}

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

