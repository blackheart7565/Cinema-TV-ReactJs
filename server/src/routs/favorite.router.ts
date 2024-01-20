import express from "express";
import { body, param } from "express-validator";
import favoriteController from "../controllers/favorite.controller";
import requestHandler from "../handlers/request.handler";

const favoriteRouts = express.Router();

favoriteRouts.post(
	"/",
	requestHandler.authMiddleware,
	body("userId")
		.exists().withMessage("userId is required")
		.notEmpty().withMessage("userId is empty!"),
	body("mediaId")
		.exists().withMessage("mediaId is required")
		.notEmpty().withMessage("mediaId is empty!"),
	requestHandler.validate,
	favoriteController.addFavorite
);

favoriteRouts.post(
	"/:favoriteId",
	requestHandler.authMiddleware,
	param("favoriteId")
		.exists().withMessage("userId is required")
		.notEmpty().withMessage("favoriteId is empty!"),
	body("userId")
		.exists().withMessage("userId is required")
		.notEmpty().withMessage("favoriteId is empty!"),
	requestHandler.validate,
	favoriteController.removeFavorite
);

export default favoriteRouts;