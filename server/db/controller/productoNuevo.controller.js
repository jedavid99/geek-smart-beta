import { db } from "../../db.js";

export const registroProducto = async (req, res) => {
  const { nombre, categoria, servicio, dispositivo, precio } = req.body;
  try {
    const [rows] = await db.query(
      "INSERT INTO servicio (nombre, categoria, servicio, precio, dispositivo) VALUES (?,?,?,?,?)",
      [nombre, categoria, servicio, precio, dispositivo]
    );
    res.json({
      orde: rows.insertId,
      nombre,
      categoria,
      servicio,
      dispositivo,
      precio,
    });
  } catch (error) {
    return res.status(500).json({
        message:"ocurrio un error"
    })
  }
};

