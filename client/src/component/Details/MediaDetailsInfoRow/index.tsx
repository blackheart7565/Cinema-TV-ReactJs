import { FC } from "react";

import "./MediaDetailsInfoRow.scss";

interface IMediaDetailsInfoRowProps {
	className?: string | undefined;
	title?: string | undefined | null;
	value?: string | string[] | undefined | null;
}

const MediaDetailsInfoRow: FC<IMediaDetailsInfoRowProps> = ({
	className,
	title,
	value,
}) => {
	return (
		<div className={className && `${className}-row`}>
			<div className={
				(typeof value === "string")
					? `${className}-title`
					: (value instanceof Array)
						? `${className}-title ${className}-title-padding`
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
									<div key={index} className={`${className}-item`}>
										{item}
									</div>
								))
							)
							: null
				}
			</div>
		</div>
	);
};

export default MediaDetailsInfoRow;