import { databaseAccess } from "../config/databaseAccess.js";

export default class JobPost {
  static async getAllJobPosts() {
    const query = "SELECT * FROM job_posts";
    const blogs = await databaseAccess.executeQuery(query);
    return blogs;
  }
}
