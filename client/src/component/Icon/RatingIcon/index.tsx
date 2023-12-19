import { FC } from "react";

import "./RatingIcon.scss";

export const FullStar: FC = () => {
	return (
		<div className="full-star">
			<img src="/path/star/full-star.svg" alt="full-star" />
		</div>
	);
}
export const HalfStar: FC = () => {
	return (
		<div className="half-star">
			<img src="/path/star/half-star.svg" alt="full-star" />
		</div>
	);
}
export const EmptyStar: FC = () => {
	return (
		<div className="empty-star">
			<img src="/path/star/empty-star.svg" alt="full-star" />
		</div>
	);
}
