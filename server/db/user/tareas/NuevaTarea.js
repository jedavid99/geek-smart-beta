import { db } from "../../../db.js";

export const RegistroTareas = async (req, res) => {
  const { tarea, created_at, status, titulo } = req.body;
  try {
    const result = await db.query(
      "INSERT INTO tarea (tarea, created_at, status, titulo, fecha_update) VALUES ($1, $2, $3, $4, NOW()) RETURNING *",
      [tarea, created_at, status, titulo]
    );
    const id = result.rows[0].id; // Obtener el ID del registro insertado
    res.json({
      id,
      tarea,
      created_at,
      status,
      titulo
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "ocurrio un error"
    });
  }
};