import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Career Project!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});