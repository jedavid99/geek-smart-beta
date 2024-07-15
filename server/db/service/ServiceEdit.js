import { db } from "../../db.js";

export const editarServicio = async (req, res) => {
  const { codigo } = req.params;
  const {
    DNI,
    nombre,
    categoria,
    servicio,
    dispositivo,
    precio,
    telefono_Cliente,
    descripcion,
    estatus,
    emei_codigo,
  } = req.body;
  try {
    const { rowCount } = await db.query(
      "UPDATE servicio SET DNI = COALESCE($1, DNI), nombre = COALESCE($2, nombre), categoria = COALESCE($3, categoria), servicio = COALESCE($4, servicio), dispositivo = COALESCE($5, dispositivo), precio = COALESCE($6, precio), telefono_Cliente = COALESCE($7, telefono_Cliente), descripcion = COALESCE($8, descripcion), estatus = COALESCE($9, estatus), emei_codigo = COALESCE($10, emei_codigo) WHERE codigo = $11",
      [
        DNI,
        nombre,
        categoria,
        servicio,
        dispositivo,
        precio,
        telefono_Cliente,
        descripcion,
        estatus,
        emei_codigo,
        codigo,
      ]
    );

    if (rowCount === 0) {
      return res.status(404).json({
        message: "el producto no existe",
      });
    }

    const { rows } = await db.query(
      "SELECT * FROM servicio WHERE codigo = $1",
      [codigo]
    );
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "ocurrió un error",
    });
  }
};
