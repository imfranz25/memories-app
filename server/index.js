import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import postRoutes from "./routes/post.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

app.use('/post', postRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL).then(() => app.listen(PORT, () => console.log(`Connection running at port ${PORT}`)))
  .catch((error) => console.log(error.message));

