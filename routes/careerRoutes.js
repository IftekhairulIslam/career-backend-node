import express from "express";
const careerRouter = express.Router();

careerRouter.get("/", (req, res) => {
  res.send("All careers!");
});

export default careerRouter;
