import { db } from "../../db.js";

export const editarProveedor = async (req, res) => {
  const { id } = req.params;
  const { nombre,CUIT_CUIL,Dirección,telefono, categoria,calidad } = req.body;
  try {
    const [result] = await db.query(
      "UPDATE proveedor SET nombre = IFNULL(?, nombre), CUIT_CUIL = IFNULL(?, CUIT_CUIL), Dirección = IFNULL(?, Dirección), telefono = IFNULL(?, telefono), categoria = IFNULL(?, categoria), calidad = IFNULL(?, calidad) WHERE id = ?",
      [nombre,CUIT_CUIL,Dirección,telefono, categoria,calidad, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "el proveedor no existe",
      });
    }

    const [rows] = await db.query("SELECT * FROM proveedor WHERE id = ?", [id ]);
    res.json(rows[0]);
  } 
  catch (error) {
    return res.status(500).json({
      message: "ocurrio un error",
    });
  }
};
