import mongoose from "mongoose";

const DB = process.env.MONGODB_URI;

mongoose.connect(`${DB}`)
    .then(() => console.log("Connected to Database"))
    .catch((err) => console.log(err));