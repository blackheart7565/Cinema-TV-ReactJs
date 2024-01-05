import React from 'react';
import { Link } from "react-router-dom";

interface IMenuListItemProps {
	path?: string | undefined;
	children?: React.ReactNode | undefined;
}

const MenuListItem: React.FC<IMenuListItemProps> = ({
	path,
	children
}) => {
	return (
		<li
			className="menu__item"
		>
			<Link
				className="menu__link"
				to={path || ""}
			>
				{children}
			</Link>
		</li>
	);
};

export default MenuListItem;