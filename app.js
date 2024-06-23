import jobRoutes from "./routes/jobRoutes.js";
import express from "express";
import dotenv from "dotenv";
import route from "./routes/appRoutes.js";
import { logger } from "./middlewares/logger.js";
dotenv.config();

const app = express();

// Middleware
app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/jobs", jobRoutes);
app.use("/api/", route);

// App Starting Point
const initialPort = process.env.PORT || 3000;
const startServer = (port) => {
  const server = app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
  });

  server.on("error", (err) => {
    if (err.code === "EADDRINUSE") {
      console.log(
        `Port ${port} is already in use. Trying port ${parseInt(port) + 1}...`
      );
      startServer(port + 1);
    } else {
      console.error(err);
    }
  });
};

startServer(initialPort);
