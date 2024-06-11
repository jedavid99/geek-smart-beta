import { db } from "../../db.js";

export const editarLogoEmpresa = async (req, res) => {
    const { id } = req.params;
    const {logo_de_empresa  } = req.body;
    try {
      const [resul] = await db.query(
        "UPDATE empresas SET  logo_de_empresa = IFNULL(?, logo_de_empresa) WHERE id = ?",
        [logo_de_empresa ,id ]
      );
  
      if (resul.affectedRows === 0) {
        return res.status(404).json({
          message: "el logo no existe",
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



  