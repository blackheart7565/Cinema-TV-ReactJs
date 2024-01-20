import { IFavorite } from "../types/user.types";

interface ICheckFavorite {
	listFavorites?: IFavorite[],
	mediaId?: string;
	mediaType?: string;
}

const favoriteUtils = {
	check: ({ listFavorites, mediaId, mediaType }: ICheckFavorite): boolean => {
		if (!listFavorites || !mediaId || !mediaType) return false;

		return listFavorites
			.find(f =>
				f.mediaId.toString() === mediaId.toString()
				&& f.mediaType.toString() === mediaType.toString()
			) !== undefined
	}

}

export default favoriteUtils;