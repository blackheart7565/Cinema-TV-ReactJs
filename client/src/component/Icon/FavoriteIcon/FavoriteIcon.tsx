import classNames from "classnames";
import { FC } from 'react';

import "./FavoriteIcon.scss";

interface IFavoriteIcon {
	wrapperClass?: string | undefined;
}

const FavoriteIcon: FC<IFavoriteIcon> = ({
	wrapperClass,
}) => {
	return (
		<div className={classNames("favorite", wrapperClass)}>
			<img
				src="/path/favorite/favorite-active.png"
				alt="favorite-icon"
			/>
		</div>
	);
};

export default FavoriteIcon;