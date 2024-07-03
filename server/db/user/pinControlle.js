import {db} from "../../db.js";

export const pingControlle = async  (req, res) =>{
    const consult = 'SELECT * FROM usuarios';

    try {
        db.query(consult, (err, results)=>{
            console.log(results)
            res.json(results)
        });
    } catch (e) {

    }
}