import { Response } from "express";
import responseHandler from "../handlers/response.handler";
import favoriteModule from "../modules/favorite.model";
import { IFavorite } from "../types/db-module/favorite.type";
import { IObjectIdType } from "../types/db-module/user.types";
import { IResponseDataType } from "../types/exceptions-types/exceptions";

class FavoriteService {

	async removeFavorite(res: Response, userId: IObjectIdType, favoriteId: any): Promise<void | Response<IResponseDataType, Record<string, any>>> {
		const favorite = await favoriteModule.findOne({
			_id: favoriteId,
			userId,
		});

		if (!favorite) return responseHandler.notFound(res);

		await favorite.deleteOne();
	}

	async getFavoriteToUser(userId: any): Promise<IFavorite[]> {
		const favorite = await favoriteModule
			.find({ userId })
			.sort("-createdAt");

		return favorite;
	}
}

const favoriteService = new FavoriteService();
export default favoriteService;