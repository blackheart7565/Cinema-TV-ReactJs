import { useReducer } from "../../../hooks/reducer.hook";
import { IResponseFavorite } from "../../../types/user.types";
import Button from "../../UI/Button";
import FavoriteList from "../FavoriteList/FavoriteList";
import InformationUserContainer from "../InformationUserContainer/InformationUserContainer";

interface IFavoriteSectionProps {

}

const FavoriteSection: React.FC<IFavoriteSectionProps> = () => {
	const favorite: Array<IResponseFavorite> = [
		{
			id: 1,
			mediaTitle: "REBEL MOON - PART ONE: A CHILD OF FIRE",
			mediaPosterPath: "/testImage/ing1.jpg",
			mediaRating: 6.5,
			mediaId: 3543,
			mediaType: "movie",
			userId: 1,
			mediaReleaseDate: "2023",
		},
		{
			id: 2,
			mediaTitle: "REBEL MOON - PART ONE: A CHILD OF FIRE",
			mediaPosterPath: "/testImage/ing2.jpg",
			mediaRating: 6.5,
			mediaId: 3543,
			mediaType: "movie",
			userId: 1,
			mediaReleaseDate: "2023",
		},
		{
			id: 3,
			mediaTitle: "REBEL MOON - PART ONE: A CHILD OF FIRE",
			mediaPosterPath: "/testImage/ing3.jpg",
			mediaRating: 6.5,
			mediaId: 3543,
			mediaType: "movie",
			userId: 1,
			mediaReleaseDate: "2023",
		},
		{
			id: 4,
			mediaTitle: "REBEL MOON - PART ONE: A CHILD OF FIRE",
			mediaPosterPath: "/testImage/ing4.jpg",
			mediaRating: 6.5,
			mediaId: 3543,
			mediaType: "movie",
			userId: 1,
			mediaReleaseDate: "2023",
		},
		{
			id: 5,
			mediaTitle: "REBEL MOON - PART ONE: A CHILD OF FIRE",
			mediaPosterPath: "/testImage/ing5.jpg",
			mediaRating: 6.5,
			mediaId: 3543,
			mediaType: "movie",
			userId: 1,
			mediaReleaseDate: "2023",
		},
	]
	// const favorite: Array<IResponseFavorite> = [
	// 	{
	// 		id: 1,
	// 		mediaId: "435345",
	// 		userId: 1,
	// 		mediaType: "movie",
	// 		mediaTitle: "REBEL MOON - PART ONE: A CHILD OF FIRE",
	// 		mediaPosterPath: "/testImage/ing1.jpg",
	// 		mediaRating: 6.5,
	// 		mediaReleaseDate: "2023",
	// 	},
	// ]
	const { state } = useReducer();

	return (
		<>
			<InformationUserContainer
				wrapperClass="favorite"
			>
				<div className="favorite-title">
					My List Favorite
				</div>
				<FavoriteList
					list={state.user.user.favorite || []}
				// list={favorite || []}
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