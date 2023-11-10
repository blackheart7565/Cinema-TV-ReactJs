import express from "express";
import { body } from "express-validator";
import userController from "../controllers/user.controller";
import requestHandler from "../handlers/request.handler";

const userRouts = express.Router();

userRouts.post(
	"/registration",
	body("username")
		.exists().withMessage("username is required")
		.notEmpty().withMessage("username is empty!"),
	body("email")
		.exists().withMessage("email is required")
		.notEmpty().withMessage("email is empty!")
		.isEmail().withMessage("input value is not email"),
	body("password")
		.exists().withMessage("password is required")
		.notEmpty().withMessage("password is empty!")
		.isLength({ min: 8 }).withMessage("the password must be at least 8 characters long"),
	requestHandler.validate,
	userController.registration
);

userRouts.post(
	"/login",
	body("email")
		.exists().withMessage("email is required")
		.notEmpty().withMessage("email is empty!")
		.isEmail().withMessage("input value is not email"),
	body("password")
		.exists().withMessage("password is required")
		.notEmpty().withMessage("password is empty!")
		.isLength({ min: 8 }).withMessage("the password must be at least 8 characters long"),
	requestHandler.validate,
	userController.login
);

userRouts.post("/logout", userController.logout);
userRouts.get("/refresh", userController.refresh);

userRouts.delete(
	"/delete/:userId",
	requestHandler.authMiddleware,
	body("userId")
		.exists().withMessage("userId is required")
		.notEmpty().withMessage("userId is empty!"),
	requestHandler.validate,
	userController.delete
);

export default userRouts;