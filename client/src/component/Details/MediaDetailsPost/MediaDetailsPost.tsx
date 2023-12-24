import { motion } from "framer-motion";
import { FC } from "react";
import { useLoadingMotion } from "../../../hooks/motion.hook";
import { useReducer } from "../../../hooks/reducer.hook";
import { motionOption, variantMediaDetailsPost } from "../../../motion/details.motion";

interface IMediaDetailsPostProps {
	src: string;
}

const isOnce: boolean = true;
const isViewport: boolean = false;

const MediaDetailsPost: FC<IMediaDetailsPostProps> = ({
	src
}) => {
	const { state } = useReducer();
	const propsMotionOption = useLoadingMotion({
		isLoading: state.loader.isLoading,
		isViewport: isViewport,
	});

	return (
		<>
			<motion.div
				custom={1.5}
				{...propsMotionOption}
				viewport={motionOption.viewport({
					isOnce: isOnce,
				})}
				variants={variantMediaDetailsPost}
				className="media-details__post"
			>
				<img className="media-details__post-img" src={src || ""} alt="" />
			</motion.div>
		</>
	);
}

export default MediaDetailsPost;