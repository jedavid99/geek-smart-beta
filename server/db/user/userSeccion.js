import { db } from "../../db.js";
import jwt from "jsonwebtoken";

export const UserSeccion = async (req, res) => {
  console.log("Request received: ", req.body); // Log inicial

  const { usuario, clave } = req.body;
  const consult = `SELECT * FROM usuarios WHERE usuario = ? AND clave = ?`;

  try {
    console.log("About to query the database");
    const [result] = await db.query(consult, [usuario, clave]);
    console.log("Database query result: ", result);

    if (result.length > 0) {
      console.log("User found, generating token");
      jwt.sign({ usuario }, "Stack", { expiresIn: '3m' }, (err, token) => {
        if (err) {
          console.error("JWT sign error: ", err); // Log de error
          return res.status(500).send("Error al generar el token");
        }
        console.log("Token generated: ", token); // Log de éxito
        res.json({ token });
      });
    } else {
      console.log("Invalid credentials"); // Log de credenciales inválidas
      res.status(401).send("Credenciales incorrectas");
    }
  } catch (error) {
    console.error("Server error: ", error); // Log de error del servidor
    res.status(500).send("Error del servidor");
  }
};