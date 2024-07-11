import { db } from "../../db.js";

export const editarDatosEmpresa = async (req, res) => {
  const { id } = req.params;
  const { nombre_de_empresa, CUIT_CUIL, Dirección, logo_de_empresa, google_maps, servicio_de_la_empresa, dueño_de_la_empresa, telefono_de_la_empresa } = req.body;
  try {
    const { rowCount } = await db.query(
      "UPDATE empresas SET nombre_de_empresa = COALESCE($1, nombre_de_empresa), CUIT_CUIL = COALESCE($2, CUIT_CUIL), Dirección = COALESCE($3, Dirección), logo_de_empresa = COALESCE($4, logo_de_empresa), google_maps = COALESCE($5, google_maps), servicio_de_la_empresa = COALESCE($6, servicio_de_la_empresa), dueño_de_la_empresa = COALESCE($7, dueño_de_la_empresa), telefono_de_la_empresa = COALESCE($8, telefono_de_la_empresa) WHERE id = $9",
      [nombre_de_empresa, CUIT_CUIL, Dirección, logo_de_empresa, google_maps, servicio_de_la_empresa, dueño_de_la_empresa, telefono_de_la_empresa, id]
    );

    if (rowCount === 0) {
      return res.status(404).json({
        message: "error",
      });
    }

    const { rows } = await db.query("SELECT * FROM empresas WHERE id = $1", [id]);
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "ocurrio un error",
    });
  }
};