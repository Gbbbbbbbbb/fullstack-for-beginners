import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const Port = 4000;

console.log(process.cwd()); // 현재 작업 디렉토리 찾는 코드 current work directory package.json에서 서버를 시작하면 이것이 현재 작업 디렉토리가 된다 현재 작업 디렉토리는 노드를 시작하는 디렉토리라는 것만 기억하자
const app = express();
const logger = morgan("dev"); //combined 도있다
app.use(logger);

app.set("view engine", "pug");
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const handleListening = () =>
  console.log(`Server listening on port 4000 http://localhost:${Port}`);

app.listen(Port, handleListening);
