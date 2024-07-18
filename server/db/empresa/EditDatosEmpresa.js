import { db } from "../../db.js";

export const editarDatosEmpresa = async (req, res) => {
  const { id } = req.params;
  const {
    nombre_de_empresa,
    cuit_cuil,
    dirección,
    servicio_de_la_empresa,
    dueño_de_la_empresa,
    telefono_de_la_empresa,
  } = req.body;

  try {
    const updateQuery = {
      text: `
        UPDATE empresas
        SET nombre_de_empresa = COALESCE($1, nombre_de_empresa),
        cuit_cuil = COALESCE($2, cuit_cuil),
            dirección = COALESCE($3, dirección),
            servicio_de_la_empresa = COALESCE($4, servicio_de_la_empresa),
            dueño_de_la_empresa = COALESCE($5, dueño_de_la_empresa),
            telefono_de_la_empresa = COALESCE($6, telefono_de_la_empresa)
        WHERE id = $7
      `,
      values: [
        nombre_de_empresa,
        cuit_cuil,
        dirección,
        servicio_de_la_empresa,
        dueño_de_la_empresa,
        telefono_de_la_empresa,
        id,
      ],
    };

    const result = await db.query(updateQuery);

    if (result.rowCount === 0) {
      return res.status(404).json({ message: "Empresa no encontrada" });
    }

    const empresa = await db.query("SELECT * FROM empresas WHERE id = $1", [
      id,
    ]);
    res.json(empresa.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al actualizar empresa" });
  }
};
