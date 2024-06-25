import jobRoutes from "./routes/jobRoutes.js";
import express from "express";
import dotenv from "dotenv";
import appRoutes from "./routes/appRoutes.js";
import { logger } from "./middlewares/logger.js";
dotenv.config();

const app = express();

// Middleware
app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Endpoints
app.use("/api/", [jobRoutes, appRoutes]);

// App Starting Point
const initialPort = process.env.PORT || 3000;
const startServer = (port) => {
  const server = app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
  });

  server.on("error", (err) => {
    if (err.code === "EADDRINUSE") {
      const newPort = parseInt(port) + 1;
      console.log(`Port ${port} is already in use. Trying port ${newPort}...`);
      startServer(newPort);
    } else {
      console.error(err);
    }
  });
};

startServer(initialPort);
