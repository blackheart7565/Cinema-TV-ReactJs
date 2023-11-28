import express from "express";
import mediaController from "../controllers/media.controller";

const mediaRouts = express.Router({ mergeParams: true });

mediaRouts.get("/list/:mediaCategory", mediaController.getMediaList)
mediaRouts.get("/details/:mediaId", mediaController.getMediaDetails)
mediaRouts.get("/genre", mediaController.getMediaGenre)
mediaRouts.get("/search", mediaController.getMediaSearch)

export default mediaRouts;