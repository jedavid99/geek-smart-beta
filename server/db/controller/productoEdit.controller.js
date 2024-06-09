import { db } from "../../db.js";

export const editarProducto = async (req, res) => {
  const { orde } = req.params;
  const { nombre, categoria, servicio, dispositivo, precio } = req.body;
  try {
    const [result] = await db.query(
      "UPDATE servicio SET nombre = IFNULL(?, nombre), categoria = IFNULL(?, categoria), servicio = IFNULL(?, servicio), dispositivo = IFNULL(?, dispositivo), precio = IFNULL(?, precio) WHERE orde = ?",
      [nombre, categoria, servicio, dispositivo, precio, orde]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "el producto no existe",
      });
    }

    const [rows] = await db.query("SELECT * FROM servicio WHERE orde = ?", [
      orde,
    ]);
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "ocurrio un error",
    });
  }
};
