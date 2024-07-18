import { db } from "../../db.js";

export const registroServicio = async (req, res) => {
  const {
    nombre,
    categoria,
    servicio,
    dispositivo,
    precio,
    DNI,
    telefono_Cliente,
    descripcion,
    estatus,
    emei_codigo,
  } = req.body;
  try {
    const { rows } = await db.query(
      "INSERT INTO servicio (nombre, categoria, servicio, precio, dispositivo, DNI, telefono_Cliente, descripcion, estatus, emei_codigo) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *",
      [
        nombre,
        categoria,
        servicio,
        precio,
        dispositivo,
        DNI,
        telefono_Cliente,
        descripcion,
        estatus,
        emei_codigo,
      ]
    );
    res.json(rows[0]);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "ocurrio un error",
    });
  }
};
