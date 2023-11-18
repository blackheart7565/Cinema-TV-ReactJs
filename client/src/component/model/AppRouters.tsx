import { Route, Routes } from "react-router-dom";

import Authorization from "../page/Authorization";
import Home from "../page/Home";
import Registration from "../page/Registration";
import Layout from "./Layout";

const AppRouters = () => {
	return (
		<>
			<Routes>
				<Route path={"/"} element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/signin" element={<Authorization />} />
					<Route path="/signup" element={<Registration />} />
				</Route>
				<Route path="*" element={<div>wefwefwef</div>} />
			</Routes>
		</>
	);
};

export default AppRouters;