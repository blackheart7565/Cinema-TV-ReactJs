import express from "express";
import userController from "../controllers/user.controller";

const userRouts = express.Router();

userRouts.post("registration", userController.registration)
userRouts.post("/login", userController.login)
userRouts.post("/logout", userController.logout)
userRouts.post("/refresh", userController.refresh)

export default userRouts;