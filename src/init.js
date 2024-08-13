import "./db";
import "./models/Video";
import "./models/User";
import app from "./server";

const Port = 4000;

const handleListening = () =>
  console.log(`Server listening on port 4000 http://localhost:${Port}`);

app.listen(Port, handleListening);
