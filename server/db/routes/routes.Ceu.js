import * as CtrlistarPorductos from "../controller/listarProductos.controller.js";
import { productoEliminar } from "../controller/productoDelate.controller.js";
import { editarProducto } from "../controller/productoEdit.controller.js";
import { registroProducto } from "../controller/productoNuevo.controller.js";
import { registrarEmpresa } from "../empresa/DatosEmpresa.js";
import { editarLogoEmpresa } from "../empresa/LogoEmpresa.js";
import { editarDatosEmpresa } from "../empresa/EditDatosEmpresa.js";
import { registroProveedor } from "../proveedor/AgregarNuevoProveedor.js";
import { editarProveedor } from "../proveedor/EditarProveedor.js";
import { proveedorEliminar } from "../proveedor/DeleteProvedor.js";
import * as CtrlistarProveedores from "../proveedor/ListaProveedor.js";
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


//RUTAS PROVEEDOR
router.post("/proveedor", registroProveedor);
router.patch("/proveedor/:id", editarProveedor);
router.delete("/proveedor/:id", proveedorEliminar);
router.get("/proveedor", CtrlistarProveedores.listarProveedores);
router.get("/proveedor/:id", CtrlistarProveedores.listarProveedoresId);




export default router;
