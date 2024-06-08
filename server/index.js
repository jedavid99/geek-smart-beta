import { PORT } from "./config.js";
import cors from "cors";
import express from "express";
import db from "./db.js";
import morgan from "morgan";
import router from "./endpint.js";


const app = express()
app.use(morgan("dev"))

app.use(express.json())
app.use("/",router)
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["POST"], 
  })
);

// Servidor 
app.listen(PORT,() => {
    console.log(`serve activo en el puerto ${PORT}`);
});
