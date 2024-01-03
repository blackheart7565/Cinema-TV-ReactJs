import classNames from "classnames";
import { useState } from "react";
import { Link } from "react-router-dom";

import { useReducer } from "../../../hooks/reducer.hook";
import { routNav } from "../../../utils/routNav";
import Login from "../Login/Login";
import LoginContainer from "../LoginContainer/LoginContainer";
import LoginPopup from "../LoginPopup/LoginPopup";
import Logo from "../Logo/Logo";

import "./Menu.scss";
import { IPopupItem, popupItem, popupItemAuth } from "./listItemMenu";

const Menu = () => {
	const [isActiveMenu, setIsActiveMenu] = useState<boolean>(false);
	const [isOpenLoginPopup, setIsOpenLoginPopup] = useState<boolean>(false);
	const { dispatch, actions, state } = useReducer();

	function handleOpenMenu() {
		setIsActiveMenu(!isActiveMenu);
		dispatch(actions.setIsActiveMenu(true));
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

				<LoginContainer>
					<Login
						avatar=""
						username="black_heart"
						onClick={handlerOpenPopup}
					/>
					<LoginPopup isActive={isOpenLoginPopup}>
						{state.user.isAuth
							? (
								<>
									{popupItem.map((item: IPopupItem) => (
										<Link
											key={item.id}
											to={""}
											className="login-popup__link"
										>
											{item.body}
										</Link>
									))}
								</>
							)
							: (
								<>
									{popupItemAuth.map(item => (
										item.path && (
											<Link
												key={item.id || item.path}
												to={item.path}
												className="login-popup__link"
											>
												{item.body}
											</Link>
										)
									))}
								</>
							)}
					</LoginPopup>
				</LoginContainer>

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

