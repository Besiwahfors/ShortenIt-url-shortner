import express from "express";
import cors from 'cors';
import dotenv from "dotenv";
import usersRoutes from "./routes/users.routes.js";
import linkRoutes from "./routes/links.routes.js";
import mongoose from "mongoose";

// Load env variables with dotenv
dotenv.config({path:[".env"]});

// Create express app
const app = express();

// Load middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());


// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal server error' });
});


// Use routes in express app
app.use(usersRoutes);
app.use('/shortenit', linkRoutes);


try {
  // Establish database connection
  await mongoose.connect(process.env.MONGO_URI);
  console.log('Connected to MongoDB');
} catch (error) {
  console.error('Error connecting to MongoDB:', error);
}


// Tell express app to listen on a PORT e.g. 4000.
// Always nice to have your PORT set in the environment variables file
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("Server is running");
});
