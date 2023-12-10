import { FC } from "react";

import { Link } from "react-router-dom";
import "./MediaDetailsInfoRow.scss";

interface IMediaDetailsInfoRowProps {
	className?: string | undefined;
	title?: string | undefined | null;
	value?: string | string[] | undefined | null;
	isLink?: boolean | undefined | null;
	path?: string | undefined | null;
}

const MediaDetailsInfoRow: FC<IMediaDetailsInfoRowProps> = ({
	className,
	title,
	value,
	isLink,
	path
}) => {
	return (
		<div className={className && `${className}-row`}>
			<div className={
				(typeof value === "string")
					? `${className}-title-r`
					: (value instanceof Array)
						? `${className}-title-r ${className}-title-padding`
						: ""
			}>
				{title && title}:
			</div>
			<div className={
				(typeof value === "string")
					? `${className}-text`
					: (value instanceof Array)
						? `${className}-list`
						: ""
			}>
				{
					typeof value === "string"
						? (value)
						: (value instanceof Array)
							? (
								value.map((item: string, index: number) => (
									isLink
										? (
											<Link to={path || ""} key={index} className={`${className}-item`}>
												{item}
											</Link>
										)
										: (
											<div key={index} className={`${className}-item`}>
												{item}
											</div>
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