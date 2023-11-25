
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

const Layout = () => {
	return (
		<div className="wrapper">
			<Header />
			<Main>
				<Outlet />
			</Main>
			<Footer />
		</div>
	);
};

export default Layout;