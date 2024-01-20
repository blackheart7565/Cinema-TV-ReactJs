import classNames from "classnames";
import React, { Key, useEffect, useState } from 'react';

import { BASE_URL_SERVER } from "../../../api/config/client.config";
import { useReducer } from "../../../hooks/reducer.hook";
import Avatar from "../../model/Avatar/Avatar";
import FavoriteSection from "../../model/FavoriteSection/FavoriteSection";
import InformationUserContainer from "../../model/InformationUserContainer/InformationUserContainer";
import ProfileBackground from "../../model/ProfileBackground/ProfileBackground";
import SectionProfile from "../../model/SectionProfile/SectionProfile";
import UserDetails from "../../model/UserDetails/UserDetails";

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
			node: (key?: Key) => <SectionProfile key={key} />,
		},
		{
			id: 2,
			node: (key?: Key) => <FavoriteSection key={key} />,
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
				image={state.user.user?.poster ? `${BASE_URL_SERVER}/${state.user.user?.poster}` : undefined}
			/>

			<div className="profile__wrapper">
				<div className="profile__user-info">
					<Avatar
						avatarPath={state.user.user?.avatar ? `${BASE_URL_SERVER}/${state.user.user?.avatar}` : undefined}
						wrapperClass="profile__avatar"
						size={"13rem"}
					/>
					<UserDetails
						username={state.user.user?.username}
						wrapperClass="profile__user-details"
						countFavorite={state.user.user.favorite.length}
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
							item.node(item.id)
						)
					))}
				</div>

			</div >
		</div >
	);
};

//========

export default Profile;