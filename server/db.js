import mysql2 from "mysql2/promise";
import {
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_PORT,
  DB_DATABASE,
} from "./config.js";

export const db = mysql2.createPool({
  user: DB_USER,
  host: DB_HOST,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  port: DB_PORT,
});

db.query("SELECT 1")
  .then(() => console.log("base de conectada"))
  .catch((err) => console.log(err));
db.on("error", (error) => {
  console.log("Error en la base de datos:", error);
});
export default db;
