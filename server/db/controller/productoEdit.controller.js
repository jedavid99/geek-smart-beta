import { db } from "../../db.js";

export const editarProducto = async (req, res) => {
  const { codigo } = req.params;
  const { DNI,nombre, categoria, servicio, dispositivo, precio,telefono_Cliente,descripcion,estatus ,emei_codigo} = req.body;
  try {
    const [result] = await db.query(
      "UPDATE servicio SET DNI = IFNULL(?, DNI), nombre = IFNULL(?, nombre), categoria = IFNULL(?, categoria), servicio = IFNULL(?, servicio), dispositivo = IFNULL(?, dispositivo), precio = IFNULL(?, precio),telefono_Cliente = IFNULL(?, telefono_Cliente),descripcion = IFNULL(?, descripcion), estatus = IFNULL(?, estatus), emei_codigo = IFNULL(?, emei_codigo)  WHERE codigo = ?",
      [DNI,nombre, categoria, servicio, dispositivo, precio, telefono_Cliente,descripcion,estatus,emei_codigo, codigo]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "el producto no existe",
      });
    }

    const [rows] = await db.query("SELECT * FROM servicio WHERE codigo = ?", [
      codigo,
    ]);
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "ocurrio un error",
    });
  }
};
