
import React from 'react';
import MenuListItem from "../MenuListItem/MenuListItem";

interface IMenuListitem {
	path: string;
	body: string;
}

interface IMenuListProps {
	list: IMenuListitem[];
}
const MenuList: React.FC<IMenuListProps> = ({
	list
}) => {
	return (
		<>
			<ul className="menu__list">
				{list.map((item: IMenuListitem) => (
					<MenuListItem
						key={item.path}
						path={item.path}
					>
						{item.body}
					</MenuListItem>
				))}
			</ul>
		</>
	);
};

export default MenuList;