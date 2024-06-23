import careerRoutes from "./routes/careerRoutes.js";
import express from "express";
import dotenv from "dotenv";
import appRoutes from "./routes/appRoutes.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Routes
app.use("/api/careers", careerRoutes);
app.use("/api/", appRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
