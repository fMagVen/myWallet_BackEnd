import {MongoClient} from 'mongodb'
import dotenv from 'dotenv'
dotenv.config()

const mongoClient = new MongoClient(process.env.DB_URI)
await mongoClient.connect()
let db = mongoClient.db("mywallet")
export default db