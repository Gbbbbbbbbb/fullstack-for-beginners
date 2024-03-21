import express from "express";

const Port = 4000;

const app = express();

const handleHome = (req, res) => {
  return res.send(" I still love you. ");
};

const handleLogin = (req, res) => {
  return res.send("Login here.");
};

app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`Server listening on port 4000 http://localhost:${Port}`);

app.listen(Port, handleListening);
