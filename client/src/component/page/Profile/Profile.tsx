import React, { useEffect } from 'react';

import { useReducer } from "../../../hooks/reducer.hook";
import { DateServices } from "../../../utils/DateServices";
import Avatar from "../../model/Avatar/Avatar";
import ProfileBackground from "../../model/ProfileBackground/ProfileBackground";
import UserDetails from "../../model/UserDetails/UserDetails";
import "./Profile.scss";

interface IProfileProps {

}

const Profile: React.FC<IProfileProps> = ({

}) => {
	const { state } = useReducer();
	const date: string = "2023-11-17T13:58:35.974+00:00";

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div
			className={"profile"}
		>
			<ProfileBackground
			// image="https://s1.picswalls.com/wallpapers/2015/09/20/anime-background-hd_061544702_272.jpg"
			/>

			<div className="profile__wrapper">
				<div className="profile__user-info">
					<Avatar
						wrapperClass="profile__avatar"
						size={"13rem"}
					/>
					<UserDetails
						username={state.user.user?.username}
						wrapperClass="profile__user-details"
					/>
				</div>

				<div className="profile__user-data">
					<div className="profile__user-data-id">
						<span className="profile__user-data-id-title">Id:</span>
						<span className="profile__user-data-id-text">{state.user.user?.id}</span>
					</div>
					<div className="profile__user-data-email">
						<span className="profile__user-data-email-title">Email:</span>
						<span className="profile__user-data-email-text">{state.user.user?.email}</span>
					</div>

					{date && (
						<div
							className="profile__registration-date"
						>
							{new DateServices(date).getRegistrationDateOnSite()}
						</div>
					)}
				</div>

			</div>
		</div>
	);
};

//========



export default Profile;