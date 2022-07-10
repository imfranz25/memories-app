import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import express from "express";

import postRoutes from "./routes/post.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

app.use('/post', postRoutes);

const CONNECTION_URL = "mongodb+srv://memoriesapp:memoriesapp123@cluster0.fbgxb.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL).then(() => app.listen(PORT, () => console.log(`Connection running at port ${PORT}`)))
  .catch((error) => console.log(error.message));

