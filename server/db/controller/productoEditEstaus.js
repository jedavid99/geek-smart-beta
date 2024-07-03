import { db } from "../../db.js";

export const editarProductoEstatus = async (req, res) => {
  const { codigo } = req.params;
  const { estatus } = req.body;
  try {
    const [result] = await db.query(
      "UPDATE servicio SET  estatus = IFNULL(?, estatus) WHERE codigo = ?",
      [estatus, codigo]
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
