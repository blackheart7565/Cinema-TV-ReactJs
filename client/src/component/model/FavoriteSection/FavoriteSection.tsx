import { useReducer } from "../../../hooks/reducer.hook";
import Button from "../../UI/Button";
import FavoriteList from "../FavoriteList/FavoriteList";
import InformationUserContainer from "../InformationUserContainer/InformationUserContainer";

interface IFavoriteSectionProps {

}

const FavoriteSection: React.FC<IFavoriteSectionProps> = () => {
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
				/>
				{state.user.user.favorite.length >= 20 && (
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