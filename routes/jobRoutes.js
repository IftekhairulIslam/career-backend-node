import express from "express";
import JobController from "../controllers/JobController.js";
const route = express.Router();

route.get("/", JobController.getAllJobPosts);

export default route;
