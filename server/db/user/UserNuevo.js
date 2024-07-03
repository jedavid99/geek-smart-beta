import { db } from "../../db.js";

export const registroUser = async (req, res) => {
  const { usuario, clave, rol, cargo, nombre, dni, numero } = req.body;
  try {
    const [rows] = await db.query(
      "INSERT INTO usuarios (usuario,clave,rol,cargo,nombre,dni,numero) VALUES (?,?,?,?,?,?,?)",

      [usuario, clave, rol, cargo, nombre, dni, numero]
    );
    res.json({
      id: rows.insertId,
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
