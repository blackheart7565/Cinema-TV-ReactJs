import { IFavorite } from "../types/user.types";

interface ICheckFavorite {
	listFavorites: IFavorite[],
	mediaId: string;
}

const favoriteUtils = {
	check: ({ listFavorites, mediaId }: ICheckFavorite) => listFavorites && listFavorites.find(e => e.mediaId.toString() === mediaId.toString()) !== undefined
}

export default favoriteUtils;