import { db } from "../../db.js";

export const editarDatosEmpresa = async (req, res) => {
    const { id } = req.params;
    const { nombre_de_empresa, CUIT_CUIL,Dirección ,logo_de_empresa ,google_maps ,servicio_de_la_empresa,dueño_de_la_empresa ,telefono_de_la_empresa } = req.body;
    try {
      const [resul] = await db.query(
        "UPDATE empresas SET nombre_de_empresa = IFNULL(?, nombre_de_empresa), CUIT_CUIL = IFNULL(?, CUIT_CUIL), Dirección = IFNULL(?, Dirección), logo_de_empresa = IFNULL(?, logo_de_empresa), google_maps = IFNULL(?, google_maps), servicio_de_la_empresa = IFNULL(?, servicio_de_la_empresa),dueño_de_la_empresa = IFNULL(?, dueño_de_la_empresa),telefono_de_la_empresa = IFNULL(?, telefono_de_la_empresa) WHERE id = ?",
        [nombre_de_empresa ,CUIT_CUIL ,Dirección ,logo_de_empresa ,google_maps ,servicio_de_la_empresa ,dueño_de_la_empresa ,telefono_de_la_empresa,id ]
      );
  
      if (resul.affectedRows === 0) {
        return res.status(404).json({
          message: "error",
        });
      }
  
      const [rows] = await db.query("SELECT * FROM empresas WHERE id = ?", [
        id,
      ]);
      res.json(rows[0]);
    } catch (error) {
      return res.status(500).json({
        message: "ocurrio un error",
      });
    }
  };
