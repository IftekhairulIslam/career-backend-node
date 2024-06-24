import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

console.log(process.env.USER);

// Create a connection object
const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the MySQL server.");

  // Close the connection
  connection.end((err) => {
    if (err) {
      console.error("Error closing the connection:", err);
      return;
    }
    console.log("Connection closed.");
  });
});
