import express from "express";
import mediaRouts from "./media.routs";
import personRouts from "./person.routs";
const router = express.Router();

router.use("/person", personRouts);
router.use("/:mediaType", mediaRouts);

export default router;