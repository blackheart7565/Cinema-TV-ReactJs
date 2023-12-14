import { FC } from 'react';

import classNames from "classnames";
import "./CinemaPlayerFrameYT.scss";

interface IOptionPlayer {
	width?: string | number;
	height?: string | number;
}

interface ICinemaPlayerFrameYTProps {
	className?: string;
	url?: string;
	options?: IOptionPlayer;
}

const CinemaPlayerFrameYT: FC<ICinemaPlayerFrameYTProps> = ({
	className,
	url,
	options = {},
}) => {
	return (
		<div className={classNames("yt-player", className)}>
			<iframe
				className={classNames("yt-player__video")}
				src={url || ""}
				title="YouTube video player"
				frameBorder={"0"}
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen
				style={options}
			/>
		</div>
	);
};

export default CinemaPlayerFrameYT;