import { IFavorite } from "../types/user.types";

interface ICheckFavorite {
	listFavorites?: IFavorite[],
	mediaId?: string;
}

const favoriteUtils = {
	check: ({ listFavorites, mediaId }: ICheckFavorite): boolean => {
		if (!listFavorites || !mediaId) return false;
		return listFavorites.find(e => e.mediaId.toString() === mediaId.toString()) !== undefined
	}

}

export default favoriteUtils;