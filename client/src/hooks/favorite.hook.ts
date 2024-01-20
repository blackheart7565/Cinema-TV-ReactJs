import { AxiosResponse } from "axios";
import privateAxios from "../api/client/private.client";
import { IFavorite, IResponseFavorite } from "../types/user.types";
import { useReducer } from "./reducer.hook";

interface IUseFavorite {
	onAddFavorite: (favorite: IFavorite) => Promise<AxiosResponse<IFavorite>>;
	onRemoveFavorite: (mediaId: string) => Promise<AxiosResponse<IFavorite> | void>;
}

const favoriteEndpoints = {
	add: "/favorite",
	remove: (favoriteId: number): string => `/favorite/${favoriteId}`,
}

export const useFavorite = (): IUseFavorite => {
	const { state } = useReducer();

	async function onAddFavorite(favorite: IFavorite): Promise<AxiosResponse<IFavorite>> {
		const response = await privateAxios.post<IFavorite>(favoriteEndpoints.add, favorite);
		return response;
	}

	async function onRemoveFavorite(mediaId: string): Promise<AxiosResponse<IResponseFavorite> | void> {
		const favoriteId = state.user.user?.favorite
			.find(fav => fav.mediaId.toString() === mediaId.toString())?.id

		if (!favoriteId) return;

		const response = await privateAxios.post<IResponseFavorite>(favoriteEndpoints.remove(favoriteId))

		return response;
	}

	return {
		onAddFavorite,
		onRemoveFavorite,
	}
}