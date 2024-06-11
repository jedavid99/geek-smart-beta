import * as CtrlistarPorductos from "../controller/listarProductos.controller.js";
import { productoEliminar } from "../controller/productoDelate.controller.js";
import { editarProducto } from "../controller/productoEdit.controller.js";
import { registroProducto } from "../controller/productoNuevo.controller.js";
import { registrarEmpresa } from "../empresa/DatosEmpresa.js";
import { editarLogoEmpresa } from "../empresa/LogoEmpresa.js";
import { editarDatosEmpresa } from "../empresa/EditDatosEmpresa.js";
import { Router } from "express";

const router = Router();
//RUTAS SERVICIO
router.get("/producto", CtrlistarPorductos.listarProducto);
router.get("/producto/:orde", CtrlistarPorductos.listarProductoId);
router.post("/producto", registroProducto);
router.post("/producto", registroProducto);
router.patch("/producto/:orde", editarProducto);
router.delete("/producto/:orde", productoEliminar);

//RUTAS EMPRESAS
router.post("/empresa", registrarEmpresa);
router.patch("/empresa/:id", editarLogoEmpresa);
router.patch("/empresa_datos/:id", editarDatosEmpresa);


export default router;
