import pg from "pg";
import { config } from "dotenv";
config(); // Carga las variables de entorno de .env

export const db = new pg.Pool({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.POSTGRES_PORT,
    ssl: {
        rejectUnauthorized: false, // Puedes necesitar esto dependiendo de tu configuración de certificados
        sslmode: "require", // Asegúrate de agregar esto para usar SSL
    },
});

db.query("SELECT 1")
    .then(() => console.log("Base de datos conectada correctamente"))
    .catch((err) =>
        console.error("Error al conectar a la base de datos:", err)
    );

db.on("error", (error) => {
    console.error("Error en la base de datos:", error);
});

export default db;
