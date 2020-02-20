import * as express from "express";
import { PhotoController } from "../controllters/photoController";
const router = express.Router();

router.get("/", PhotoController.getPhoto);
router.post("/", PhotoController.createPhoto);
router.put("/", PhotoController.updataPhoto);
router.delete("/", PhotoController.deletePhotoById);

module.exports = router;
