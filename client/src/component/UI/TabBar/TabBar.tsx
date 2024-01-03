import classNames from "classnames";
import { FC, forwardRef, useEffect, useState } from 'react';

import TabBarContent from "./TabBarContent";
import TabBarNavigation from "./TabBarNavigation";
import { IContent, INavigation } from "./types";

import "./Tabs.scss";

interface ITabBarProps {
	className?: string | undefined;
	navigation: INavigation[];
	content: IContent[];
	dependencies?: any[];
}

const TabBar: FC<ITabBarProps> = forwardRef<HTMLDivElement, ITabBarProps>(({
	className,
	navigation,
	content,
	dependencies,
}, ref) => {
	const [selectedId, setSelectedId] = useState<number>(1);

	const onClickActive = (id: number) => {
		setSelectedId(id);
	};

	useEffect(() => {
		setSelectedId(1);
	}, dependencies || []);

	return (
		<>
			{content.length <= navigation.length && (
				<div
					className={classNames("tab-bar")}
					ref={ref}
				>
					<TabBarNavigation
						navigation={navigation}
						selectId={selectedId}
						onClickActive={onClickActive}
					/>

					{content.map((con: IContent) => (
						selectedId == con.id && (
							<TabBarContent key={con.id}>
								{con.node}
							</TabBarContent>
						)
					))}
				</div>
			)}
		</>
	);
});

export default TabBar;