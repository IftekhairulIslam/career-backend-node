import JobPost from "../models/JobPost.js";
class JobController {
  static async getAllJobPosts(req, res, next) {
    const blogs = await JobPost.getAllJobPosts();

    res.status(200).send({
      data: blogs,
    });
  }
}

export default JobController;
