import { Outlet } from "react-router-dom";

import { routNav } from "../../utils/routNav";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import Footer from "./Footer";
import GlobalLoader from "./GlobalLoader";
import Header from "./Header";
import Main from "./Main";

const Layout = () => {
	return (
		<div className="wrapper">
			<GlobalLoader />
			<Header />
			<Main>
				<Outlet />
			</Main>
			<Footer />			
		</div>
	);
};

export default Layout;