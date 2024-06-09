import * as CtrlistarPorductos from "../controller/listarProductos.controller.js";
import { productoEliminar } from "../controller/productoDelate.controller.js";
import { editarProducto } from "../controller/productoEdit.controller.js";
import { registroProducto } from "../controller/productoNuevo.controller.js";
import { Router } from "express";

const router = Router();

router.get("/producto", CtrlistarPorductos.listarProducto);
router.get("/producto/:orde", CtrlistarPorductos.listarProductoId);
router.post("/producto", registroProducto);
router.patch("/producto/:orde", editarProducto);
router.delete("/producto/:orde", productoEliminar);

export default router;
