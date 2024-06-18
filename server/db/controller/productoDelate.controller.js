import { db } from "../../db.js";

export const productoEliminar = async (req, res) => {
  const { codigo } = req.params;
  try {
    const [rows] = await db.query("DELETE FROM servicio WHERE codigo = ?", [
      codigo,
    ]);
    if (rows.affectedRows === 0) {
      return res.status(404).json({
        message: "el producto no existe",
      });
    }
    res.json({
      message: "producto eliminado cone exito",
    });
  } catch (error) {
    return res.status(500).json({
      message: "ocurrio un error",
    });
  }
};
