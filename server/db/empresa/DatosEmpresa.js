import { db } from "../../db.js";

export const registrarEmpresa = async (req, res) => {
  const { nombre_de_empresa, CUIT_CUIL, Dirección, logo_de_empresa, google_maps, servicio_de_la_empresa, dueño_de_la_empresa, telefono_de_la_empresa } = req.body;
  try {
    const { rows } = await db.query(
      "INSERT INTO empresas (nombre_de_empresa, CUIT_CUIL, Dirección, logo_de_empresa, google_maps, servicio_de_la_empresa, dueño_de_la_empresa, telefono_de_la_empresa) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [nombre_de_empresa, CUIT_CUIL, Dirección, logo_de_empresa, google_maps, servicio_de_la_empresa, dueño_de_la_empresa, telefono_de_la_empresa]
    );
    res.json(rows[0]);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "ocurrio un error"
    });
  }
};