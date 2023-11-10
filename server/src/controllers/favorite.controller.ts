import { Request, Response } from "express";
import responseHandler from "../handlers/response.handler";
import favoriteModule from "../modules/favorite.model";

class FavoriteController {

	async addFavorite(req: Request, res: Response) {
		try {
			const { userId, mediaId } = req.body;

			const favoriteExist = favoriteModule.findOne({ userId, mediaId });

			if (favoriteExist) return responseHandler.ok(res, favoriteExist);

			const favorite = new favoriteModule({
				userId,
				...req.body,
			});

			await favorite.save();

			return responseHandler.created(res, favorite);
		} catch (error) {
			responseHandler.errors(res);
		}
	}

	async removeFavorite(req: Request, res: Response) {
		try {
			const { favoriteId } = req.params;
			const { userId } = req.body;

			const favorite = await favoriteModule.findOne({
				_id: favoriteId,
				userId,
			});

			if (!favorite) return responseHandler.notFound(res);

			await favorite.deleteOne();

			return responseHandler.ok(res);
		} catch (error) {
			responseHandler.errors(res);
		}
	}

	async getFavoriteToUser(req: Request, res: Response) {
		try {
			const { userId } = req.body;

			const favorite = await favoriteModule
				.find({ userId })
				.sort("-createdAt");

			return responseHandler.ok(res, favorite);
		} catch (error) {
			responseHandler.errors(res);
		}
	}
}

export default new FavoriteController();