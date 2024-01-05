import { Dispatch, FC, SetStateAction } from 'react';
import Button from "../../UI/Button";
import MediaLoader from "../Loaders/MediaLoader/MediaLoader";

interface ILoadMoreProps {
	currentLengthMedia: number;
	totalResultsMedia: number;
	isMediaLoading: boolean;
	setPage: Dispatch<SetStateAction<number>>
}

const LoadMore: FC<ILoadMoreProps> = ({
	currentLengthMedia,
	totalResultsMedia,
	isMediaLoading,
	setPage,
}) => {

	const showMore = () => {
		if (currentLengthMedia < totalResultsMedia) {
			setPage(prev => prev + 1);
		}
	}

	return (
		<>
			{isMediaLoading && (
				<MediaLoader
					isLoading
					width="50"
					height="50"
				/>
			)}
			{(currentLengthMedia < totalResultsMedia) && (
				<Button
					className="films__show-more"
					onClick={showMore}
				>
					{!isMediaLoading && "Show more"}
				</Button>
			)}
		</>
	);
};

export default LoadMore;