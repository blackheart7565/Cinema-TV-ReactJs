import { Outlet } from "react-router-dom";

import { useCheckAuth } from "../../../hooks/check-auth.hook";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import GlobalLoader from "../Loaders/GlobalLoader/GlobalLoader";
import Main from "../Main/Main";

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