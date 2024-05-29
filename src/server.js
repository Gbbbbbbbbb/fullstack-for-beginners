import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const Port = 4000;

const app = express();
const logger = morgan("dev"); //combined 도있다
app.use(logger);

// app.get 은 express의 get 메소드를 사용해서 페이지를 가져와라는 뜻이다

app.set("view engine", "pug"); //pug 세팅법
app.set("views", process.cwd() + "/src/views");
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const handleListening = () =>
  console.log(`Server listening on port 4000 http://localhost:${Port}`);

app.listen(Port, handleListening);
