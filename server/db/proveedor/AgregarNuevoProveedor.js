import { db } from "../../db.js";

export const registroProveedor = async (req, res) => {
  const { nombre, CUIT_CUIL, Dirección, telefono, categoria, calidad } = req.body;
  try {
    const result = await db.query(
      "INSERT INTO proveedor (nombre, CUIT_CUIL, Dirección, telefono, categoria, calidad) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id",
      [nombre, CUIT_CUIL, Dirección, telefono, categoria, calidad]
    );
    const id = result.rows[0].id; // Obtener el ID del registro insertado
    res.json({
      id,
      nombre,
      CUIT_CUIL,
      Dirección,
      telefono,
      categoria,
      calidad
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "ocurrio un error"
    });
  }
};