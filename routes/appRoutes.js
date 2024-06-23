import express from "express";
const route = express.Router();

route.get("/", (req, res) => {
  res.send("Welcome to career backend!");
});

route.get("/error", (req, res) => {
  res.status(404).send({
    message: "Page not found",
  });
});

export default route;
