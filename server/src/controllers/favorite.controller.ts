import { Request, Response } from "express";
import responseHandler from "../handlers/response.handler";
import favoriteModel from "../modules/favorite.model";
import favoriteService from "../services/favorite.service";

class FavoriteController {

	async addFavorite(req: Request, res: Response) {
		try {
			const { userId, mediaId, mediaType, mediaPosterPath, mediaTitle, mediaRating, mediaReleaseDate } = req.body;

			const favoriteExist = await favoriteModel.findOne({ userId, mediaId });

			if (favoriteExist) return responseHandler.ok(res, favoriteExist);

			const favorite = await favoriteModel.create({
				userId,
				mediaId,
				mediaType,
				mediaPosterPath,
				mediaTitle,
				mediaRating,
				mediaReleaseDate,
			});

			return responseHandler.created(res, favorite);
		} catch (error) {
			responseHandler.errors(res);
		}
	}

	async removeFavorite(req: Request, res: Response) {
		try {
			const { favoriteId } = req.params;
			const { userId } = req.body;

			favoriteService.removeFavorite(res, userId, favoriteId);

			return responseHandler.ok(res);
		} catch (error) {
			responseHandler.errors(res);
		}
	}

	async getFavoriteToUser(req: Request, res: Response) {
		try {
			const { userId } = req.body;

			const favorite = favoriteService.getFavoriteToUser(userId);

			return responseHandler.ok(res, favorite);
		} catch (error) {
			responseHandler.errors(res);
		}
	}
}

export default new FavoriteController();