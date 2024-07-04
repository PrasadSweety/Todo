import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import databaseConnection from "./utils/databaseConnection.js";
import DataRoute from "./router/DataRoute.js";

const app = express();

dotenv.config();

databaseConnection();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(cors(corsOptions));

app.use("/tasks", DataRoute);

const PORT = process.env.PORT || 8080;

if (process.env.NODE_ENV == "production") {
  app.use(express.static("frontend/build"));
}

app.listen(PORT, () => {
  console.log(`Server is connected to port no ${PORT}`);
});
