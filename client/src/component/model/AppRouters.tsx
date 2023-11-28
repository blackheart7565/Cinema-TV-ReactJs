import { Route, Routes } from "react-router-dom";

import Anime from "../page/Anime";
import Authorization from "../page/Authorization";
import Cartoons from "../page/Cartoons";
import Films from "../page/Films";
import Home from "../page/Home";
import Registration from "../page/Registration";
import Serials from "../page/Serials";
import Layout from "./Layout";

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
					<Route path={"/films"} element={<Films />} />
					<Route path={"/serials"} element={<Serials />} />
				</Route>
				<Route path="/*" element={
					<div style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
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