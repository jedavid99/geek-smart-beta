const express = require("express");
const app = express();
const cors =require("cors")
const mysql = require("mysql");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection
({
   host:"localhost",
   user:"root",
   password:"123",
   database:"geeksamrt"
   
});


app.post("/clientenuevo",(req,res)=>{
    const nombre = req.body.nombre;
    const categoria = req.body.categoria;
    const servicio = req.body.servicio;
    const dispositivo = req.body.dispositivo;
    const numerocli = req.body.numerocli;
    const precio = req.body.precio;
    const descripcionser = req.body.descripcionser;
    db.query('INSERT INTO servicio (nombre,categoria,servicio,precio,dispositivo) VALUE (?,?,?,?,?)',[nombre,categoria,servicio,precio,dispositivo])



});


app.listen(3001,()=>{

console.log("corriendo el server")

})