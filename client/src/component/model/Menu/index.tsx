import classNames from "classnames";
import { useState } from "react";
import { Link } from "react-router-dom";

import { useReducer } from "../../../hooks/reducer.hook";
import { routNav } from "../../../utils/routNav";
import Login from "../Login/Login";
import Logo from "../Logo/Logo";

import LoginContainer from "../LoginContainer/LoginContainer";
import LoginPopup from "../LoginPopup/LoginPopup";
import "./Menu.scss";

interface IPopupItem {
	id: string | number;
	icon?: React.ReactNode;
	body?: string;
}

const Menu = () => {
	const [isActiveMenu, setIsActiveMenu] = useState<boolean>(false);
	const [isOpenLoginPopup, setIsOpenLoginPopup] = useState<boolean>(false);
	const { dispatch, actions } = useReducer();
	const [popupItem, setPopupItem] = useState<IPopupItem[]>([
		{
			id: 1,
			body: "Profile",
		},
		{
			id: 2,
			body: "Settings",
		},
		{
			id: 3,
			body: "Exit",
		},
	]);

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
						{popupItem.map((item: IPopupItem) => (
							<Link
								key={item.id}
								to={""}
								className="login-popup__link"
							>
								{item.body}
							</Link>
						))}
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

