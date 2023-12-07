import { FC } from 'react';
import { EmptyStar, FullStar, HalfStar } from "../../Icon/RatingIcon";

interface IRatingStar {
	rating: string | number;
}

const Rating: FC<IRatingStar> = ({
	rating
}) => {
	rating = Number(rating);
	const maxSize = 10;
	const fullStar = Math.floor(rating);
	const halfStar = rating % 1 !== 0;

	const fullStarArr = Array(fullStar);
	const emptyStarArr = Array(maxSize - fullStar - (halfStar ? 1 : 0));

	return (
		<>
			{[...fullStarArr].map((_, index) => (
				<FullStar key={index} />
			))}
			{halfStar &&
				<HalfStar />
			}
			{[...emptyStarArr].map((_, index) => (
				<EmptyStar key={index} />
			))}
		</>
	);
};

export default Rating;