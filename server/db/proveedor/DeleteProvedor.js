import { db } from "../../db.js";

export const proveedorEliminar = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await db.query("DELETE FROM proveedor WHERE id = ?", [
      id,
    ]);
    if (rows.affectedRows === 0) {
      return res.status(404).json({
        message: "el proveedor  no existe",
      });
    }
    res.json({
      message: "Proveedor eliminado con exito",
    });
  } catch (error) {
    return res.status(500).json({
      message: "ocurrio un error",
    });
  }
};
