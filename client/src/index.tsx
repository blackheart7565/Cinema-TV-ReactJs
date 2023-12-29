import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import AppRouters from "./component/model/AppRouters";
import BurgerMenu from "./component/model/BurgerMenu/BurgerMenu";
import store from "./store";
import { routNav } from "./utils/routNav";

import 'react-toastify/dist/ReactToastify.css';
import "./styles/base.scss";
import "./styles/font.scss";
import "./styles/index.scss";
import "./styles/mixin.scss";
import "./styles/reset.scss";
import React from "react";

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<ToastContainer
				position="top-right"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
			/>
			<BrowserRouter>
				<AppRouters />
				<BurgerMenu
					routes={routNav}
				/>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);