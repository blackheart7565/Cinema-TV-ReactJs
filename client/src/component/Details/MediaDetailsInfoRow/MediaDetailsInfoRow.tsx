import { FC } from "react";

import { motion } from "framer-motion";
import { motionOption, variantMediaDetailsInfoRowList, variantMediaDetailsInfoRowText, variantsMediaDetailsInfoRowTitle } from "../../../motion/details.motion";
import { MDiv, MLink } from "../../motion/motion.component";

import "./MediaDetailsInfoRow.scss";

interface IMediaDetailsInfoRowProps {
	className?: string | undefined;
	title?: string | undefined | null;
	value?: string | string[] | undefined | null;
	isLink?: boolean | undefined | null;
	path?: string | undefined | null;
}

const isOnce: boolean = true;

const MediaDetailsInfoRow: FC<IMediaDetailsInfoRowProps> = ({
	className,
	title,
	value,
	isLink,
	path,
}) => {
	return (
		<div className={className && `${className}-row`}>
			<MDiv
				custom={3}
				initial={motionOption.hidden}
				whileInView={motionOption.visible}
				exit={motionOption.exit}
				viewport={motionOption.viewport({
					isOnce: isOnce,
				})}
				variants={variantsMediaDetailsInfoRowTitle}
				className={
					(typeof value === "string")
						? `${className}-title-r`
						: (value instanceof Array)
							? `${className}-title-r ${className}-title-padding-r`
							: ""
				}
			>
				{title && title}:
			</MDiv>
			<div className={
				(typeof value === "string")
					? `${className}-text-r`
					: (value instanceof Array)
						? `${className}-list-r`
						: ""
			}>
				{
					typeof value === "string"
						? <motion.span
							custom={6}
							initial={motionOption.hidden}
							whileInView={motionOption.visible}
							exit={motionOption.exit}
							viewport={motionOption.viewport({
								isOnce: isOnce,
							})}
							variants={variantMediaDetailsInfoRowText}
						>
							{value}
						</motion.span>
						: (value instanceof Array)
							? (
								value.map((item: string, index: number) => (
									isLink
										? (
											<MLink
												to={path || ""}
												key={index}
												className={`${className}-item-r`}
												custom={index + 3}
												initial={motionOption.hidden}
												exit={motionOption.exit}
												whileInView={motionOption.visible}
												viewport={motionOption.viewport({
													isOnce: isOnce,
												})}
												variants={variantMediaDetailsInfoRowList}
											>
												{item}
											</MLink>
										)
										: (
											<motion.div
												key={index}
												className={`${className}-item-r`}
												custom={index + 3}
												initial={motionOption.hidden}
												exit={motionOption.exit}
												whileInView={motionOption.visible}
												viewport={motionOption.viewport({
													isOnce: isOnce,
												})}
												variants={variantMediaDetailsInfoRowList}
											>
												{item}
											</motion.div>
										)
								))
							)
							: null
				}
			</div>
		</div>
	);
};

export default MediaDetailsInfoRow;