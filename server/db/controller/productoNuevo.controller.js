import { db } from "../../db.js";



export const registroProducto = async (req, res) => {
  const { nombre, categoria, servicio, dispositivo, precio,DNI ,telefono_Cliente,descripcion,estatus,emei_codigo} = req.body;
  try {
    const [rows] = await db.query(
      "INSERT INTO servicio (nombre, categoria, servicio, precio, dispositivo,DNI,telefono_Cliente,descripcion,estatus,emei_codigo) VALUES (?,?,?,?,?,?,?,?,?,?)",
      [nombre, categoria, servicio, precio, dispositivo,DNI,telefono_Cliente,descripcion,estatus,emei_codigo]
    );
    res.json({
      codigo: rows.insertId,
      nombre,
      categoria,
      servicio,
      dispositivo,
      precio,
      DNI,
      telefono_Cliente,
      descripcion,
      estatus,
      emei_codigo
    });
  } catch (error) {
    console.log(error);
    // return res.status(500).json({
    //     message:"ocurrio un error"
    // })
  }
};

