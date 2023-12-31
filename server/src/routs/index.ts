import express from "express";
import favoriteRouts from "./favorite.router";
import mediaRouts from "./media.routs";
import personRouts from "./person.routs";
import userRouts from "./user.routs";

const router = express.Router();

router.use("/user", userRouts);
router.use("/person", personRouts);
router.use("/favorite", favoriteRouts);
router.use("/:mediaType", mediaRouts);

export default router;