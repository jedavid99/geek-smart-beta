import { db } from "../../db.js";
import bcrypt from "bcrypt";

export const registroUser = async (req, res) => {
  const { usuario, clave, rol, cargo, nombre, dni, numero } = req.body;

  try {
    // Hashear la contraseña con bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedClave = await bcrypt.hash(clave, salt);

    const result = await db.query(
      "INSERT INTO usuarios (usuario,clave,rol,cargo,nombre,dni,numero) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *",
      [usuario, hashedClave, rol, cargo, nombre, dni, numero]
    );

    const id = result.rows[0].id;

    res.json({
      id,
      usuario,
      rol,
      cargo,
      nombre,
      dni,
      numero,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Ocurrió un error",
    });
  }
};