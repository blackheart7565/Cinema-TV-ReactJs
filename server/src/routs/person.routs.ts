import express from "express";
import personController from "../controllers/person.controller";

const personRouts = express.Router();

personRouts.get("/:personId/details", personController.getPersonDetails)
personRouts.get("/:personId/medias", personController.getPersonMedias)

export default personRouts;