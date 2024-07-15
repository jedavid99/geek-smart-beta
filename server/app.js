import express from "express";
import cors from "cors";
import db from "./db.js";
import morgan from "morgan";
import router from "./db/routes/routes.Ceu.js";
const app = express()


app.use(cors());
// Conexion a la base de datos
app.use((req, res, next) => {
  req.db = db;
  next();
});

// Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use("/", router);

app.use((req, res) => {
  res.status(404).json({
    message: "Página no encontrada",
  });
});

// endPoint
app.use(
  cors({
    origin: ["https://geek-smart-beta.vercel.app"],
    methods: ["POST"],
  })
);

export default app;
