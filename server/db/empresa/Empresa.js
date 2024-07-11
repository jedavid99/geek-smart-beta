import { db } from "../../db.js";

export const listarEmpresa = async (req, res) => {
  try {
    const { rows } = await db.query("SELECT * FROM empresas");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "ocurrio un error",
    });
  }
};

export const listarEmpresaId = async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await db.query("SELECT * FROM empresas WHERE id = $1", [id]);
    if (rows.length === 0) {
      return res.status(404).json({
        message: "la empresa no existe",
      });
    }
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "ocurrio un error",
    });
  }
};