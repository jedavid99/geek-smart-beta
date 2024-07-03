import { db } from "../../../db.js";

export const RegistroTareas = async (req, res) => {
  const { tarea, created_at, status, titulo } = req.body;
  try {
    const [rows] = await db.query(
      "INSERT INTO tarea (tarea, created_at, status, titulo, fecha_update) VALUES (?,?,?,?, NOW())",
      [tarea, created_at, status, titulo]
    );
    res.json({
      id: rows.insertId,
      tarea,
      created_at,
      status,
      titulo
    });
  } catch (error) {
    console.log(error);
    // return res.status(500).json({
    //     message:"ocurrio un error"
    // })
  }
};