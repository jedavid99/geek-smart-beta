import { db } from "../../db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const UserSeccion = async (req, res) => {
    console.log("Request received: ", req.body); // Log inicial

    const { usuario, clave } = req.body;
    const consult = `SELECT * FROM usuarios WHERE usuario = $1`;

    try {
        console.log("About to query the database");
        const { rows } = await db.query(consult, [usuario]);
        console.log("Database query result: ", rows);

        if (rows.length > 0) {
            const hashedClave = rows[0].clave;
            const isValid = await bcrypt.compare(clave, hashedClave);

            if (isValid) {
                console.log("User found, generating token");

                // Generate JWT token
                const token = jwt.sign({ usuario }, "Stack", { expiresIn: "3m" });
                console.log("Token generated: ", token); // Log de éxito
                res.json({ token });
            } else {
                console.log("Invalid credentials"); // Log de credenciales inválidas
                res.status(401).send("Credenciales incorrectas");
            }
        } else {
            console.log("Invalid credentials"); // Log de credenciales inválidas
            res.status(401).send("Credenciales incorrectas");
        }
    } catch (error) {
        console.error("Server error: ", error); // Log de error del servidor
        res.status(500).send("Error del servidor");
    }
};