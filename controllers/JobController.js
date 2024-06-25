import JobPost from "../models/JobPost.js";
class JobController {
  // Get All Job Posts
  static async getAll(req, res, next) {
    const jobPosts = await JobPost.findAll();

    res.status(200).send({
      data: jobPosts,
    });
  }

  // Get Single Job Posts
  static async getSingle(req, res, next) {
    const jobPost = await JobPost.findById(req.params.id);

    res.status(200).send({
      data: jobPost,
    });
  }
}

export default JobController;
