import express from "express";
const route = express.Router();

// These endpoints are prefixed with 'api'

route.get("/", (req, res) => {
  res.send("Welcome to career backend!");
});

route.get("*", (req, res) => {
  res.status(404).send({
    message: "Endpoint does not exist",
  });
});

export default route;
