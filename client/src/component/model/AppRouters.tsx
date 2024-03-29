import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";

import Anime from "../page/Anime";
import Authorization from "../page/Authorization/Authorization";
import Cartoons from "../page/Cartoons";
import DetailsMedia from "../page/Details/Details";
import Films from "../page/Films";
import Home from "../page/Home/Home";
import PageNotFound from "../page/PageNotFound/PageNotFound";
import Profile from "../page/Profile/Profile";
import Serials from "../page/Serials/Serials";
import Settings from "../page/Settings/Settings";
import FilmsLayout from "./Layout/FilmsLayout";
import Layout from "./Layout/Layout";
import SerialsLayout from "./Layout/SerialsLayout";

const AppRouters = () => {
	const location = useLocation();

	return (
		<>
			<AnimatePresence>
				<Routes location={location} key={location.pathname}>
					<Route path="/auth" element={<Authorization />} />

					<Route path={"/"} element={<Layout />}>
						<Route index element={<Home />} />
						<Route path={"/cartoons"} element={<Cartoons />} />
						<Route path={"/anime"} element={<Anime />} />
						<Route path={"/profile"} element={<Profile />} />
						<Route path={"/settings"} element={<Settings />} />
						<Route path={"/films"} element={<FilmsLayout />} >
							<Route index element={<Films />} />
							<Route path={":mediaType/:mediaId"} element={<DetailsMedia />} />
							<Route path="*" element={<PageNotFound />} />
						</Route>
						<Route path={"/serials"} element={<SerialsLayout />} >
							<Route index element={<Serials />} />
							<Route path={":mediaType/:mediaId"} element={<DetailsMedia />} />
							<Route path="*" element={<PageNotFound />} />
						</Route>
					</Route>

					<Route path="/*" element={<PageNotFound />} />
				</Routes>
			</AnimatePresence>
		</>
	);
};

export default AppRouters;