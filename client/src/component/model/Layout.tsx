import { Outlet } from "react-router-dom";
import { useReducer } from "../../hooks/reducer.hook";
import Footer from "./Footer";
import GlobalLoader from "./GlobalLoader";
import Header from "./Header";
import Main from "./Main";

const Layout = () => {
	const { state } = useReducer();

	return (
		<div className="wrapper">
			<Header />
			<GlobalLoader />
			<Main>
				<Outlet />
			</Main>
			<Footer />
		</div>
	);
};

export default Layout;