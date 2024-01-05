import { ThreeCircles } from "react-loader-spinner";

import { useGlobalLoader } from "../../../../hooks/loader.hook";

import "./GlobalLoader.scss";

const GlobalLoader = () => {
	const { isLoading } = useGlobalLoader();
	return (
		<>
			{isLoading && (
				<div className="global-loader">
					<div className="global-loader__wrapper">
						<ThreeCircles
							width="20%"
							height="20%"
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
				</div>
			)}
		</>
	);
};

export default GlobalLoader;