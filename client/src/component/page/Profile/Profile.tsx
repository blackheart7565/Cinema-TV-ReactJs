import React, { useEffect } from 'react';

import Avatar from "../../model/Avatar/Avatar";
import UserDetails from "../../model/UserDetails/UserDetails";
import "./Profile.scss";

interface IProfileProps {

}

const Profile: React.FC<IProfileProps> = ({

}) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div
			className={"profile"}
		>
			<div className="profile__header" style={{
				backgroundImage: "url(https://s1.picswalls.com/wallpapers/2015/09/20/anime-background-hd_061544702_272.jpg)",
			}}>
			</div>

			<div className="profile__wrapper">
				<div className="profile__user-info">
					<Avatar
						wrapperClass="profile__avatar"
						size={"13rem"}
					/>
					<UserDetails
						wrapperClass="profile__user-details"
					/>
				</div>

			</div>
		</div>
	);
};

//========



export default Profile;