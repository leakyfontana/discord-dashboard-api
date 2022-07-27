import mongoose from "mongoose";

mongoose.connect('mongodb://0.0.0.0:27018/discord_dashboard')
    .then(() => console.log("Connected to Database"))
    .catch((err) => console.log(err));