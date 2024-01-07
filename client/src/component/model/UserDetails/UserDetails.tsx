import classNames from "classnames";
import React from "react";

import "./UserDetails.scss";

interface IUserDetailsProps {
	wrapperClass?: string | undefined;
	username?: string | undefined;
	userRole?: string | undefined;
	countFavorite?: string | number | undefined;
}

const UserDetails: React.FC<IUserDetailsProps> = ({
	wrapperClass,
	username,
	userRole,
	countFavorite,
}) => {
	return (
		<div className={classNames("user-details", wrapperClass)}>
			<h1 className="user-details__username">{username || "Anonymous"}</h1>
			<h2 className="user-details__role">{userRole || "User"}</h2>
			<div className="user-details__count-favorite">
				<span className="user-details__count-favorite-text">{countFavorite || 0}</span>
				<span className="user-details__count-favorite-title"> count favorite</span>
			</div>
		</div>
	);
}

export default UserDetails;