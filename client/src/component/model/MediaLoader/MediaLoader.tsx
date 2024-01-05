
import { FC } from "react";
import { Triangle } from "react-loader-spinner";

import "./MediaLoader.scss";

interface IMediaLoader {
	isLoading?: boolean;
	width?: string;
	height?: string;
	color?: string;
}

const MediaLoader: FC<IMediaLoader> = ({
	isLoading,
	width,
	height,
	color
}) => {
	return (
		<div className="media-loader">
			{(isLoading || false) && (
				<Triangle
					width={width || "80"}
					height={height || "80"}
					color={color ? color : "#DA0027"}
					ariaLabel="triangle-loading"
					wrapperStyle={{}}
					wrapperClass="media-loader__spinner"
					visible={true}
				/>
			)}
		</div>
	);
};

export default MediaLoader;