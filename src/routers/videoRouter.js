import express from "express";
import { watch, edit, upload, remove } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/upload", upload); // :id 보다 위에 있어야 함.
videoRouter.get("/:id(\\d+)", watch);
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id(\\d+)/remove", remove);

export default videoRouter;