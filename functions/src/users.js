import { dbConnect } from "./dbConnect.js";
export async function creatUser(req, res) {
    const db = dbConnect();

    // using .then() .catch()

    //using 
    const doc = await db.collection('users').add(req.body)
    .catch(err =>res.status(500).send({ succsess:false, message:err}));
    res.status(201).send({ success: true, message: "User created " + doc.id})


}
