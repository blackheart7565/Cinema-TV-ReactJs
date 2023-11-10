import express from "express";
import UserController from "../controllers/user.controller";

const userRouts = express.Router();

userRouts.post("/registration", UserController.registration)
userRouts.post("/login", UserController.login)
userRouts.post("/logout", UserController.logout)
userRouts.get("/refresh", UserController.refresh)

export default userRouts;