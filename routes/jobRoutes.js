import express from "express";
import JobController from "../controllers/JobController.js";
const route = express.Router();

// These endpoints are prefixed with 'api'
route
  .get("/jobs", JobController.getAll)
  .get("/jobs/:id", JobController.getJobPostById)
  .put("/jobs/:id", JobController.updateJobPost);

export default route;
