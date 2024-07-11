import * as CtrlistarPorductos from "../service/listarService.js";
import { productoEliminar } from "../service/serviceDelate.js";
import { editarProducto } from "../service/ServiceEdit.js";
import { registroProducto } from "../service/ServiceNuevo.js";
import { registrarEmpresa } from "../empresa/DatosEmpresa.js";
import { editarDatosEmpresa } from "../empresa/EditDatosEmpresa.js";
import { registroProveedor } from "../proveedor/AgregarNuevoProveedor.js";
import { editarProveedor } from "../proveedor/EditarProveedor.js";
import { proveedorEliminar } from "../proveedor/DeleteProvedor.js";
import { RegistroTareas } from "../user/tareas/NuevaTarea.js";
import { registroUser } from "../user/userNuevo.js";
import { UserEliminar } from "../user/userElimnar.js";
import { UserSeccion } from "../user/userSeccion.js";

import * as CtrListarUsers from "../user/userListar.js";
import * as CtrlistarProveedores from "../proveedor/ListaProveedor.js";
import * as CtrlistarEmpresa from "../empresa/Empresa.js";
import { Router } from "express";

const router = Router();
//RUTAS SERVICIO
router.get("/producto", CtrlistarPorductos.listarProducto);
router.get("/producto/:codigo", CtrlistarPorductos.listarProductoId);
router.post("/producto", registroProducto);
router.post("/producto", registroProducto);
router.patch("/producto/:codigo", editarProducto);
router.delete("/producto/:codigo", productoEliminar);


//RUTAS EMPRESAS
router.post("/empresa", registrarEmpresa);
router.patch("/empresa_datos/:id", editarDatosEmpresa);
router.get("/empresa_lista", CtrlistarEmpresa.listarEmpresa);
router.get("/empresa_lista/:id", CtrlistarEmpresa.listarEmpresaId);

//RUTAS PROVEEDOR
router.post("/proveedor", registroProveedor);
router.patch("/proveedor/:id", editarProveedor);
router.delete("/proveedor/:id", proveedorEliminar);
router.get("/proveedor", CtrlistarProveedores.listarProveedores);
router.get("/proveedor/:id", CtrlistarProveedores.listarProveedoresId);

//RUTAS tareas
router.post("/tarea", RegistroTareas);



//RUTAS usuarios
router.post("/seccion", UserSeccion);

router.get("/user",  CtrListarUsers.ListarUser);
router.get("/user/:id",  CtrListarUsers.ListarUserId);
router.post("/user_nuevo", registroUser);
router.delete("/user/:id", UserEliminar);


export default router;
