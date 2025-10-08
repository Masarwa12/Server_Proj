import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.CONNECTION_STRING;
const client = new MongoClient(uri);

let db;
export async function connectToDB() {
    try {
        await client.connect();
        db= client.db(process.env.DB_NAME);
        console.log("Connected to database");
        return db;
    } catch (error) {
        console.error("Database connection error:", error);
        process.exit(1);
    }
}
export function getDB() {
    if (!db) {
        throw new Error("Database not connected. Call connectToDB first.");
    }
    return db;
}