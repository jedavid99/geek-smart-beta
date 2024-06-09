[1mdiff --git a/server/.gitignore b/server/.gitignore[m
[1mindex b512c09..1dcef2d 100644[m
[1m--- a/server/.gitignore[m
[1m+++ b/server/.gitignore[m
[36m@@ -1 +1,2 @@[m
[31m-node_modules[m
\ No newline at end of file[m
[32m+[m[32mnode_modules[m
[32m+[m[32m.env[m
\ No newline at end of file[m
[1mdiff --git a/server/app.js b/server/app.js[m
[1mindex 1446a50..1d1f853 100644[m
[1m--- a/server/app.js[m
[1m+++ b/server/app.js[m
[36m@@ -1,10 +1,33 @@[m
 import express from "express";[m
[31m-const app = express();[m
[32m+[m[32mimport cors from "cors";[m
[32m+[m[32mimport db from "./db.js";[m
[32m+[m[32mimport morgan from "morgan";[m
[32m+[m[32mimport router from "./db/routes/routes.Ceu.js";[m
[32m+[m[32mconst app = express()[m
 [m
[31m-app.get((req, res) => {[m
[32m+[m[32m// Conexion a la base de datos[m
[32m+[m[32mapp.use((req, res, next) => {[m
[32m+[m[32m  req.db = db;[m
[32m+[m[32m  next();[m
[32m+[m[32m});[m
[32m+[m
[32m+[m[32m// Middleware[m
[32m+[m[32mapp.use(morgan("dev"));[m
[32m+[m[32mapp.use(express.json());[m
[32m+[m[32mapp.use("/", router);[m
[32m+[m
[32m+[m[32mapp.use((req, res) => {[m
   res.status(404).json({[m
[31m-    message: "Endpoint not found",[m
[32m+[m[32m    message: "Página no encontrada",[m
   });[m
 });[m
 [m
[31m-export default app;[m
\ No newline at end of file[m
[32m+[m[32m// endPoint[m
[32m+[m[32mapp.use([m
[32m+[m[32m  cors({[m
[32m+[m[32m    origin: ["http://localhost:3000"],[m
[32m+[m[32m    methods: ["POST"],[m
[32m+[m[32m  })[m
[32m+[m[32m);[m
[32m+[m
[32m+[m[32mexport default app;[m
[1mdiff --git a/server/config.js b/server/config.js[m
[1mindex 214c9b6..1ef3643 100644[m
[1m--- a/server/config.js[m
[1m+++ b/server/config.js[m
[36m@@ -1,5 +1,7 @@[m
 import { config } from "dotenv";[m
 [m
[32m+[m[32mconfig();[m
[32m+[m
 export const PORT = process.env.PORT || 3001[m
 export const DB_USER = process.env.DB_USER || 'root'[m
 export const DB_PASSWORD = process.env.DB_PASSWORD || '123'[m
[1mdiff --git a/server/db.js b/server/db.js[m
[1mindex 57ba9af..b2689df 100644[m
[1m--- a/server/db.js[m
[1m+++ b/server/db.js[m
[36m@@ -1,17 +1,18 @@[m
 import mysql2 from "mysql2/promise";[m
[31m-import {[m
[31m-  DB_HOST,[m
[31m-  DB_USER,[m
[31m-  DB_PASSWORD,[m
[31m-  DB_PORT,[m
[31m-  DB_DATABASE,[m
[31m-} from "./config.js";[m
[32m+[m[32m// import {[m
[32m+[m[32m//   DB_HOST,[m
[32m+[m[32m//   DB_USER,[m
[32m+[m[32m//   DB_PASSWORD,[m
[32m+[m[32m//   DB_PORT,[m
[32m+[m[32m//   DB_DATABASE,[m
[32m+[m[32m// } from "./config.js";[m
 [m
 export const db = mysql2.createPool({[m
[31m-  user: DB_USER,[m
[31m-  host: DB_HOST,[m
[31m-  password: DB_PASSWORD,[m
[31m-  database: DB_DATABASE,[m
[32m+[m[32m  user: 'root',[m
[32m+[m[32m  host: 'localhost',[m
[32m+[m[32m  password: '',[m
[32m+[m[32m  database: 'geeksamrt',[m
[32m+[m[32m  port: 3306,[m
 });[m
 [m
 db.query("SELECT 1")[m
[1mdiff --git a/server/db/client/ClienteDelate.js b/server/db/client/ClienteDelate.js[m
[1mdeleted file mode 100644[m
[1mindex e69de29..0000000[m
[1mdiff --git a/server/db/client/ClienteEdit.js b/server/db/client/ClienteEdit.js[m
[1mdeleted file mode 100644[m
[1mindex e69de29..0000000[m
[1mdiff --git a/server/db/client/clientesNuevo.js b/server/db/client/clientesNuevo.js[m
[1mdeleted file mode 100644[m
[1mindex 08e291a..0000000[m
[1m--- a/server/db/client/clientesNuevo.js[m
[1m+++ /dev/null[m
[36m@@ -1,41 +0,0 @@[m
[31m-import { json } from "express";[m
[31m-import { db } from "../../db.js";[m
[31m-[m
[31m-export const register = async (req, res) => {[m
[31m-  const { nombre, categoria, servicio, dispositivo, precio } = req.body;[m
[31m-  try {[m
[31m-    const [rows] = await db.query([m
[31m-      "INSERT INTO servicio (nombre, categoria, servicio, precio, dispositivo) VALUES (?,?,?,?,?)",[m
[31m-      [nombre, categoria, servicio, precio, dispositivo][m
[31m-    );[m
[31m-    res.json({[m
[31m-      orde: rows.insertId,[m
[31m-      nombre,[m
[31m-      categoria,[m
[31m-      servicio,[m
[31m-      dispositivo,[m
[31m-      precio,[m
[31m-    });[m
[31m-  } catch (error) {[m
[31m-    return res.status(500).json({[m
[31m-        message:"ocurrio un error"[m
[31m-    })[m
[31m-  }[m
[31m-};[m
[31m-[m
[31m-// export const register = async(req, res) => {[m
[31m-//     const { nombre,categoria,servicio,dispositivo,numerocli,precio,descripcionser} = req.body;[m
[31m-[m
[31m-//       const SQL = 'INSERT INTO servicio (nombre, categoria, servicio, precio, dispositivo) VALUES (?,?,?,?,?)'[m
[31m-//        const VALUES =  [nombre, categoria, servicio, precio, dispositivo][m
[31m-[m
[31m-//        await db.query(SQL, VALUES, (err, results)=>{[m
[31m-//         if(err){[m
[31m-//             res.send(err)[m
[31m-//         }[m
[31m-//         else{[m
[31m-//             console.log('El usuario se registro correctamente')[m
[31m-//             res.send({message: 'Ususario agregado'})[m
[31m-//         }[m
[31m-//     })[m
[31m-// }[m
[1mdiff --git a/server/endpint.js b/server/endpint.js[m
[1mdeleted file mode 100644[m
[1mindex c4025aa..0000000[m
[1m--- a/server/endpint.js[m
[1m+++ /dev/null[m
[36m@@ -1,10 +0,0 @@[m
[31m-import { register } from "./db/client/clientesNuevo.js";[m
[31m-import express from "express";[m
[31m-[m
[31m-[m
[31m-const router = express.Router();[m
[31m-[m
[31m-router.post("/clientenuevo", register);[m
[31m-[m
[31m-[m
[31m-export default router[m
\ No newline at end of file[m
[1mdiff --git a/server/index.js b/server/index.js[m
[1mindex b5d7137..fe12a1d 100644[m
[1m--- a/server/index.js[m
[1m+++ b/server/index.js[m
[36m@@ -1,24 +1,7 @@[m
[32m+[m[32mimport app from "./app.js";[m
 import { PORT } from "./config.js";[m
[31m-import cors from "cors";[m
[31m-import express from "express";[m
[31m-import db from "./db.js";[m
[31m-import morgan from "morgan";[m
[31m-import router from "./endpint.js";[m
 [m
[31m-[m
[31m-const app = express()[m
[31m-app.use(morgan("dev"))[m
[31m-[m
[31m-app.use(express.json())[m
[31m-app.use("/",router)[m
[31m-app.use([m
[31m-  cors({[m
[31m-    origin: ["http://localhost:3000"],[m
[31m-    methods: ["POST"], [m
[31m-  })[m
[31m-);[m
[31m-[m
[31m-// Servidor [m
[31m-app.listen(PORT,() => {[m
[31m-    console.log(`serve activo en el puerto ${PORT}`);[m
[32m+[m[32m// Servidor[m
[32m+[m[32mapp.listen(PORT, () => {[m
[32m+[m[32m  console.log(`serve activo en el puerto ${PORT}`);[m
 });[m
