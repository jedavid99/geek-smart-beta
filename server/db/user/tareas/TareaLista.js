import db from "../../../db.js";


export const ListarTarea = async (req, res) => {
  try {
    const client = await db.connect(); // Obtener una conexión activa
    try {
      const result = await client.query("SELECT * FROM tarea ORDER BY created_at DESC ");
      res.json(result.rows);
    } finally {
      client.release(); // Liberar la conexión
    }
  } catch (error) {
    return res.status(500).json({
      message: "ocurrio un error",
    });
  }
};

export const ListarTareaId = async (req, res) => {
  const { id } = req.params;
  try {
    const client = await db.connect(); // Obtener una conexión activa
    try {
      const result = await client.query("SELECT * FROM tarea WHERE id = $1", [id]);
      if (result.rows.length === 0) {
        return res.status(404).json({
          message: "la tarea no existe",
        });
      }
      res.json(result.rows[0]);
    } finally {
      client.release(); // Liberar la conexión
    }
  } catch (error) {
    return res.status(500).json({
      message: "ocurrio un error",
    });
  }
};