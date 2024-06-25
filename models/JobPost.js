import { databaseAccess } from "../config/databaseAccess.js";

export default class JobPost {
  static async findAll() {
    const query = "SELECT * FROM job_posts";
    const jobPosts = await databaseAccess.executeQuery(query);
    return jobPosts;
  }

  static async findById(id) {
    const query = `SELECT * FROM job_posts WHERE id = ${id}`;
    const jobPosts = await databaseAccess.executeQuery(query);
    return jobPosts[0] || null;
  }
}
