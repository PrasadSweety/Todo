import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Database Connected!");
    })
    .catch((error) => {
      console.log("It's error");
    });
};

export default dbConnection;
