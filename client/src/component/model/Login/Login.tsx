import React, { forwardRef } from "react";

import { Link } from "react-router-dom";
import "./Login.scss";

interface ILoginProps {
	username?: string;
	avatar?: string;
	path?: string;
	onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const Login: React.FC<ILoginProps> = forwardRef<HTMLAnchorElement, ILoginProps>(({
	username,
	avatar,
	path,
	onClick,
}, ref) => {
	return (
		<Link
			to={path || ""}
			className={"login"}
			onClick={onClick}
			ref={ref}
		>
			<div className={"login__avatar"}>
				<img
					className={"login__avatar-img"}
					src={avatar || "/profile.png"}
					alt="avatar"
				/>
			</div>
			<div className={"login__title"}>
				<div className={"login__username"}>{username || ""}</div>
				<div className={"login__role"}>User</div>
			</div>
		</Link>
	);
});

export default Login;