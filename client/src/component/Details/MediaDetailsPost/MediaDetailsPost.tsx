import { FC } from "react";

interface IMediaDetailsPostProps {
	src: string;
}

const MediaDetailsPost: FC<IMediaDetailsPostProps> = ({
	src
}) => {
	return (
		<>
			<div className="media-details__post">
				<img className="media-details__post-img" src={src || ""} alt="" />
			</div>
		</>
	);
}

export default MediaDetailsPost;