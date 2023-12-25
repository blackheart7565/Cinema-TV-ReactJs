import { Route, Routes, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import Anime from "../page/Anime";
import Authorization from "../page/Authorization";
import Cartoons from "../page/Cartoons";
import DetailsMedia from "../page/Details";
import Films from "../page/Films";
import Home from "../page/Home";
import Registration from "../page/Registration";
import Serials from "../page/Serials";
import FilmsLayout from "./FilmsLayout";
import Layout from "./Layout";
import PageNotFound from "./PageNotFound";
import SerialsLayout from "./SerialsLayout";

const AppRouters = () => {
	const location = useLocation();

	return (
		<>
			<AnimatePresence>
				<Routes location={location} key={location.pathname}>
					<Route path={"/login"} element={<Authorization />} />
					<Route path={"/registration"} element={<Registration />} />

					<Route path={"/"} element={<Layout />}>
						<Route index element={<Home />} />
						<Route path={"/cartoons"} element={<Cartoons />} />
						<Route path={"/anime"} element={<Anime />} />
						<Route path={"/films"} element={<FilmsLayout />} >
							<Route index element={<Films />} />
							<Route path={":mediaType/:mediaId"} element={<DetailsMedia />} />
						</Route>
						<Route path={"/serials"} element={<SerialsLayout />} >
							<Route index element={<Serials />} />
							<Route path={":mediaType/:mediaId"} element={<DetailsMedia />} />
						</Route>
					</Route>

					<Route path="/*" element={<PageNotFound />} />
				</Routes>
			</AnimatePresence>
		</>
	);
};

export default AppRouters;