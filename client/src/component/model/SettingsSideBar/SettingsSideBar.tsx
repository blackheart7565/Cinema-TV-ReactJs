import classNames from "classnames";
import React from 'react';

interface INavigation {
	id: number,
	text?: string | undefined;
	icon?: React.ReactNode | undefined;
}

interface ISettingsSideBarProps {
	navigation: INavigation[];
	selectId?: number | undefined;
}

const SettingsSideBar: React.FC<ISettingsSideBarProps> = ({
	navigation,
	selectId,
}) => {
	return (
		<div
			className="settings__sidebar"
		>
			{navigation.map((nav: INavigation) => (
				<div
					key={nav.id}
					className={classNames("settings__sidebar-item", {
						"settings__sidebar-item-active": nav.id === selectId
					})}
				>
					<div className="settings__sidebar-item-icon">
						{nav.icon}
					</div>
					<div
						className="settings__sidebar-item-text"
					>
						{nav.text}
					</div>
				</div>
			))}
		</div>
	);
};

export default SettingsSideBar;