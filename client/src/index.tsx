import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from "react-router-dom";
import AppRouters from "./component/model/AppRouters";

import "./styles/reset.scss";
import "./styles/base.scss";
import "./styles/mixin.scss";
import "./styles/index.scss";

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<AppRouters />
		</BrowserRouter>
	</React.StrictMode>
);