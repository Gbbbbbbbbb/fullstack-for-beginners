import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/mytube");

const db = mongoose.connection;

const handleOpen = () => console.log("connected to DB");
const handleErrror = (error) => console.log("DB Error", error);
db.on("error", handleErrror);
db.once("open", handleOpen);
