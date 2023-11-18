import "./Header.scss";
import { Menu } from "./Menu";
import { PopularTVSwiper } from "./Swiper";

const Header = () => {
	return (
		<header className="header">
			<Menu />
			<PopularTVSwiper />
		</header >
	);
};

export default Header;