import classNames from "classnames";
import { useState } from "react";
import { Link } from "react-router-dom";

import { useReducer } from "../../../hooks/reducer.hook";
import burgerMenuSlice from "../../../store/reducer/burger-menu.slice";
import { routNav } from "../../../utils/routNav";
import AuthButton from "../../UI/Button/AuthButton/AuthButton";
import Login from "../Login/Login";
import LoginContainer from "../LoginContainer/LoginContainer";
import LoginPopup from "../LoginPopup/LoginPopup";
import Logo from "../Logo/Logo";
import MenuList from "../MenuList/MenuList";
import { IPopupItem, popupItem } from "./listItemMenu";

import "./Menu.scss";

const Menu = () => {
	const [isActiveMenu, setIsActiveMenu] = useState<boolean>(false);
	const [isOpenLoginPopup, setIsOpenLoginPopup] = useState<boolean>(false);
	const { dispatch, state } = useReducer();

	function handleOpenMenu() {
		setIsActiveMenu(!isActiveMenu);
		dispatch(burgerMenuSlice.actions.setIsActiveMenu(true));
		document.body.classList.add("scroll-blocker");
	}

	const handlerOpenPopup = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		setIsOpenLoginPopup(!isOpenLoginPopup);
	}

	return (
		<div className="menu">
			<div className="menu__wrapper container">
				<Logo />

				<MenuList
					list={routNav}
				/>

				{state.user.isAuth
					? (
						<LoginContainer>
							<Login
								avatar=""
								path={""}
								username={state.user.user?.username || "username"}
								onClick={handlerOpenPopup}
							/>
							<LoginPopup isActive={isOpenLoginPopup}>
								{popupItem.map((item: IPopupItem) => (
									<Link
										key={item.id}
										to={(
											typeof item.path === "string"
												? item.path
												: typeof item.path === "function"
													? item.path(state.user.user?.username || "anonymous")
													: ""
										)}
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
							wrapperClass="menu__login-btn"
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

