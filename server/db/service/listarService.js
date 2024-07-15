import { db } from "../../db.js";

export const listarServicio = async (req, res) => {
  try {
    const { rows } = await db.query("SELECT * FROM servicio");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "ocurrió un error",
    });
  }
};

export const listarServicioId = async (req, res) => {
  const { codigo } = req.params;
  try {
    const { rows } = await db.query("SELECT * FROM servicio WHERE codigo = $1", [codigo]);
    if (rows.length === 0) {
      return res.status(404).json({
        message: "el producto no existe",
      });
    }
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "ocurrió un error",
    });
  }
};