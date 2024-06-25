import JobPost from "../models/JobPost.js";
class JobController {
  // Get All Job Posts
  static async getAll(req, res, next) {
    const jobPosts = await JobPost.getAll();

    res.status(200).send({
      data: jobPosts,
    });
  }

  // Get Single Job Posts
  static async getJobPostById(req, res, next) {
    const jobPost = await JobPost.getJobPostById(req.params.id);

    res.status(200).send({
      data: jobPost,
    });
  }

  // Get Single Job Posts
  static async updateJobPost(req, res, next) {
    const jobPost = await JobPost.updateJobPost(req.params.id, req.body);

    res.status(200).send({
      data: jobPost,
    });
  }
}

export default JobController;
