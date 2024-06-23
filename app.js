import careerRoutes from "./routes/careerRoutes.js";
import express from "express";
import dotenv from "dotenv";
import route from "./routes/appRoutes.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/careers", careerRoutes);
app.use("/api/", route);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
