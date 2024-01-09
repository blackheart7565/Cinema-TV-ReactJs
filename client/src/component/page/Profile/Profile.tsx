import React, { useEffect, useState } from 'react';

import { useReducer } from "../../../hooks/reducer.hook";
import Avatar from "../../model/Avatar/Avatar";
import InformationUserContainer from "../../model/InformationUserContainer/InformationUserContainer";
import ProfileBackground from "../../model/ProfileBackground/ProfileBackground";
import UserDetails from "../../model/UserDetails/UserDetails";

import classNames from "classnames";
import FavoriteSection from "../../model/FavoriteSection/FavoriteSection";
import SectionProfile from "../../model/SectionProfile/SectionProfile";
import "./Profile.scss";

interface IProfileProps { }

const Profile: React.FC<IProfileProps> = () => {
	const { state } = useReducer();
	const [selectId, setSelectId] = useState<number>(1);
	const navigation = [
		{
			id: 1,
			body: "Profile",
		},
		{
			id: 2,
			body: "Favorite",
		}
	]
	const content = [
		{
			id: 1,
			node: <SectionProfile />,
		},
		{
			id: 2,
			node: <FavoriteSection />,
		}
	]

	function handleSelectNavItem(id: number) {
		setSelectId(id);
	}

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

				<InformationUserContainer
					wrapperClass="profile__navigation"
				>
					<ul
						className="profile__navigation-list"
					>
						{navigation.map(item => (
							<li
								key={item.id}
								className={classNames("profile__navigation-item", {
									"profile__navigation-item-active": item.id === selectId
								})}
								onClick={() => handleSelectNavItem(item.id)}
							>{item.body}</li>
						))}
					</ul>
				</InformationUserContainer>

				<div className="profile__content">
					{content.map(item => (
						item.id === selectId && (
							item.node
						)
					))}
				</div>

			</div >
		</div >
	);
};

//========

export default Profile;