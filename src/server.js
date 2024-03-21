import express from "express";

const Port = 4000;

const app = express();

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1>Not Allowed </h1>");
  }
  console.log("Allowed, you may continue");
  next();
};

const handleHome = (req, res, next) => {
  return res.send("I love middlewares ");
};

const handleLogin = (req, res) => {
  return res.send("Login here.");
};

const handledProtected = (req, res) => {
  return res.send("Welcome to the private lounge");
};

app.use(logger); //순서가 중요함
app.use(privateMiddleware); //미들웨어를 앱전체에 글로벌하게 사용할수 있도록 하는 방법이 .use
app.get("/", handleHome); //아니면 app.get 에 두개의 함수를 써서 하나의 url(함수)만 사용되게 할수도 있다.
app.get("/login", handleLogin);
app.get("/protected", handledProtected);

const handleListening = () =>
  console.log(`Server listening on port 4000 http://localhost:${Port}`);

app.listen(Port, handleListening);
