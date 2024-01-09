import Button from "../../UI/Button";
import { IFavoriteItem } from "../FavoriteList/FavoriteItem";
import FavoriteList from "../FavoriteList/FavoriteList";
import InformationUserContainer from "../InformationUserContainer/InformationUserContainer";

interface IFavoriteSectionProps {

}

const FavoriteSection: React.FC<IFavoriteSectionProps> = () => {
	const favorite: Array<IFavoriteItem> = [
		{
			id: 1,
			name: "REBEL MOON - PART ONE: A CHILD OF FIRE",
			poster: "/testImage/ing1.jpg",
			rating: "6.5",
			releaseDate: "2023",
		},
		{
			id: 2,
			name: "REBEL MOON - PART ONE: A CHILD OF FIRE",
			poster: "/testImage/ing2.jpg",
			rating: "6.5",
			releaseDate: "2023",
		},
		{
			id: 3,
			name: "REBEL MOON - PART ONE: A CHILD OF FIRE",
			poster: "/testImage/ing3.jpg",
			rating: "6.5",
			releaseDate: "2023",
		},
		{
			id: 4,
			name: "REBEL MOON - PART ONE: A CHILD OF FIRE",
			poster: "/testImage/ing4.jpg",
			rating: "6.5",
			releaseDate: "2023",
		},
		{
			id: 5,
			name: "REBEL MOON - PART ONE: A CHILD OF FIRE",
			poster: "/testImage/ing5.jpg",
			rating: "6.5",
			releaseDate: "2023",
		},
	]
	// const favorite: Array<IFavoriteItem> = [];

	return (
		<>
			<InformationUserContainer
				wrapperClass="favorite"
			>
				<div className="favorite-title">
					My List Favorite
				</div>
				<FavoriteList
					list={favorite || []}
				/>
				{favorite.length >= 20 && (
					<Button
						className="favorite-load-more"
					>
						Load more
					</Button>
				)}
			</InformationUserContainer>
		</>
	);
}

export default FavoriteSection;