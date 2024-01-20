import { Request, Response } from "express";
import responseHandler from "../handlers/response.handler";
import favoriteModel from "../modules/favorite.model";
import favoriteService from "../services/favorite.service";

class FavoriteController {

	async addFavorite(req: Request, res: Response) {
		try {
			const { userId, mediaId, mediaType, mediaPosterPath, mediaTitle, mediaRating, mediaReleaseDate } = req.body;

			const favoriteExist = await favoriteModel.findOne({ userId, mediaId });

			if (favoriteExist) return responseHandler.ok(res, "Already in favorites.");

			const favorite = await favoriteModel.create({
				userId,
				mediaId,
				mediaType,
				mediaPosterPath,
				mediaTitle,
				mediaRating,
				mediaReleaseDate,
			});

			return responseHandler.ok(res, "Successfully added to favorites!");
		} catch (error) {
			responseHandler.errors(res);
		}
	}

	async removeFavorite(req: Request, res: Response) {
		try {
			const { favoriteId } = req.params;

			if (!req.users) return responseHandler.unauthorized(res);

			favoriteService.removeFavorite(res, req.users.id, favoriteId);

			return responseHandler.ok(res, "Successfully removed from favorites");
		} catch (error) {
			responseHandler.errors(res);
		}
	}
}

export default new FavoriteController();