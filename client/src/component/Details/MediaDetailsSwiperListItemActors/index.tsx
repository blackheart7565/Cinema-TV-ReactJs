import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

interface IMediaDetailsListItemActorsProps {
	className?: string;
	pathImage?: string;
	actorName?: string;
	children?: ReactNode;
}

const MediaDetailsSwiperListItemActors: FC<IMediaDetailsListItemActorsProps> = ({
	className,
	pathImage,
	actorName,
	children,
}) => {
	return (
		<>
			{children
				? (children)
				: (
					<>
						<Link to={""} className={`${className}-item` || ""}>
							<img
								className={className ? `${className}-img` : ""}
								src={pathImage || ""}
								alt={`${className}-image` || ""}
							/>

							<div className={className ? `${className}-info` : ""}>
								<div className={className ? `${className}-name` : ""}>
									{actorName}
								</div>
							</div>
						</Link>
					</>
				)}
		</>
	);
}

export default MediaDetailsSwiperListItemActors;