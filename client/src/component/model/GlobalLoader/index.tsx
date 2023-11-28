import { ThreeCircles } from "react-loader-spinner";

import "./GlobalLoader.scss";

const GlobalLoader = () => {
	return (
		<div className="global-loader">
			<ThreeCircles
				height="80"
				width="80"
				color="#DA0027"
				wrapperStyle={{}}
				wrapperClass="global-loader__spinner"
				visible={true}
				ariaLabel="three-circles-rotating"
				outerCircleColor=""
				innerCircleColor=""
				middleCircleColor=""
			/>
			<p className="global-loader__text">
				Loading...
			</p>
		</div>
	);
};

export default GlobalLoader;