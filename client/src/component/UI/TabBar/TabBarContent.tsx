import classNames from "classnames";
import React, { FC } from "react";

interface ITabBarContentProps {
	className?: string;
	children: React.ReactNode;
}

const TabBarContent: FC<ITabBarContentProps> = ({
	className,
	children
}) => {
	return (
		<div className={classNames("tab-bar__content")}>
			{children}
		</div>
	);
}

export default TabBarContent;