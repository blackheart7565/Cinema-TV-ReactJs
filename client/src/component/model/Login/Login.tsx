import React from "react";

import "./Login.scss";

interface ILoginProps {
	username?: string;
	avatar?: string;
	onClick?: () => void;
}

const Login: React.FC<ILoginProps> = ({
	username,
	avatar,
	onClick,
}) => {
	return (
		<div
			className={"login"}
			onClick={onClick}
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
		</div>
	);
};

export default Login;