import { Outlet } from "react-router-dom";

import { useCheckAuth } from "../../../hooks/check-auth.hook";
import Footer from "../Footer/Footer";
import GlobalLoader from "../GlobalLoader/GlobalLoader";
import Header from "../Header/Header";
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