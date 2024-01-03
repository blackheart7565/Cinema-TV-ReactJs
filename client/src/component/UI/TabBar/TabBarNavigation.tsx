import classNames from "classnames";
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { INavigation } from "./types";

interface ITabBarNavigationProps {
	className?: string;
	navigation?: INavigation[] | undefined;
	selectId: number;
	onClickActive?: (id: number) => void;
}

const TabBarNavigation: FC<ITabBarNavigationProps> = ({
	className,
	navigation,
	selectId = 1,
	onClickActive,
}) => {
	return (
		<>
			<Swiper
				className={classNames("swiper", "tab-bar__navigation")}
				slidesPerView={"auto"}
			>
				{navigation && (
					navigation.map((nav: INavigation) => (
						<SwiperSlide
							key={nav.id}
							className={classNames("tab-bar__tab-wrapper")}
							onClick={() => onClickActive && onClickActive(nav.id)}
						>
							<div className={classNames("tab-bar__tab", {
								"tab-bar__tab-active": selectId === nav.id
							})}>
								<span className={classNames("tab-bar__label")}>
									{nav.label}
								</span>
							</div>
						</SwiperSlide>
					))
				)}
			</Swiper>
		</>
	);
}

export default TabBarNavigation;