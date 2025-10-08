import express from "express"
import dotenv from "dotenv";
import { connectToDB } from "./DB/db.js";

import userRouter from "./users/user.router.js";
import stationRouter from "./stations/station.router.js";
import vehicleRouter from "./vehicles/vehicle.router.js";

dotenv.config();


const PORT = process.env.PORT || 5500;
const server = express();

server.use(express.json());

server.get('/',(req,res)=>{
    res.send('Server is running and connected to DB');
});

server.use('/api/user',userRouter)
server.use('/api/station',stationRouter)
server.use('/api/vehicle',vehicleRouter)

connectToDB().then(() => {
    console.log("Database connected");
    server.listen(PORT , ()=>console.log(`http://localhost:${PORT}`));
});