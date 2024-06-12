import { db } from "../../db.js";



export const registroProveedor = async (req, res) => {
  const { nombre,CUIT_CUIL,Dirección,telefono, categoria,calidad} = req.body;
  try {
    const [rows] = await db.query(
      "INSERT INTO proveedor (nombre,CUIT_CUIL,Dirección,telefono, categoria,calidad) VALUES (?,?,?,?,?,?)",
      [nombre,CUIT_CUIL,Dirección,telefono, categoria,calidad]
    );
    res.json({
      orde: rows.insertId,
      nombre,
      CUIT_CUIL,
      Dirección,
      telefono,
       categoria,
       calidad
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
       message:"ocurrio un error"
     })
  }
};

