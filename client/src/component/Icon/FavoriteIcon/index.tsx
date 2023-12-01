import { FC } from 'react';

interface IFavoriteIcon { }

const FavoriteIcon: FC<IFavoriteIcon> = () => {
	return (
		<div className="films__link-favorite">
			<img
				className="films__link-favorite-icon"
				src="/path/favorite/favorite-active.png"
				alt="favorite-icon"
			/>
		</div>
	);
};

export default FavoriteIcon;