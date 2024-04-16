import express from "express";
import dotenv from "dotenv";
import usersRoutes from "./routes/users.routes.js";

// Load env variables with dotenv
dotenv.config();

// Create express app
const app = express();

// Use routes in express app
app.use(usersRoutes);

// Tell express app to listen on a PORT e.g. 4000.
// Always nice to have your PORT set in the environment variables file
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("Server is running");
});
