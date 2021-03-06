import routes from "../routes";
import express from "express";
import {
  videos,
  upload,
  videoDetail,
  editVideo,
  deleteVideo,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.videos, videos);
videoRouter.get(routes.upload, upload);
videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;
