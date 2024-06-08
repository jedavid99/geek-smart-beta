import { json } from "express";
import { db } from "../../db.js";

export const register = async (req, res) => {
  const { nombre, categoria, servicio, dispositivo, precio } = req.body;
  try {
    const [rows] = await db.query(
      "INSERT INTO servicio (nombre, categoria, servicio, precio, dispositivo) VALUES (?,?,?,?,?)",
      [nombre, categoria, servicio, precio, dispositivo]
    );
    res.json({
      orde: rows.insertId,
      nombre,
      categoria,
      servicio,
      dispositivo,
      precio,
    });
  } catch (error) {
    return res.status(500).json({
        message:"ocurrio un error"
    })
  }
};

// export const register = async(req, res) => {
//     const { nombre,categoria,servicio,dispositivo,numerocli,precio,descripcionser} = req.body;

//       const SQL = 'INSERT INTO servicio (nombre, categoria, servicio, precio, dispositivo) VALUES (?,?,?,?,?)'
//        const VALUES =  [nombre, categoria, servicio, precio, dispositivo]

//        await db.query(SQL, VALUES, (err, results)=>{
//         if(err){
//             res.send(err)
//         }
//         else{
//             console.log('El usuario se registro correctamente')
//             res.send({message: 'Ususario agregado'})
//         }
//     })
// }
