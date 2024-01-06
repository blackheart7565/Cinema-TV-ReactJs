import classNames from "classnames";
import React from "react";

import "./Avatar.scss";

interface IAvatar {
	wrapperClass?: string | undefined;
	avatarPath?: string | undefined;
	size?: string | number | undefined;
	width?: string | number | undefined;
	height?: string | number | undefined;
}

const Avatar: React.FC<IAvatar> = ({
	wrapperClass,
	avatarPath,
	size,
	width,
	height,
}) => {
	return (
		<div
			className={classNames("avatar", wrapperClass)}
			style={{
				width: width || size || "20px",
				height: height || size || "20px",
			}}
		>
			<img
				className="avatar__img"
				src={avatarPath || "/profile-big.png"}
				alt="avatar-img"
			/>
		</div>
	);
}

export default Avatar;