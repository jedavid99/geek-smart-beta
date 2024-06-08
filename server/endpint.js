import { register } from "./db/client/clientesNuevo.js";
import express from "express";


const router = express.Router();

router.post("/clientenuevo", register);


export default router