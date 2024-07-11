import {db} from "../../db.js";

export const UserEliminar = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query("DELETE FROM usuarios WHERE id = $1", [id]);
    if (result.rowCount === 0) {
      return res.status(404).json({
        message: "el usuarios  no existe",
      });
    }
    res.json({
      message: "Usuarios eliminado con exito",
    });
  } catch (error) {
    return res.status(500).json({
      message: "ocurrio un error",
    });
  }
};
