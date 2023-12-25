import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import AppRouters from "./component/model/AppRouters";
import store from "./store";

import "./styles/font.scss";
import "./styles/reset.scss";
import "./styles/base.scss";
import "./styles/mixin.scss";
import "./styles/index.scss";
import BurgerMenu from "./component/model/BurgerMenu/BurgerMenu";
import { routNav } from "./utils/routNav";

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<AppRouters />
				<BurgerMenu
					routes={routNav}
				/>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);