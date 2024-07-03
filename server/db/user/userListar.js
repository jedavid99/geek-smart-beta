import db from "../../db.js";

export const ListarUser = async (req, res) => {
    try {
      const [rows] = await db.query("SELECT * FROM usuarios");
      res.json(rows);
    } catch (error) {
      return res.status(500).json({
        message: "ocurrio un error",
      });
    }
  };
  
  export const ListarUserId = async (req, res) => {
    const { id } = req.params;
    try {
      const [rows] = await db.query("SELECT * FROM usuarios WHERE id = ?", [
        id,
      ]);
      if (rows.length === 0) {
        return res.status(404).json({
          message: "el usuario no existe",
        });
      }
      res.json(rows[0]);
    } catch (error) {
      return res.status(500).json({
        message: "ocurrio un error",
      });
    }
  };