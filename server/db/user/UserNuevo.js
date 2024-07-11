import { db } from "../../db.js";

export const registroUser = async (req, res) => {
  const { usuario, clave, rol, cargo, nombre, dni, numero } = req.body;
  try {
    const result = await db.query(
      "INSERT INTO usuarios (usuario,clave,rol,cargo,nombre,dni,numero) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *",
      [usuario, clave, rol, cargo, nombre, dni, numero]
    );
    const id = result.rows[0].id; // Obtener el ID del registro insertado
    res.json({
      id,
      usuario,
      clave,
      rol,
      cargo,
      nombre,
      dni,
      numero,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "ocurrio un error",
    });
  }
};