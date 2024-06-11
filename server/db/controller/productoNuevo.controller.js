import { db } from "../../db.js";



export const registroProducto = async (req, res) => {
  const { nombre, categoria, servicio, dispositivo, precio,DNI ,telefono_Cliente,descripcion} = req.body;
  try {
    const [rows] = await db.query(
      "INSERT INTO servicio (nombre, categoria, servicio, precio, dispositivo,DNI,telefono_Cliente,descripcion) VALUES (?,?,?,?,?,?,?,?)",
      [nombre, categoria, servicio, precio, dispositivo,DNI,telefono_Cliente,descripcion]
    );
    res.json({
      orde: rows.insertId,
      nombre,
      categoria,
      servicio,
      dispositivo,
      precio,
      DNI,
      telefono_Cliente,
      descripcion,
    });
  } catch (error) {
    console.log(error);
    // return res.status(500).json({
    //     message:"ocurrio un error"
    // })
  }
};

