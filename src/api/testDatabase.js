import { connectToDatabase } from "../lib/connectToDatabase";

module.exports = async (req, res) => {
    if(req.method === "GET"){
        const db = await connectToDatabase()
        const collection = await db.collection("sample_restaurants")

        const users = await collection.find({}).toArray()

        res.status(200).json({users})
    }
}