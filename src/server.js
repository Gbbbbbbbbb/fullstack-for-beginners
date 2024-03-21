import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const Port = 4000;

const app = express();
const logger = morgan("dev"); //combined 도있다
app.use(logger);

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const handleListening = () =>
  console.log(`Server listening on port 4000 http://localhost:${Port}`);

app.listen(Port, handleListening);
