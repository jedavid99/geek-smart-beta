import { db } from "../../db.js";
import bcrypt from "bcrypt";

export const userEdit = async (req, res) => {
  const { id } = req.params;
  const { usuario, clave, rol, cargo, nombre, dni, numero } = req.body;

  try {
    // Hashear la clave con bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedClave = await bcrypt.hash(clave, salt);

    const result = await db.query(
      "UPDATE usuarios SET usuario = COALESCE($1, usuario), clave = $2, rol = COALESCE($3, rol), cargo = COALESCE($4, cargo), nombre = COALESCE($5, nombre), dni = COALESCE($6, dni), numero = COALESCE($7, numero) WHERE id = $8",
      [usuario, hashedClave, rol, cargo, nombre, dni, numero, id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({
        message: "el usuario no existe",
      });
    }

    const result2 = await db.query("SELECT * FROM usuarios WHERE id = $1", [
      id,
    ]);
    res.json(result2.rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "ocurrio un error",
    });
  }
};