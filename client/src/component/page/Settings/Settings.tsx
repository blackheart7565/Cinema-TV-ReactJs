import classNames from "classnames";
import React, { useState } from 'react';
import { FaUser } from "react-icons/fa6";

import SettingsContent from "../../model/SettingsContent/SettingsContent";
import SettingsSideBar from "../../model/SettingsSideBar/SettingsSideBar";

import HeaderBackground from "../../model/HeaderBackground/HeaderBackground";
import ProfileSettings from "../../model/ProfileSettings/ProfileSettings";
import "./Settings.scss";

interface ISettingsProps {
	wrapperClass?: string | undefined;
}

const headerBg: string = "https://www.desktopbackground.org/download/2048x1152/2010/10/17/96609_galaxy-s4-hd-gear-desktop-2160x1920-samsung-wallpaper-samsung_2160x1920_h.jpg";


const Settings: React.FC<ISettingsProps> = ({
	wrapperClass,
}) => {
	const [selectId, setSelectId] = useState<number>(1);

	const listNavigation = [
		{
			id: 1,
			text: "Profile",
			icon: <FaUser size={"25px"} />
		},
		{
			id: 2,
			text: "Profile",
			icon: <FaUser size={"25px"} />
		},
		{
			id: 3,
			text: "Profile",
			icon: <FaUser size={"25px"} />
		},
	]

	const listContents = [
		{
			id: 1,
			node: (
				<ProfileSettings />
			)
		}
	]

	return (
		<div
			className={classNames("settings", wrapperClass)}
		>
			<HeaderBackground
				src={headerBg}
			/>
			<div className="settings__wrapper">
				<SettingsSideBar
					navigation={listNavigation}
					selectId={selectId}
					setSelectId={setSelectId}
				/>
				<SettingsContent
					contents={listContents}
					selectId={selectId}
				/>
			</div>
		</div >
	);
};

export default Settings;