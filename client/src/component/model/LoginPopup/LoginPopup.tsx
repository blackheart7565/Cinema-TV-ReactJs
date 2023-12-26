import classNames from "classnames";
import React from "react";

import "./LoginPopup.scss";

interface ILoginPopupProps {
	isActive?: boolean;
	children?: React.ReactNode;
}

const LoginPopup: React.FC<ILoginPopupProps> = ({
	isActive = false,
	children,
}) => {
	return (
		<div className={classNames("login-popup", {
			"login-popup-active": isActive
		})}>
			{children}
		</div>
	);
};

export default LoginPopup;