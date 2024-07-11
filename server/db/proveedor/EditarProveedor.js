import { db } from "../../db.js";

export const editarProveedor = async (req, res) => {
  const { id } = req.params;
  const { nombre, CUIT_CUIL, Dirección, telefono, categoria, calidad } = req.body;
  try {
    const result = await db.query(
      "UPDATE proveedor SET nombre = COALESCE($1, nombre), CUIT_CUIL = COALESCE($2, CUIT_CUIL), Dirección = COALESCE($3, Dirección), telefono = COALESCE($4, telefono), categoria = COALESCE($5, categoria), calidad = COALESCE($6, calidad) WHERE id = $7",
      [nombre, CUIT_CUIL, Dirección, telefono, categoria, calidad, id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({
        message: "el proveedor no existe",
      });
    }

    const result2 = await db.query("SELECT * FROM proveedor WHERE id = $1", [id]);
    res.json(result2.rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "ocurrio un error",
    });
  }
};