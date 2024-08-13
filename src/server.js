import "./db";
import "./models/Video";
import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const app = express();
const logger = morgan("dev"); //combined 도있다미들웨어이다
app.use(logger); //get / (path) status code 정보를 줌

// app.get 은 express의 get 메소드를 사용해서 페이지를 가져와라는 뜻이다

app.set("view engine", "pug"); //pug 세팅법
app.set("views", process.cwd() + "/src/views");
app.use(express.urlencoded({ extended: true }));
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

export default app;

// 브라우저를 통해서 request를 보내고, 나의 행동을 listening 하고 있는 서버에만 request를 보낼 수 있음
// 너가 request를 보낼 때, 해당 port(창문)로 request를 보낸다
