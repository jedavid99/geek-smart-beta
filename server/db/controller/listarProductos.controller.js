import { db } from "../../db.js";

export const listarProducto = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM servicio");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "ocurrio un error",
    });
  }
};

export const listarProductoId = async (req, res) => {
  const { orde } = req.params;
  try {
    const [rows] = await db.query("SELECT * FROM servicio WHERE orde = ?", [
      orde,
    ]);
    if (rows.length === 0) {
      return res.status(404).json({
        message: "el producto no existe",
      });
    }
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "ocurrio un error",
    });
  }
};
