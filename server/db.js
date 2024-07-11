import  pg  from "pg";
import {
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_PORT,
  DB_DATABASE,
} from "./config.js";

export const db = new pg.Pool({
  user: DB_USER,
  password: DB_PASSWORD,
  host: DB_HOST,
  port: DB_PORT,
  database: DB_DATABASE,
});

db.query("SELECT 1")
 .then(() => console.log("base de conectada"))
 .catch((err) => console.log(err));
db.on("error", (error) => {
  console.log("Error en la base de datos:", error);
});
export default db;