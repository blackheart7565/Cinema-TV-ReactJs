import { Route, Routes } from "react-router-dom";

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
import SerialsLayout from "./SerialsLayout";

const AppRouters = () => {
	return (
		<>
			<Routes>
				<Route path={"/"} element={<Layout />}>
					<Route index element={<Home />} />
					<Route path={"/signin"} element={<Authorization />} />
					<Route path={"/signup"} element={<Registration />} />
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
					<Route path={":mediaType/:mediaId"} element={<DetailsMedia />} />
				</Route>
				<Route path="/*" element={
					<div style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						height: "100vh",
						color: "#FFF",
					}}>
						<h1>
							Такой страницы не существует
						</h1>
					</div>
				} />
			</Routes>
		</>
	);
};

export default AppRouters;