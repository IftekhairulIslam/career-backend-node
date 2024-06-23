import express from "express";
const appRoutes = express.Router();

appRoutes.get("/", (req, res) => {
  res.send("Welcome to career backend!");
});

appRoutes.get("/error", (req, res) => {
  res.status(404).send({
    message: "Page not found",
  });
});

export default appRoutes;
