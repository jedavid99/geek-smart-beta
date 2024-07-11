import { db } from "../../db.js";

export const productoEliminar = async (req, res) => {
  const { codigo } = req.params;
  try {
    const { rows } = await db.query("DELETE FROM servicio WHERE codigo = $1", [codigo]);
    if (rows.rowCount === 0) {
      return res.status(404).json({
        message: "el producto no existe",
      });
    }
    res.json({
      message: "producto eliminado con éxito",
    });
  } catch (error) {
    return res.status(500).json({
      message: "ocurrió un error",
    });
  }
};