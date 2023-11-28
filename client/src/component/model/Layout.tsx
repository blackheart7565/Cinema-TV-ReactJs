
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import GlobalLoader from "./GlobalLoader";
import Header from "./Header";
import Main from "./Main";

const Layout = () => {
	const isLoad = false;

	return (
		<div className="wrapper">
			<Header />
			{isLoad
				? <GlobalLoader />
				: (
					<>
						<Main>
							<Outlet />
						</Main>
						<Footer />
					</>
				)}
		</div>
	);
};

export default Layout;