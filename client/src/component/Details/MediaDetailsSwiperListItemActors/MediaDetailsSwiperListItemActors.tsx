import { FC, ReactNode, forwardRef } from "react";
import { Link } from "react-router-dom";

interface IMediaDetailsListItemActorsProps {
	className?: string;
	pathImage?: string;
	actorName?: string;
	characterName?: string;
	children?: ReactNode;
}

const MediaDetailsSwiperListItemActors: FC<IMediaDetailsListItemActorsProps> = forwardRef<HTMLAnchorElement, IMediaDetailsListItemActorsProps>(({
	className,
	pathImage,
	actorName,
	characterName,
	children,
}, ref) => {
	return (
		<>
			{children
				? (children)
				: (
					<>
						<Link
							to={""}
							className={`${className}-item` || ""}
							ref={ref}
						>
							<img
								className={className ? `${className}-img` : ""}
								src={pathImage || ""}
								alt={`${className}-image` || ""}
							/>

							<div className={className ? `${className}-info` : ""}>
								<div className={className ? `${className}-name` : ""}>
									{actorName}
								</div>
								<hr />
								<div className={className ? `${className}-character-name` : ""}>
									( {characterName} )
								</div>
							</div>
						</Link>
					</>
				)}
		</>
	);
});

export default MediaDetailsSwiperListItemActors;