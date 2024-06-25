import { databaseAccess } from "../config/databaseAccess.js";

export default class JobPost {
  static tableName = "job_posts";

  static async getAll() {
    const query = `SELECT * FROM ${this.tableName}`;
    const jobPosts = await databaseAccess.executeQuery(query);
    return jobPosts;
  }

  static async getJobPostById(id) {
    const query = `SELECT * FROM ${this.tableName} WHERE id = ${id}`;
    const jobPosts = await databaseAccess.executeQuery(query);
    return jobPosts[0] || null;
  }

  static async updateJobPost(id, data) {
    let query = `UPDATE ${this.tableName} SET updated_at = ?, `;
    const currentTime = new Date();
    const params = [currentTime];

    Object.entries(data).forEach(([key, value], index) => {
      if (index === Object.keys(data).length - 1)
        query += `${key} = '${value}' WHERE id = ?`;
      else query += `${key} = '${value}', `;
    });

    params.push(id);
    const result = await databaseAccess.executeQuery(query, params);
    return result;
  }
}
