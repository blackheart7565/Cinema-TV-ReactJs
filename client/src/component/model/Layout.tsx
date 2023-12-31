import { Outlet } from "react-router-dom";

import { useCheckAuth } from "../../hooks/check-auth.hook";
import Footer from "./Footer";
import GlobalLoader from "./GlobalLoader";
import Header from "./Header";
import Main from "./Main";

const Layout = () => {
	useCheckAuth();
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