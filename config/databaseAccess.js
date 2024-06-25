import mysql from "mysql2";

class DatabaseAccess {
  constructor() {
    this.connection = undefined;
    this.config = {};
  }

  createConnection() {
    this.setConfig();
    this.connection = mysql.createConnection(this.config);
  }

  getConnection() {
    if (!this.connection) this.createConnection();
    return this.connection;
  }

  setConfig() {
    this.config = this.getConfig();
  }

  getConfig() {
    return {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    };
  }

  executeQuery(queryString, params = []) {
    return new Promise((resolve, reject) => {
      this.getConnection().query(queryString, params, (error, result) => {
        if (error) {
          console.log("Error while connecting to database", error);
          reject(error);
        }
        resolve(result);
      });
    });
  }
}

export const databaseAccess = new DatabaseAccess();
