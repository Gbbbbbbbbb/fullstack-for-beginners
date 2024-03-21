import express from "express";
import morgan from "morgan";

const Port = 4000;

const app = express();
const logger = morgan("dev"); //combined 도있다

const handleHome = (req, res, next) => {
  return res.send("I love middlewares ");
};

const handleLogin = (req, res) => {
  return res.send("Login here.");
};

app.use(logger);
app.get("/", handleHome); //아니면 app.get 에 두개의 함수를 써서 하나의 url(함수)만 사용되게 할수도 있다.
app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`Server listening on port 4000 http://localhost:${Port}`);

app.listen(Port, handleListening);
