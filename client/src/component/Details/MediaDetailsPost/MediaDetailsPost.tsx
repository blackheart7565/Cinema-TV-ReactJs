import { motion } from "framer-motion";
import { FC } from "react";
import { motionOption, variantMediaDetailsPost } from "../../../motion/details.motion";

interface IMediaDetailsPostProps {
	src: string;
}

const isOnce: boolean = true;

const MediaDetailsPost: FC<IMediaDetailsPostProps> = ({
	src
}) => {
	return (
		<>
			<motion.div
				custom={1.5}
				initial={motionOption.hidden}
				whileInView={motionOption.visible}
				exit={motionOption.exit}
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