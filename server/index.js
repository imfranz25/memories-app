// 3rd Party Modules
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

// Utilities
import compressionConfig from './utils/compression.js';

// Routes
import postRoute from './routes/post.js';
import userRoute from './routes/user.js';

// Initialization
const app = express();
dotenv.config();

// Constants
const PORT = process.env.PORT || 8080;

// Express Setup
app.use(cors()); // communicate to other domains
app.use(compressionConfig); // Improve Performance via compression
app.use(bodyParser.json({ limit: '30mb', extended: true })); // Accept JSON Data w/ upload
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true })); // Accept Form Data w/ upload

// User Routes
app.use('/posts', postRoute);
app.use('/user', userRoute);

app.get('/', (req, res) => {
  res.send('Memories API by Francis Ong');
});

app.use((error, req, res, next) => {
  res.status(500).json({ message: 'Something went wrong', error: error });
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`Connection running at port ${PORT}`));
  })
  .catch((error) => console.log(error.message));
