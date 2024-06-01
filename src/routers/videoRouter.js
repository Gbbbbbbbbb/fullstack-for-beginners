import express from "express";
import {
  watch,
  getEdit,
  postEdit,
  getUpload,
  postUpload,
  deleteVideo,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", watch);
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
videoRouter.get("/upload", getUpload);
videoRouter.post("/upload", postUpload);
// videoRouter.get("/:id(\\d+)/edit", getEdit);
// videoRouter.post("/:id(\\d+)/edit", postEdit);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);

export default videoRouter;

//export default는 한가지밖에 export를 못함
//export는 이름못바꿈
//request는 제일 위에 것 부터봄
//(\\d+) 정규식
// : parameter
// 자바스크립트 이기 때문에 \\
