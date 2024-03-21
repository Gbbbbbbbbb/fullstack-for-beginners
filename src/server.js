import express from "express";
import morgan from "morgan";

const Port = 4000;

const app = express();
const logger = morgan("dev"); //combined 도있다
app.use(logger);

const globalRouter = express.Router();
const handleHome = (req, res) => res.send("Home");

globalRouter.get("/", handleHome);

const userRouter = express.Router();
const handleEditUser = (req, res) => res.send("Edit User");

userRouter.get("/edit", handleEditUser);

const videoRouter = express.Router();
const handleWatchVideo = (req, res) => res.send("Watch Video");

videoRouter.get("/watch", handleWatchVideo);

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const handleListening = () =>
  console.log(`Server listening on port 4000 http://localhost:${Port}`);

app.listen(Port, handleListening);
